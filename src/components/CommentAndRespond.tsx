import { Theme, withStyles } from '@material-ui/core/styles';
import React from 'react';

import { Avatar, Button, Checkbox, Chip, FormControlLabel, TextField, Tooltip, Typography } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import { theme } from '../styles/theme';
import { IQuestion, users } from '../testData';


const styles = (th: Theme) => ({
  root: {
    width: '100%',
  },
  button: {
    // backgroundColor: th.palette.primary.main,
    marginLeft: th.spacing.unit,
    marginRight: th.spacing.unit,
    color: th.palette.primary.main,
  },
  commentBar: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: th.spacing.unit,
  },
  chipTray: {
    display: 'flex',
    alignItems: 'center',
  },
  chip: {
    marginRight: th.spacing.unit,
  },
  smallAvatar: {
    color: '#bdbdbd',
    marginRight: '5px',
    marginTop: '5px',
  },
  flex: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  canRespondButtons: {
    display: 'flex',
    justifyContent: 'space-between',
  }
});

const CommentAndRespond = React.memo((props: {question: IQuestion, classes: any}) => {
  const {classes} = props;
  const { question } = props;
  const userID = 1;
  const canAnswer = users[userID].super || users[userID].delegatedQuestions.includes(question.id);

  const [annon, setAnnon] = React.useState(true);

  const handleChange = () => {
    setAnnon(!annon);
  };

  const handleDelete = () => {
    console.log('delete');
  };

  if (question.isAnswered) {
    return <div/>;
  } else {
    return (
      <React.Fragment>
      
      <div className={classes.commentBar}>
        <TextField
          id="comment-box"
          label={canAnswer ? 'Your Answer' : 'Add A Comment'}
          margin="dense"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      {
        canAnswer ?
          <React.Fragment>
            <div className={classes.root}>
              <TextField
                id="comment-box"
                label="Add Additional Responders"
                margin="dense"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className={classes.canRespondButtons}>
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
              <Button variant="text" size="small" className={classes.button}>
                Respond
              </Button>
            </div>
          </React.Fragment>
        :
          <div className={classes.canRespondButtons}>
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
            <div className={classes.chipTray}>
              <FormControlLabel
                control={
                  <Checkbox checked={annon} onChange={handleChange} style={{color: theme.palette.primary.main}} />
                }
                label="Comment Anonymously (Default)"
                labelPlacement="start"
              />
              <Button variant="text" size="small" className={classes.button}>
                Comment
              </Button>
            </div>
          </div>
      }
    </React.Fragment>
    );
  }
});

export default withStyles(styles(theme))(CommentAndRespond);
