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
  block: {
    marginTop: 8,
    '&:hover': {
      cursor: 'pointer',
    },
    paddingBottom: 2,
    borderBottom: '1px solid lightgrey',
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

const getBlocks = (height, x = 10) => {
  const blocks = [];
  for (let i = height - x; i < height + 1; i++) {
    blocks.push(i);
  }
  return blocks.reverse();
};

const LastBlocks = () => {
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
          <div className={classes.infoValue}>{data.hash}</div>
        </div>
        <div className={classes.info}>
          <div className={classes.infoKey}>Transactions count</div>
          <div className={classes.infoValue}>{data.nTx}</div>
        </div>
      </div>
      <h3>Last 10 blocks</h3>
      <div className={classes.blocksContainer}>
        {getBlocks(data.height).map(item => (
          <Link href={`/block/${item}`} key={item}>
            <span className={classes.block}>{item}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LastBlocks;
