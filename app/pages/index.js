import LastBlock from '../features/block/LastBlock';
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
      <LastBlock />
      <LastBlockTransactions />
    </div>
  );
};

export default Home;
