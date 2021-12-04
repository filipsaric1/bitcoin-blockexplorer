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
      <h3>Last blocks</h3>
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
