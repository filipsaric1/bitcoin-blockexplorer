import { makeStyles } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import HeaderSearch from '../components/HeaderSearch';

const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    backgroundColor: '#C8DBF8',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
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
        <HeaderSearch />
      </div>
      {children}
    </>
  );
};

export default Layout;
