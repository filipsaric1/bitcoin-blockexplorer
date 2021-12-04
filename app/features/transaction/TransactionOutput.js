import { makeStyles } from '@material-ui/core';
import { useQuery } from 'react-query';
import convertApi from '../../api/convertToUsd';

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
  outputInfo: {
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

const TransactionOutput = ({ data, position }) => {
  const classes = useStyles();
  const { data: valueUsd } = useQuery(
    ['convert', data.value],
    () => convertApi.convertToUsd(data.value),
    { enabled: !!data.value },
  );

  return (
    <div className={classes.container}>
      <h3>Output {position}</h3>
      <div className={classes.outputInfo}>
        {!!data.value && (
          <>
            <div className={classes.info}>
              <span className={classes.infoKey}>Value (BTC)</span>
              <span className={classes.infoValue}>{data.value}</span>
            </div>
            <div className={classes.info}>
              <span className={classes.infoKey}>Value (USD)</span>
              <span className={classes.infoValue}>
                {valueUsd?.toFixed(2) || 'loading...'}
              </span>
            </div>
          </>
        )}
        {data.scriptPubKey.addresses && (
          <div className={classes.info}>
            <span className={classes.infoKey}>Address</span>
            <span className={classes.infoValue}>
              {data.scriptPubKey.addresses[0]}
            </span>
          </div>
        )}
        <div className={classes.info}>
          <span className={classes.infoKey}>ScriptPubKey</span>
          <span className={classes.infoValue}>{data.scriptPubKey.asm}</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionOutput;
