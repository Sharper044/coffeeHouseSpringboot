import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import { questions } from '../testData';
import QuestionCard from '../components/QuestionCard';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
  },
}));

const Responses = () => {
  const classes = useStyles();
  const respondedQuestionArr = questions.filter(question => question.answered)


  return (
    <div className={classes.root}>
      {respondedQuestionArr.map((question, index) => (
        <QuestionCard question={question} key={index}/>
      ))}
    </div>
  );
};

export default Responses;
