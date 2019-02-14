import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import { Avatar, Button, Chip, TextField, Tooltip, Typography } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import { IQuestion } from '../testData';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    marginLeft: '10px',
    color: theme.palette.primary.contrastText,
  },
  commentBar: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  inputBar: {
    width: '75%',
  },
  chipTray: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
  },
  chip: {
    marginRight: '10px',
  },
  smallAvatar: {
    height: '20px',
    width: '20px',
    marginRight: '5px',
    marginTop: '5px',
  }
}));

const canAnswer = false;

const CommentAndRespond = React.memo((props: {question: IQuestion}) => {
  const { question } = props;
  const classes = useStyles();

  const handleDelete = () => {
    console.log('delete');
  };

  if (question.isLocked) {
    return <div/>;
  } else {
    return (
      <React.Fragment>
      
      <div className={classes.commentBar}>
        <TextField
          className={classes.inputBar}
          id="comment-box"
          label={canAnswer ? 'Your Answer' : 'Add A Comment'}
          margin="dense"
          disabled={question.isAnswered}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div>
          {
            canAnswer ?
  
            <React.Fragment>
              <Tooltip 
                enterDelay={500}
                title="Respond to the question while leaving it open for discussion. (Select this if you also want to add more responders)"
              >
                <Button variant="contained" size="small" className={classes.button}>
                  Respond
                </Button>
              </Tooltip>
              <Tooltip 
                enterDelay={500}
                title="Respond to the question and lock it out. (Select this if the conversation should be ended)"
              >
                <Button variant="contained" size="small" className={classes.button}>
                  Respond and Lock
                </Button>
              </Tooltip>
            </React.Fragment>:
  
            <Button variant="contained" size="small" className={classes.button}>
              {question.isAnswered ? 'Add Follow-up Comment' : 'Add Comment'}
            </Button>
          }
        </div>
      </div>
      {
        canAnswer ?
        <React.Fragment>
          <div className={classes.root}>
            <TextField
              className={classes.inputBar}
              id="comment-box"
              label="Add Additional Responders"
              margin="dense"
              disabled={question.isAnswered}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div>
            {question.responders.map(responder => {
              if (responder.name !== 'Patrick Byrne') {
                return (
                  <Chip
                    key={responder.id} 
                    onDelete={handleDelete} 
                    label={responder.name} 
                    avatar={<Avatar><FaceIcon /></Avatar>}
                    className={classes.chip}
                    variant="outlined"
                  />
                );
              }
              return;
            })}
          </div>
        </React.Fragment> :

        <div className={classes.chipTray}>
          {
            question.responders.map(responder => (
            <Tooltip title={responder.name} key={responder.name}>
              <Avatar className={classes.smallAvatar}>
                <FaceIcon />
              </Avatar>
            </Tooltip>
            ))
          }
          <Typography variant='caption'>
            {question.responders.length > 1 ? `Patrick +${question.responders.length - 1} can respond`: 'Patrick can respond'}
          </Typography>
        </div>
      }
    </React.Fragment>
    );
  }
});

export default CommentAndRespond;
