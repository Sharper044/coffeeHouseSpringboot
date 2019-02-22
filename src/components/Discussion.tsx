import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React from 'react';

import { Avatar, List, ListItem, ListItemText } from '@material-ui/core';
import AvatarIcon from '@material-ui/icons/AccountCircle';
import { IComment } from '../testData';

const styles = (theme: Theme) => (createStyles({
  root: {
    width: '100%',
    maxHeight: '350px',
    overflow: 'auto',
  },
  answer: {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
    border: 'solid 3px',
    borderRadius: '5px',
  },
  avatar: {
    marginTop: theme.spacing.unit
  }
}));

interface IProps extends WithStyles<typeof styles>{
  comments: IComment[];
}

class Discussion extends React.Component<IProps, {}> {
  private answer: HTMLDivElement | null = null;

  public scrollToBottom = () => {
    if (this.answer) {
      this.answer.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  public componentDidMount() {
    this.scrollToBottom();
  }
  
  public componentDidUpdate() {
    this.scrollToBottom();
  }

  public render() {
    const { comments, classes } = this.props;
  
    return (
      <List className={classes.root}>
        {comments.map(comment => (
          <ListItem key={comment.id} className={classNames({[classes.answer]: comment.isAnswer})} style={{display: 'flex', alignItems: 'flex-start',}}>
            {
              comment.isAnswer &&
              <div style={{ float:"left", clear: "both" }}
               ref={(el) => { this.answer = el; }}/>
            }
            <Avatar className={classes.avatar}>
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
  }
}

export default withStyles(styles)(Discussion);
