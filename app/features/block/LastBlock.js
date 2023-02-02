import { makeStyles } from '@material-ui/core';
import { useQuery } from 'react-query';
import blocksApi from '../../api/block';
import Link from 'next/link';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 0.5,
    borderRight: '1px solid black',
    padding: 16,
  },
  blocksContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    '&:hover': {
      cursor: 'pointer',
    },
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

const LastBlock = () => {
  const classes = useStyles();
  const { data, isLoading } = useQuery(['lastBlock'], blocksApi.getLastBlock);

  if (isLoading) {
    return null;
  }

  return (
    <div className={classes.container}>
      <h3>Last block info</h3>
      <div className={classes.blocksContainer}>
        <div className={classes.info}>
          <div className={classes.infoKey}>Height</div>
          <div className={classes.infoValue}>{data.height}</div>
        </div>
        <div className={classes.info}>
          <div className={classes.infoKey}>Hash</div>
          <Link href={`block/${data.hash}`} className={classes.link}>
            {data.hash}
          </Link>
        </div>
        <div className={classes.info}>
          <div className={classes.infoKey}>Transactions count</div>
          <div className={classes.infoValue}>{data.nTx}</div>
        </div>
      </div>
    </div>
  );
};

export default LastBlock;
