import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React from 'react';

import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { IQuestion } from '../testData';
import CommentAndRespond from './CommentAndRespond';
import Discussion from './Discussion';
import LockMessage from './LockMessage';
import Rating from './Rating';
import SocialMenu from './SocialMenu';

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
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  subtitle: {
    display: 'flex',
    flexDirection: 'column',
  },
  right: {
    alignItems: 'flex-end'
  },
  flex: {
    display: 'flex',
  }
}));

const QuestionCard = ({question, hash}:{question: IQuestion, hash: string}) => {
  const classes = useStyles();
  const hashCompare = `#${question.id}`;
  console.log(hash);

  return (
    <ExpansionPanel className={classes.root} defaultExpanded={hash === hashCompare}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <div className={classes.summary}>
          <div className={classes.subtitle}>
            <Typography className={classes.heading}>{question.title}</Typography>
            <Typography variant='caption'>Asked {question.date}</Typography>
          </div>
          <div className={classes.flex}>
            <div className={classNames(classes.subtitle, classes.right)}>
              <Rating rating={question.rating} isAnswered={question.isAnswered}/>
              <Typography variant='caption'>Rating {question.rating} out of {question.numberOfVotes} votes</Typography>
            </div>
            <SocialMenu/>
          </div>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.subtitle}>
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
