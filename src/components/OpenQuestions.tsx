import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const OpenQuestions = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Open Questions
    </div>
  );
};

export default OpenQuestions;
