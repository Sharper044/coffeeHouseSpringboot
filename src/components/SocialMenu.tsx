import { Button, TextField, Tooltip } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import { Theme } from '@material-ui/core/styles';
import SubscribeIcon from '@material-ui/icons/Notifications';
import NotSubscribedIcon from '@material-ui/icons/NotificationsNone';
import CopyIcon from '@material-ui/icons/SaveAlt';
import SendIcon from '@material-ui/icons/Send';
import ShareIcon from '@material-ui/icons/Share';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { IQuestion, users } from '../testData';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: theme.spacing.unit,
  },
  menu: {
    marginTop: '50px',
    marginRight: '200px',
    width: '2000px',
  },
  subscribed: {
    color: theme.palette.primary.main,
  },
  flex: {
    display: 'flex',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
}));

const SocialMenu = ({question}: {question: IQuestion}) => {
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = React.useState<EventTarget & HTMLElement | null>(null);

  // const [sendingTo, setSendingTo] = React.useState<number[]>([]);

  const url = `localhost:3000${window.location.pathname}#${question.id}`;

  const handleShare = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <div>
        {
          users[1].subscribedQuestions.includes(question.id) ? 
          <Tooltip title="Subscribe">
            <SubscribeIcon fontSize="small" className={classes.subscribed}/>
          </Tooltip> :
          <Tooltip title="Unsubscribe">
            <NotSubscribedIcon fontSize="small"/>
          </Tooltip>
        } {/* TODO: This will need some tweaking once auth and back-end are in place */}
      </div>
      <div onClick={handleShare}>
        <Tooltip title="Share">
          <ShareIcon fontSize="small" style={{color: 'orange'}}/>
        </Tooltip>
      </div>
      <Menu 
        id="simple-menu" 
        anchorEl={anchorEl} 
        open={Boolean(anchorEl)} 
        onClose={handleClose}
        className={classes.menu}
        disableAutoFocusItem
      >
        <div className={classes.flex}>
          <TextField
            id="outlined-dense"
            margin="dense"
            variant="outlined"
            label="Shareable Link:"
            value={url}
          />
          <Button>
            <CopyIcon fontSize="small"/>
          </Button>
        </div>
        <div className={classes.flex}>
          <TextField
            id="outlined-dense"
            margin="dense"
            variant="outlined"
            label="Share via Email:"
          />
          <Button>
            <SendIcon fontSize="small"/>
          </Button>
        </div>
        {/* TODO: add an array of chips here for those you are sending it to. TODO: Connect this to azure AD info. */}
      </Menu>
    </div>
  );
};

export default SocialMenu;