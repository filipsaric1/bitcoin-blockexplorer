import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: '500px',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Resource not found on the blockchain</h1>
    </div>
  );
};

export default NotFound;
