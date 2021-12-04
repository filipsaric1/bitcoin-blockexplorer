import LastBlocks from '../features/block/LastBlocks';
import LastBlockTransactions from '../features/transaction/LastBlockTransactions';
import { makeStyles } from '@material-ui/core';
import Layout from '../layout/Layout';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flex: 1,
  },
});
const Home = () => {
  const { container } = useStyles();
  return (
    <Layout>
      <div className={container}>
        <LastBlocks />
        <LastBlockTransactions />
      </div>
    </Layout>
  );
};

export default Home;
