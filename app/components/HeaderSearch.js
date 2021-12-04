import { useState, useRef } from 'react';
import { useRouter } from 'next/router';

import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';
import { makeStyles } from '@material-ui/core';

const SEARCH_OPTIONS = [
  { value: 'tx', label: 'TX', result: 'transaction' },
  { value: 'block', label: 'BLOCK', result: 'block' },
];

const useStyles = makeStyles(() => ({
  main: {
    display: 'flex',
  },
  container: {
    width: 120,
  },
  select: {
    marginLeft: 6,
  },
  item: {
    color: 'black',
  },
  button: {
    marginLeft: 10,
    height: 55,
  },
}));

const HeaderSearch = () => {
  const classes = useStyles();
  const [selectedSearch, setSelectedSearch] = useState(SEARCH_OPTIONS[0].value);
  const inputRef = useRef('');
  const router = useRouter();

  const handleChange = e => {
    setSelectedSearch(e.target.value);
  };

  const onButtonClick = () => {
    const searchFor = inputRef?.current?.value;
    if (searchFor) {
      const { result } = SEARCH_OPTIONS.find(
        ({ value }) => value === selectedSearch,
      );
      router.push(`/${result}/${searchFor}`);
    }
  };

  return (
    <div container={classes.main}>
      <FormControl classes={{ root: classes.container }}>
        <InputLabel id='demo-simple-select-label'>Search</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={selectedSearch}
          label='Search'
          variant={'outlined'}
          classes={{ root: classes.select }}
          onChange={handleChange}
        >
          {SEARCH_OPTIONS.map(({ value, label }) => (
            <MenuItem className={classes.item} value={value}>
              {label}{' '}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label={selectedSearch}
        variant='outlined'
        classes={{ root: classes.select }}
        inputRef={inputRef}
      />
      <Button
        variant='contained'
        classes={{ root: classes.button }}
        onClick={onButtonClick}
      >
        SEARCH
      </Button>
    </div>
  );
};
export default HeaderSearch;
