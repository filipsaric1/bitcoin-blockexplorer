import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import transactionApi from '../../api/transaction';
import Transaction from '../../features/transaction/Transaction';
import NotFound from '../../components/NotFound';

const TransactionPage = ({}) => {
  const { query } = useRouter();
  const { txid } = query;
  const { data, isError } = useQuery(
    ['transaction', txid],
    () => transactionApi.getTransaction(txid),
    { enabled: !!txid },
  );

  if (isError) {
    return <NotFound />;
  }

  if (!data) {
    return null;
  }

  return <Transaction data={data} />;
};
export default TransactionPage;
