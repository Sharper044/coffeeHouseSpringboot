import { ExpansionPanelDetails, Tooltip, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React from 'react';
import AnsweredIcon from '../assets/questionAnswered.png';
import { IQuestion } from '../testData';
import AnsweredMessage from './AnsweredMessage';
import CommentAndRespond from './CommentAndRespond';
import Discussion from './Discussion';
import Rating from './Rating';
import SocialMenu from './SocialMenu';

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    marginBottom: theme.spacing.unit / 2,
  },
  summary: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: theme.spacing.unit,
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
  },
  right: {
    alignItems: 'flex-end',
    // justifyContent: 'space-around',
  },
  flex: {
    display: 'flex',
  },
  subtitle: {
    display: 'flex',
    flexDirection: 'column',
  },
  answered: {
    width: '25px',
    height: '25px',
    marginRight: theme.spacing.unit
  },
  list: {
    backgroundColor: theme.palette.primary.light
  }
}));

const Question = (props: {question: IQuestion}) => {
  const classes = useStyles();
  const { question } = props;

  return (
    <div className={classes.title}>
      <div className={classes.summary}>
        <div className={classes.subtitle}>
          <Typography variant="h5" className={classes.heading}>
            {
              question.isAnswered ?
              <Tooltip title="Question has been answered">
                <img src={AnsweredIcon} className={classes.answered} alt="Has been Answered"/>
              </Tooltip> :
              <div/>
            }
            {question.title}
          </Typography>
          <Typography variant='caption'>Asked {question.date}</Typography>
        </div>
        <div className={classNames(classes.subtitle, classes.right)}>
          <Rating rating={question.rating} isAnswered={question.isAnswered}/>
          <Typography variant='caption'>Rating {question.rating} out of {question.numberOfVotes} votes</Typography>
        </div>
      </div>     
      <SocialMenu question={question}/>
      <ExpansionPanelDetails className={classes.subtitle}>
        <Typography>
          {question.question}
        </Typography>
        <CommentAndRespond question={question}/>
        <Discussion comments={question.comments}/>
        <AnsweredMessage isAnswered={question.isAnswered} id={question.id}/>
      </ExpansionPanelDetails>
    </div>
  );
};

export default Question;
