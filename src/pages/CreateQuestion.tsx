import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import PatrickModal from '../components/Modal';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
  },
}));
const CreateQuestion = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Create Question
      <PatrickModal/>
    </div>
  );
};

export default CreateQuestion;
