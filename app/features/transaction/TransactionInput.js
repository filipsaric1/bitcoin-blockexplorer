import { makeStyles } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
    maxWidth: '100%',
  },
  info: {
    display: 'flex',
    borderBottom: '1px solid lightgrey',
    justifyContent: 'space-between',
    padding: 10,
  },
  inputInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  infoKey: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingRight: 10,
  },
  infoValue: {
    fontSize: 16,
    wordBreak: 'break-all',
  },
});

const TransactionInput = ({ data, position }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h3>Input {position}</h3>
      <div className={classes.inputInfo}>
        <div className={classes.info}>
          <span className={classes.infoKey}>Transaction</span>
          <Link href={`/transaction/${data.txid}`}>
            <span className={classes.infoValue}>{data.txid}</span>
          </Link>
        </div>

        <div className={classes.info}>
          <span className={classes.infoKey}>ScriptSig</span>
          <span className={classes.infoValue}>{data.scriptSig.asm}</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionInput;
