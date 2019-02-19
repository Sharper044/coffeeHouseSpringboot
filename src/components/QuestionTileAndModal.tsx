import { Card, Modal, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/styles';
import React from 'react';

import { IQuestion } from '../testData';
import Question from './Question';

const useStyles = makeStyles((theme: Theme) => ({
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
    width: '100%',
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
  },
}));

const QuestionTileAndModal = ({question}: {question: IQuestion}) => {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Card 
        key={question.id} 
        className={classes.card} 
        style={question.isLocked ? {backgroundColor: theme.palette.primary.light} : {}}
        onClick={() => setOpen(true)}
      >
        <Typography variant='subtitle1'>
          {question.title}
        </Typography>
      </Card>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className={classes.modal}
      >
        <div className={classes.paper}>
          <Question question={question}/>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default QuestionTileAndModal;