import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import { questions } from '../testData';
import QuestionCard from '../components/QuestionCard';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const OpenQuestions = () => {
  const classes = useStyles();
  const openQuestionArr = questions.filter(question => !question.isClosed)

  return (
    <div className={classes.root}>
      {openQuestionArr.map((question, index) => (
        <QuestionCard question={question} key={index}/>
      ))}
    </div>
  );
};

export default OpenQuestions;
