import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import AvatarIcon from '@material-ui/icons/AccountCircle';
import CoffeeIcon from '@material-ui/icons/FreeBreakfast';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';

const useStyles = makeStyles( (theme: Theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.light,
    margin: 10,
  },
  grow: {
    flexGrow: 1,
  },
  root: {
    backgroundColor: theme.palette.primary.main,
    flexGrow: 1,
  },
  icon: {
    margin: 10,
  }
}));

interface IHeaderProps {
  loggedIn: boolean;
}

const Header = (props: IHeaderProps) => {
  const { avatar, grow, root, icon } = useStyles();
  const { loggedIn } = props;
  return (
    <AppBar position="static" className={root}>
      <Toolbar>
        <CoffeeIcon className={icon}/>
        <Typography variant="h6" color="inherit" className={grow}>
          Coffee House
        </Typography>
        {loggedIn ? 
          <Avatar className={avatar}>
            <AvatarIcon />
          </Avatar> :
          <Button color="inherit">Login</Button>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Header;
