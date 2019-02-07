import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
  },
}));
const Responses = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Responses
    </div>
  );
};

export default Responses;
