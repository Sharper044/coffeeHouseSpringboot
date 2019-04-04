// This is the question summary card that is used in the open/responded questions card.

import { Theme } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/styles';
import classNames from 'classnames';
import React from 'react';

import { Card, Tooltip, Typography } from '@material-ui/core';
import AnsweredIcon from '../assets/questionAnswered.png';
import { IQuestion } from '../testData';
import QuestionModal from './QuestionModal';
import Rating from './Rating';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    margin: theme.spacing.unit,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    marginBottom: theme.spacing.unit / 2,
  },
  summary: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  subtitle: {
    display: 'flex',
    flexDirection: 'column',
  },
  right: {
    alignItems: 'flex-end',
    // justifyContent: 'space-around',
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  modal: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '5px'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: 'none',
    padding: theme.spacing.unit * 4,
    position: 'absolute',
    width: '80vw'
  },
  card: {
    padding: theme.spacing.unit
  },
  answered: {
    width: '20px',
    height: '20px',
    marginRight: theme.spacing.unit
  }
}));

const QuestionCard = ({question, hash, id}:{question: IQuestion, hash: string, id: string}) => {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const hashCompare = `#${question.id}`;
  const [hover, setHover] = React.useState(false);
  const [open, setOpen] = React.useState(hash === hashCompare);

  const close = () => {
    setOpen(false);
  };

  const startHover = () => {
    setHover(true);
  };

  const endHover = () => {
    setHover(false);
  };

  return (
    <React.Fragment>
      <Card 
        className={classes.root} 
        onMouseEnter={startHover}
        onMouseLeave={endHover}
        style={hover ? {backgroundColor: theme.palette.grey[200]} : {}}
        onClick={() => setOpen(true)}
      >
        <div id={id}/>
        <div className={classes.card}>
          <div className={classes.summary}>
            <div className={classes.subtitle}>
              <div className={classes.flex}>
                {
                  question.isAnswered ?
                  <Tooltip title="Question has been answered">
                    <img src={AnsweredIcon} className={classes.answered} alt="Has been Answered"/>
                  </Tooltip> :
                  <div/>
                }
                <Typography className={classes.heading}>
                  {question.title}
                </Typography>
              </div>
              <Typography variant='caption'>Asked {question.date}</Typography>
            </div>
            <div className={classNames(classes.subtitle, classes.right)}>
              <Rating rating={question.rating} isAnswered={question.isAnswered}/>
              <Typography variant='caption'>Rating {question.rating} out of {question.numberOfVotes} votes</Typography>
            </div>
          </div>
        </div>
      </Card>
      <QuestionModal  open={open} question={question} close={close}/>
    </React.Fragment>
  );
};

export default QuestionCard;
