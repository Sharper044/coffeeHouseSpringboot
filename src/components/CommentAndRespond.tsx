import { Theme, withStyles } from '@material-ui/core/styles';
import React from 'react';

import { Avatar, Button, Chip, TextField, Tooltip, Typography } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import LockIcon from '@material-ui/icons/Lock';
import DelegateIcon from '@material-ui/icons/PersonAdd';
import SendIcon from '@material-ui/icons/Send';
import { theme } from '../styles/theme';
import { IQuestion, users } from '../testData';


const styles = (th: Theme) => ({
  root: {
    width: '100%',
  },
  button: {
    // backgroundColor: th.palette.primary.main,
    marginLeft: '10px',
    color: th.palette.primary.main,
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
    color: '#bdbdbd',
    marginRight: '5px',
    marginTop: '5px',
  },
  flex: {
    display: 'flex',
    alignItems: 'flex-end',
  }
});

const CommentAndRespond = React.memo((props: {question: IQuestion, classes: any}) => {
  const {classes} = props;
  const { question } = props;
  const userID = 1;
  const canAnswer = users[userID].super || users[userID].delegatedQuestions.includes(question.id);

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
        {
          canAnswer ?
            <div className={classes.flex}>
              <Tooltip 
                title="Respond to the question and add another responder."
              >
                <Button variant="text" size="small" className={classes.button}>
                  <DelegateIcon fontSize='small'/>
                  <SendIcon fontSize='small'/>
                </Button>
              </Tooltip>
              <Tooltip 
                title="Respond to the question and lock it. (Select this if the conversation should be ended)"
              >
                <Button variant="text" size="small" className={classes.button}>
                  <LockIcon fontSize='small'/>
                  <SendIcon fontSize='small'/>
                </Button>
              </Tooltip>
            </div>
          :
            <Button variant="text" size="small" className={classes.button}>
              Add Comment
            </Button>
        }
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
          </React.Fragment>
        :
          <div className={classes.chipTray}>
            {
              question.responders.map(responder => (
              <Tooltip title={responder.name} key={responder.name}>
                  <FaceIcon fontSize="small" className={classes.smallAvatar}/>
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

export default withStyles(styles(theme))(CommentAndRespond);
