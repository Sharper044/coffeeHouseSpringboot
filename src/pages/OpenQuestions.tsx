import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import QuestionCard from '../components/QuestionCard';
import { questions } from '../testData';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const OpenQuestions = () => {
  const classes = useStyles();
  const openQuestionArr = questions.filter(question => !question.isAnswered);

  return (
    <div className={classes.root}>
      {openQuestionArr.map(question => (
        <QuestionCard question={question} key={question.id}/>
      ))}
    </div>
  );
};

export default OpenQuestions;
