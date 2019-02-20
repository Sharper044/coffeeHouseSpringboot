import { Avatar, Button, ListItem, ListItemText, Theme } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { useTheme } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';


const LockMessage = React.memo((props: {isLocked: boolean, id: number}) => {
  if (props.isLocked) {
    const theme: Theme = useTheme();
    return (
      <ListItem>
        <Avatar>
          <LockIcon />
        </Avatar>
        <ListItemText
          primary="This Question has been Locked by the Responders."
          secondary="If you want to continue this topic, you will need to create a new question."
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
