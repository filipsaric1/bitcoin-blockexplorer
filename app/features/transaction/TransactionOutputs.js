import { makeStyles } from '@material-ui/core';
import { useQuery } from 'react-query';
import TransactionOutput from './TransactionOutput';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
  },
});

const TransactionOutputs = ({ data }) => {
  const classes = useStyles();

  if (!data) {
    return null;
  }

  return (
    <div className={classes.container}>
      <h2>Outputs</h2>
      <div className={classes.transactionDetails}>
        {data.map((item, index) => (
          <TransactionOutput data={item} key={index} position={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default TransactionOutputs;
