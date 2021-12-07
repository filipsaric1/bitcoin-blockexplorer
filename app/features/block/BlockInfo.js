import { makeStyles } from '@material-ui/core';
import TransactionList from '../transaction/TransactionList';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
  },
  info: {
    display: 'flex',
    borderBottom: '1px solid lightgrey',
    justifyContent: 'space-between',
    padding: 10,
  },
  blockDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  infoKey: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoValue: {
    fontSize: 16,
  },
});

const BlockInfo = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2>Block Details</h2>
      <div className={classes.blockDetails}>
        <div className={classes.info}>
          <span className={classes.infoKey}>Block hash</span>
          <span className={classes.infoValue}>{data.hash}</span>
        </div>
        <div className={classes.info}>
          <span className={classes.infoKey}>Height</span>
          <span className={classes.infoValue}>{data.height}</span>
        </div>
        <div className={classes.info}>
          <span className={classes.infoKey}>Nonce</span>
          <span className={classes.infoValue}>{data.nonce}</span>
        </div>
        <div className={classes.info}>
          <span className={classes.infoKey}>Confirmations</span>
          <span className={classes.infoValue}>{data.confirmations}</span>
        </div>
        <div className={classes.info}>
          <span className={classes.infoKey}>Difficulty</span>
          <span className={classes.infoValue}>{data.difficulty}</span>
        </div>
        <div className={classes.info}>
          <span className={classes.infoKey}>Max fee</span>
          <span className={classes.infoValue}>{data.maxfee}</span>
        </div>
        <div className={classes.info}>
          <span className={classes.infoKey}>Min fee</span>
          <span className={classes.infoValue}>{data.minfee}</span>
        </div>
        <div className={classes.info}>
          <span className={classes.infoKey}>Total fee</span>
          <span className={classes.infoValue}>{data.totalfee}</span>
        </div>
        <div className={classes.info}>
          <span className={classes.infoKey}>Time</span>
          <span className={classes.infoValue}>
            {new Date(data.time * 1000).toString()}
          </span>
        </div>
      </div>
      <h2>Transactions ({data.txs})</h2>
      <TransactionList data={data.tx} />
    </div>
  );
};

export default BlockInfo;
