import { 
  AppBar, 
  Avatar, 
  Button, 
  Divider,
  Drawer, 
  List,
  ListItem,
  Tab,
  Tabs,
  Toolbar, 
  Typography, 
} from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import AvatarIcon from '@material-ui/icons/AccountCircle';
import CoffeeIcon from '@material-ui/icons/FreeBreakfast';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

import Body from './Body';

const drawerWidth = 57;

const useStyles = makeStyles( (theme: Theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
    margin: 10,
  },
  avatarColor: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
  },
  grow: {
    flexGrow: 1,
  },
  root: {
    display: 'flex',
  },
  icon: {
    margin: 18,
  },
  green: {
    backgroundColor: theme.palette.primary.main,
    zIndex: 2000,
  },
  appBar: {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    zIndex: 0,
  },
  list: {
    marginTop: '64px',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
  },
  placeholder: {
    height: 64,
  },
  tabs: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
  selected: {
    color: theme.palette.primary.dark,
  },
}));

interface IContentProps {
  loggedIn: boolean;
}

const Content = (props: IContentProps) => {
  const classes = useStyles();
  const { loggedIn } = props;
  const open = false;

  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar disableGutters={true} className={classes.green}>
          <CoffeeIcon className={classes.icon}/>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Coffee House
          </Typography>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            className={classes.tabs}
            indicatorColor="none"
          >
            <Link className={classNames(classes.link, {[classes.selected]:value === 0})} to="/open">
              <Tab label="Open Questions" />
            </Link>
            <Link className={classNames(classes.link, {[classes.selected]:value === 1})} to="/responses">
              <Tab label="Responses" />
            </Link>
            <Link className={classNames(classes.link, {[classes.selected]:value === 2})} to="/new">
              <Tab label="Create Question" />
            </Link>
          </Tabs>
          {loggedIn ? 
            <Avatar className={classes.avatar}>
              <AvatarIcon/>
            </Avatar> :
            <Button color="inherit">Login</Button>
          }
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={open ? classes.drawer : classes.hide}
      >
        <div className={classes.placeholder}/>
        <List className={classes.list}>
          {['', '', '', ''].map((text, index) => (
            <ListItem button={true} key={text}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Body setValue={setValue}/>
      </main>
    </div>
  );
};

export default Content;
