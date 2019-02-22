import { 
  AppBar, 
  Avatar, 
  Button, 
  Divider,
  Drawer, 
  List,
  ListItem,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar, 
  Typography, 
} from '@material-ui/core';
import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import AvatarIcon from '@material-ui/icons/AccountCircle';
import CoffeeIcon from '@material-ui/icons/FreeBreakfast';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { withStyles } from '@material-ui/styles';
import classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

import Body from './Body';

const drawerWidth = 57;

const styles = (theme: Theme) => (createStyles({
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
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  indicator: {
    backgroundColor: theme.palette.secondary.main,
  }
}));

interface IContentProps extends WithStyles<typeof styles> {
  loggedIn: boolean;
}

const Content = (props: IContentProps) => {
  const { loggedIn, classes } = props;
  const open = false;

  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            classes={{
              indicator: classes.indicator
            }}
          >
            <Link className={classes.link} to="/open">
              <Tab label="Open Questions" />
            </Link>
            <Link className={classes.link} to="/responses">
              <Tab label="Responses" />
            </Link>
            <Link className={classes.link} to="/new">
              <Tab label="Create Question" />
            </Link>
          </Tabs>
          {loggedIn ? 
            <React.Fragment>
              <Avatar className={classes.avatar} onClick={handleClick}>
                <AvatarIcon/>
              </Avatar> 
              <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </React.Fragment>
            :
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

export default withStyles(styles)(Content);
