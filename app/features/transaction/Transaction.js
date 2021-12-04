import { makeStyles } from '@material-ui/core';
import { useQuery } from 'react-query';
import convertApi from '../../api/convertToUsd';
import TransactionInputs from './TransactionInputs';
import TransactionOutputs from './TransactionOutputs';

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
  transactionDetails: {
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

const Transaction = ({ data }) => {
  const classes = useStyles();
  const { data: feeUsd } = useQuery(['convertFee', data.fee], () =>
    convertApi.convertToUsd(data.fee),
  );

  const { data: outputsUsd } = useQuery(
    ['convertOutputs', data.outputsSum],
    () => convertApi.convertToUsd(data.outputsSum),
  );

  const { data: inputsUsd } = useQuery(['convertInputs', data.inputsSum], () =>
    convertApi.convertToUsd(data.inputsSum),
  );

  return (
    <div className={classes.container}>
      <h2>Transaction details</h2>
      <div className={classes.transactionDetails}>
        <div className={classes.info}>
          <span className={classes.infoKey}>Transaction hash</span>
          <span className={classes.infoValue}>{data.hash}</span>
        </div>
        <div className={classes.info}>
          <span className={classes.infoKey}>Size</span>
          <span className={classes.infoValue}>{data.size} bytes</span>
        </div>
        <div className={classes.info}>
          <span className={classes.infoKey}>Fee (BTC)</span>
          <span className={classes.infoValue}>{data.fee}</span>
        </div>
        <div className={classes.info}>
          <span className={classes.infoKey}>Fee (USD)</span>
          <span className={classes.infoValue}>
            {feeUsd?.toFixed(2) || 'loading...'}
          </span>
        </div>
        <div className={classes.info}>
          <span className={classes.infoKey}>Total output (BTC)</span>
          <span className={classes.infoValue}>{data.outputsSum}</span>
        </div>
        <div className={classes.info}>
          <span className={classes.infoKey}>Total output (USD)</span>
          <span className={classes.infoValue}>
            {' '}
            {outputsUsd?.toFixed(2) || 'loading...'}
          </span>
        </div>
        <div className={classes.info}>
          <span className={classes.infoKey}>Total input (BTC)</span>
          <span className={classes.infoValue}>{data.inputsSum}</span>
        </div>
        <div className={classes.info}>
          <span className={classes.infoKey}>Total input (USD)</span>
          <span className={classes.infoValue}>
            {' '}
            {inputsUsd?.toFixed(2) || 'loading...'}
          </span>
        </div>
      </div>
      <TransactionInputs data={data.vin} />
      <TransactionOutputs data={data.vout} />
    </div>
  );
};

export default Transaction;
