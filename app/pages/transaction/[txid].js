import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import transactionApi from '../../api/transaction';
import Layout from '../../layout/Layout';
import Transaction from '../../features/transaction/Transaction';

const TransactionPage = ({}) => {
  const { query } = useRouter();
  const { txid } = query;
  const { data, isLoading } = useQuery(
    ['transaction', txid],
    () => transactionApi.getTransaction(txid),
    { enabled: !!txid },
  );

  if (!data) {
    return null;
  }

  return (
    <Layout>
      <Transaction data={data} />
    </Layout>
  );
};
export default TransactionPage;
