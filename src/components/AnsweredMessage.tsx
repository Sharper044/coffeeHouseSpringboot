// Small message for people who want to reopen a question.

import { Button, ListItem, ListItemText, Theme } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';


const LockMessage = React.memo((props: {isAnswered: boolean, id: number}) => {
  if (props.isAnswered) {
    const theme: Theme = useTheme();
    return (
      <ListItem>
        <ListItemText
          primary="This question has been answered."
          secondary="If you want to reopen this topic, you will need to create a new question."
        />
        <Link to={`/new/${props.id}`} style={{textDecoration: 'none'}}>
          <Button style={{color: theme.palette.primary.main}}>
            Reopen
          </Button>
        </Link>
      </ListItem>
    );
  } else {
    return <div/>;
  }
});

export default LockMessage;
