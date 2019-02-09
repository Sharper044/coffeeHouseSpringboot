import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import { Avatar, List, ListItem, ListItemText } from '@material-ui/core';
import AvatarIcon from '@material-ui/icons/AccountCircle';
import { IComment } from '../testData';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    maxHeight: '250px',
    overflow: 'auto',
  },
  answer: {
    backgroundColor: theme.palette.grey[300],
    borderRadius: '5px',
  }
}));

const Discussion = (props: {comments: IComment[]}) => {
  const { comments } = props; // TODO: get the comments to appear in reverse order. Newest on top.
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {comments.reverse().map((comment, i) => (
        <ListItem key={i} className={comment.isAnswer ? classes.answer : ''}>
          <Avatar>
            <AvatarIcon />
          </Avatar>
          <ListItemText
            secondary={`By ${comment.author} on ${comment.date}`}
            primary={comment.comment}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Discussion;
