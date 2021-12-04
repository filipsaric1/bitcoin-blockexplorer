import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import blockApi from '../../api/block';
import Layout from '../../layout/Layout';

const Block = ({}) => {
  const { query } = useRouter();
  const { blockIndex } = query;
  const { data, isLoading } = useQuery(
    ['block', blockIndex],
    () => blockApi.getBlock(blockIndex),
    { enabled: !!blockIndex },
  );
  console.log(data);

  return (
    <Layout>
      <div>{blockIndex}</div>
    </Layout>
  );
};
export default Block;
