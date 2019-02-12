import React from 'react';
import { Avatar, ListItem, ListItemText } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

const LockMessage = (props: {isLocked: boolean}) => {

  if (props.isLocked) {
    return (
      <ListItem>
        <Avatar>
          <LockIcon />
        </Avatar>
        <ListItemText
          primary="This Question has been Locked by the Responders."
          secondary="If you want to continue this topic, you will need to create a new question."
        />
      </ListItem>
    );
  } else {
    return <div/>
  }
};

export default LockMessage;