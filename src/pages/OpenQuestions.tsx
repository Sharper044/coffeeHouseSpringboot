import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Location } from 'history';
import React from 'react';

import QuestionCard from '../components/QuestionCard';
import { questions } from '../testData';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
}));

interface IQuestionPageProps {
  location: Location;
}

const OpenQuestions = React.memo(({location}: IQuestionPageProps) => {
  const classes = useStyles();
  const openQuestionArr = questions.filter(question => !question.isAnswered).sort((q1, q2) => q2.rating - q1.rating);

  return (
    <div className={classes.root}>
      {openQuestionArr.map(question => (
        <QuestionCard question={question} key={question.id} hash={location.hash} id={`${question.id}`}/>
      ))}
    </div>
  );
});

export default OpenQuestions;
