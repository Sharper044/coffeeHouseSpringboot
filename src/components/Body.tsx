import { AppBar, Tab, Tabs } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React from 'react';

import { Link, Route, Switch } from 'react-router-dom';
import CreateQuestion from '../pages/CreateQuestion';
import OpenQuestions from '../pages/OpenQuestions';
import Responses from '../pages/Responses';
import TabContainer from './TabContainer';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  tabs: {
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
  selected: {
    color: theme.palette.primary.dark,
  }
}));

const Body = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
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
      </AppBar>
      <TabContainer>
        <Switch>
          <Route 
            exact path="/" 
            render={() => {
              setValue(0);
              return <OpenQuestions/>;
            }}
          />
          <Route 
            path="/open" 
            render={() => {
              setValue(0);
              return <OpenQuestions/>;
            }}/>
          <Route 
            path="/responses" 
            render={() => {
              setValue(1);
              return <Responses/>;
            }}
          />
          <Route 
            path="/new" 
            render={() => {
              setValue(2);
              return <CreateQuestion/>;
            }}
          />
        </Switch>
      </TabContainer>
    </div>
  );
};

export default Body;
