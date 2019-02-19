import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Location } from 'history';
import React from 'react';


import QuestionCard from '../components/QuestionCard';
import { questions } from '../testData';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
  },
}));

interface IQuestionPageProps {
  location: Location;
}

const Responses = React.memo(({location}: IQuestionPageProps) => {
  const classes = useStyles();
  const respondedQuestionArr = questions.filter(question => question.isAnswered);


  return (
    <div className={classes.root}>
      {respondedQuestionArr.map(question => (
        <QuestionCard question={question} key={question.id} hash={location.hash} id={`${question.id}`}/>
      ))}
    </div>
  );
});

export default Responses;
