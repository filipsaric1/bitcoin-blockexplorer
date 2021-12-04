import { makeStyles } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    backgroundColor: '#400CCC',
    height: 50,
    alignItems: 'center',
    paddingLeft: 20,
    color: 'white',
    '& h2': {
      cursor: 'pointer',
    },
  },
}));

const Layout = ({ children }) => {
  const { header } = useStyles();

  return (
    <>
      <div className={header}>
        <Link href='/'>
          <h2>Blockexplorer</h2>
        </Link>
      </div>
      {children}
    </>
  );
};

export default Layout;
