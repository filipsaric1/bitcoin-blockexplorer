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
  txContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  transaction: {
    marginTop: 8,
    '&:hover': {
      cursor: 'pointer',
    },
    paddingBottom: 2,
    borderBottom: '1px solid lightgrey',
  },
});

const LastBlockTransactions = () => {
  const classes = useStyles();
  const { data, isLoading } = useQuery(['lastBlock'], blocksApi.getLastBlock);

  if (isLoading) {
    return null;
  }

  return (
    <div className={classes.container}>
      <h3>Transactions in last block</h3>
      <div className={classes.txContainer}>
        {data.tx.map((item, index) => (
          <Link
            href={`/transaction/${item}`}
            className={classes.link}
            key={index}
          >
            <span className={classes.transaction}>{item}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LastBlockTransactions;
