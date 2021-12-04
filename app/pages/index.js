import LastBlocks from '../features/block/LastBlocks';
import LastBlockTransactions from '../features/transaction/LastBlockTransactions';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flex: 1,
  },
});
const Home = () => {
  const { container } = useStyles();
  return (
    <div className={container}>
      <LastBlocks />
      <LastBlockTransactions />
    </div>
  );
};

export default Home;
