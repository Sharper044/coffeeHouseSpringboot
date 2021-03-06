import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
// This component holds all the question cards and the filtering for both the open questions and the answered questions.

import { Location } from 'history';
import React from 'react';

import FilterRefreshSort from '../components/FilterRefreshSort';
import QuestionCard from '../components/QuestionCard';
import { sortMethods } from '../services/sortMethods';
import { questions } from '../testData';


const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    width: '100%'
  },
}));

interface IQuestionPageProps {
  location: Location;
  open: boolean;
}



const OpenQuestionsAndResponses = React.memo(({location, open}: IQuestionPageProps) => {
  const classes = useStyles();
  const [filter, setFilter] = React.useState('');
  const [sort, setSort] = React.useState(0);

  // Filtering will need to be adjusted if the questions are coming from backend filtered by if they are answered or not.
  const questionArr = questions.filter(question => !question.isAnswered === open && question.title.toLowerCase().includes(filter.toLowerCase())).sort(sortMethods[sort].function);

  return (
    <div className={classes.root}>
      <FilterRefreshSort filter={filter} setFilter={setFilter} sort={sort} setSort={setSort}/>
      {questionArr.map(question => (
        <QuestionCard question={question} key={question.id} hash={location.hash} id={`${question.id}`}/>
      ))}
    </div>
  );
});

export default OpenQuestionsAndResponses;
