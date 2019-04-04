// This is the modal that appears when you open up a question for more details. 

import { IconButton, Modal, } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
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
    width: '80vw',
    display: 'flex',
    alignItems: 'flex-start'

  },
}));

const QuestionModal = ({open, question, close}: {open: boolean, question: IQuestion, close: () => void}) => {
  const classes = useStyles();

  return (
    <Modal
        open={open}
        onClose={close}
        className={classes.modal}
      >
        <div className={classes.paper}>
          <div style={{width: "100%"}}>
            <Question question={question}/>
          </div>
          <IconButton onClick={close} >
            <CloseIcon/>
          </IconButton>
        </div>
      </Modal>
  );
};

export default QuestionModal;
