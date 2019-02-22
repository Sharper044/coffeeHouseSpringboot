import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
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
}));

const Body = ({setValue}: {setValue: React.Dispatch<React.SetStateAction<number>>}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
    </div>
  );
};

export default Body;
