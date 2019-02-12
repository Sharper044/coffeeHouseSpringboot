import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { IQuestion } from '../testData';
import Rating from './Rating';
import Discussion from './Discussion';
import CommentAndRespond from './CommentAndRespond';
import LockMessage from './LockMessage';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  summary: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  subtitle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
}));

const QuestionCard = (props: {question: IQuestion}) => {
  const classes = useStyles();
  const { question } = props;

  return (
    <ExpansionPanel className={classes.root}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <div className={classes.summary}>
          <div className={classes.subtitle}>
            <Typography className={classes.heading}>{question.title}</Typography>
            <Rating rating={question.rating} isAnswered={question.isAnswered}/>
          </div>
          <div className={classes.subtitle}>
            <Typography variant='caption'>Asked {question.date}</Typography>
            <Typography variant='caption'>Rating {question.rating} out of {question.numberOfVotes} votes</Typography>
          </div>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.summary}>
        <Typography>
          {question.question}
        </Typography>
        <CommentAndRespond question={question}/>
        <Discussion comments={question.comments}/>
        <LockMessage isLocked={question.isLocked}/>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default QuestionCard;
