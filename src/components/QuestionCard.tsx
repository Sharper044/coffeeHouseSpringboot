import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { IQuestion } from '../testData';
import Rating from './Rating';

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
  }
}));

const QuestionCard = (props: {question: IQuestion}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.summary}>
            <div className={classes.subtitle}>
              <Typography className={classes.heading}>{props.question.title}</Typography>
              <Rating rating={props.question.rating}/>
            </div>
            <div className={classes.subtitle}>
              <Typography variant='caption'>Asked {props.question.date}</Typography>
              <Typography variant='caption'>Rating {props.question.rating} out of {props.question.numberOfVotes} votes</Typography>
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {props.question.question}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>

  );
};

export default QuestionCard;
