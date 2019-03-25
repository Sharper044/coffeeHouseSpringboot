import { Button, TextField, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/styles';
import React, { useEffect } from 'react';
import RichTextEditor from 'react-rte';
import QuestionTileAndModal from '../components/QuestionTile';
import { IQuestion, questions } from '../testData';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  block: {
    width: '50%',
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5
  },
  left: {
    borderRight: 'solid',
    borderColor: theme.palette.grey[500],
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  card: {
    width: '100%',
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
  },
  green: {
    backgroundColor: theme.palette.primary.light
  },
  editor: {
    height: '400px',
    maxHeight: '400px'
  }
}));

const filterQuestions = (title: string): IQuestion[] => {
  const titleArr = title.toLowerCase().split(' ').filter(word => word.length > 3);
  const filteredQuestions = questions.filter(question => {
    let keep = false;
    titleArr.forEach(word => {
      if (question.title.toLowerCase().includes(word)) {
        keep = true;
      }
    });
    return keep;
  });
  return filteredQuestions;
};

const CreateQuestion = React.memo(({questionId = ''}: {questionId?: string}) => {
  // initialize css
  const classes = useStyles();
  const theme: Theme = useTheme();
  
  // initialize the text for the question
  let titleInit = '';
  
  if (questionId !== '') {
    const question = questions.find(q => `${q.id}` === questionId);
    if (question) {
      titleInit = `RE: ${question.title}`;
    }
  }
  
  const [title, setTitle] = React.useState(titleInit);
  const [description, setDescription] = React.useState(RichTextEditor.createEmptyValue());

  // start tracking prop changes (unsure as to why memo is not working)
  const [currentQID, setCurrentQID] = React.useState(questionId);
  
  const filteredQuestions = filterQuestions(title);
  
  useEffect(() => {
    if (questionId !== currentQID) {
      const question = questions.find(q => `${q.id}` === questionId);
      setTitle(question ? `RE: ${question.title}` : '');
      setDescription(RichTextEditor.createEmptyValue());
    } else {
      setTitle(title);
      setDescription(description);
    }
    setCurrentQID(questionId);
  });


  return (
    <div className={classes.root}>
      <article>
        <Typography variant="headline">
          Please Remember:
        </Typography>
        <Typography paragraph style={{marginBottom: theme.spacing.unit * 4}}>
          To avoid repetition, before posting a question please check to see if someone else has already posted it and, if so, join in developing that question. If your question is not currently represented by an open question, create a new question. - Patrick Byrne
        </Typography>
      </article>
      <section className={classes.section}>
        <div className={`${classes.block} ${classes.left}`}>
          <TextField 
            autoFocus
            label="Title"
            variant="outlined"
            fullWidth
            style={{marginBottom: theme.spacing.unit * 2}}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          {
            currentQID !== '' &&
            <TextField 
              disabled
              label="Link to previous question:"
              value={`localhost:3000/responses#${currentQID}`}
              fullWidth
              style={{marginBottom: theme.spacing.unit * 2}}
            />
          }
          <div style={{width: '100%'}}>
            <RichTextEditor
              value={description}
              onChange={(value) => setDescription(value)}
              className={classes.editor}
            />
            <div>
              <Button 
                style={{color: theme.palette.primary.main}}
                onClick={() => {
                  setTitle('');
                  setDescription(RichTextEditor.createEmptyValue());
                }}
              >
                Submit
              </Button>
              <Button 
                style={{color: theme.palette.grey[500]}}
                onClick={() => {
                  setTitle('');
                  setDescription(RichTextEditor.createEmptyValue());
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
        <div className={`${classes.block} ${classes.right}`}>
          <Typography>
            Possible Duplicate Questions:
          </Typography>
          {
            filteredQuestions.map(question => (
              <QuestionTileAndModal question={question} />
            ))
          } 

        </div>
      </section>
    </div>
  );
});

export default CreateQuestion;
