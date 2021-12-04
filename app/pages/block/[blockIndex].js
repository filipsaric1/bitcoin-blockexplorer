import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import blockApi from '../../api/block';
import NotFound from '../../components/NotFound';
import BlockInfo from '../../features/block/BlockInfo';

const Block = ({}) => {
  const { query } = useRouter();
  const { blockIndex } = query;
  const { data, isError } = useQuery(
    ['block', blockIndex],
    () => blockApi.getBlock(blockIndex),
    { enabled: !!blockIndex },
  );

  if (isError) {
    return <NotFound />;
  }

  if (!data) {
    return null;
  }

  return <BlockInfo data={data} />;
};
export default Block;
