// These are the mapped tiles used in the create questions page that show the possibly duplicate questions.

import { Card, Tooltip, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import AnsweredIcon from '../assets/questionAnswered.png';
import { IQuestion } from '../testData';
import QuestionModal from './QuestionModal';


const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: '100%',
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
    display: 'flex',
    alignItems: 'center'
  },
  answered: {
    width: '15px',
    height: '15px',
    marginRight: theme.spacing.unit
  }
}));

const QuestionTile = ({question}: {question: IQuestion}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const close = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Card 
        key={question.id} 
        className={classes.card} 
        onClick={() => setOpen(true)}
      >
        {
          question.isAnswered ?
          <Tooltip title="Question has been answered">
            <img src={AnsweredIcon} className={classes.answered} alt="Has been Answered"/>
          </Tooltip>
          :
          <div className={classes.answered}/>
        }
        <Typography variant='subheading'>
          {question.title}
        </Typography>
      </Card>
      <QuestionModal open={open} question={question} close={close}/>
    </React.Fragment>
  );
};

export default QuestionTile;