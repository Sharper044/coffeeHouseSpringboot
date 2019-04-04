// Really this aught to be called Router.tsx

import { Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TabContainer from '../components/TabContainer';
import CreateQuestion from './CreateQuestion';
import OpenQuestionsAndResponses from './OpenQuestionsAndResponses';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  notAuthenticated: {
    alignItems: 'center',
    height: '80vh'
  }
}));

const Body = ({setValue, authenticated}: {setValue: React.Dispatch<React.SetStateAction<number>>, authenticated: boolean | null}) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, {[classes.notAuthenticated]: (!authenticated)})}>
      {
        authenticated ?
          <TabContainer>
            <Switch>
              <Route 
                exact path="/" 
                render={({ location }) => {
                  setValue(0);
                  return <OpenQuestionsAndResponses location={location} open={true}/>;
                }}
              />
              <Route 
                path="/open" 
                render={({ location }) => {
                  setValue(0);
                  return <OpenQuestionsAndResponses location={location} open={true}/>;
                }}/>
              <Route 
                path="/responses" 
                render={({ location }) => {
                  setValue(1);
                  return <OpenQuestionsAndResponses location={location} open={false}/>;
                }}
              />
              <Route 
                exact
                path="/new" 
                render={() => {
                  setValue(2);
                  return <CreateQuestion questionId=""/>;
                }}
              />
              <Route 
                path="/new/:id" 
                render={(route) => {
                  setValue(2);
                  return <CreateQuestion questionId={route.match.params.id}/>;
                }}
              />
            </Switch>
          </TabContainer>
        :
          <Typography variant='headline'>
            Welcome to Coffee House! Please login.
          </Typography>
      }
      
    </div>
  );
};

export default Body;
