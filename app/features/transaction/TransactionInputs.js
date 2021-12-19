import { makeStyles } from '@material-ui/core';
import TransactionInput from './TransactionInput';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
  },
});

const TransactionInputs = ({ data, isCoinbaseTransaction }) => {
  const classes = useStyles();

  if (!data) {
    return null;
  }

  return (
    <div className={classes.container}>
      <h2>Inputs</h2>
      <div className={classes.transactionDetails}>
        {data.map((item, index) => (
          <TransactionInput
            isCoinbaseTransaction={isCoinbaseTransaction}
            data={item}
            key={index}
            position={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionInputs;
