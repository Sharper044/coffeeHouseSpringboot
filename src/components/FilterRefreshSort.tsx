import { MenuItem, TextField, Tooltip, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { sortMethods } from '../services/sortMethods';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.unit * 2,
    width: '100%',
  },
  label: {
    display: 'flex',
  },
  searchBox: {
    width: '95%',
  },
  searchBoxHolder: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '50%',
  },
  menu: {
    width: 200,
  }
}));

interface IFRSProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  sort: number;
  setSort: React.Dispatch<React.SetStateAction<number>>;
}

const FilterRefreshSort = (props: IFRSProps) => {
  const classes = useStyles();
  const { filter, setFilter, sort, setSort } = props;

  return (
    <div className={classes.root}>
      <div className={classes.searchBoxHolder}>
        <TextField 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)} 
          label={
            <div className={classes.label}>
              <SearchIcon fontSize="small"/>
              <Typography>
                Search
              </Typography>
            </div>
          }
          className={classes.searchBox}
          margin="dense"
        />
        <Tooltip title="Refresh Questions">
          <RefreshIcon fontSize="small" onClick={() => console.log('Refresh Questions')}/>
        </Tooltip>
      </div>
      <TextField
        select
        label="Sort By:"
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        onChange={(e) => setSort(parseInt(e.target.value, 10))}
        value={sort}
        margin="dense"
        className={classes.menu}
      >
        {sortMethods.map((option, i) => (
          <MenuItem key={i} value={i}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default FilterRefreshSort;
