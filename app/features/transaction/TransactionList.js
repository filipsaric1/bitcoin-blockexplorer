import { makeStyles } from '@material-ui/core';
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

const TransactionList = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.txContainer}>
      {data.map((item, index) => (
        <Link
          href={`/transaction/${item}`}
          className={classes.link}
          key={index}
        >
          <span className={classes.transaction}>{item}</span>
        </Link>
      ))}
    </div>
  );
};

export default TransactionList;
