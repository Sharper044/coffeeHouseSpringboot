import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
              return <OpenQuestions location={location}/>;
            }}
          />
          <Route 
            path="/open" 
            render={({ location }) => {
              setValue(0);
              return <OpenQuestions location={location}/>;
            }}/>
          <Route 
            path="/responses" 
            render={({ location }) => {
              setValue(1);
              return <Responses location={location}/>;
            }}
          />
          <Route 
            exact
            path="/new" 
            render={() => {
              setValue(2);
              return <CreateQuestion/>;
            }}
          />
          <Route 
            path="/new/:id" 
            render={(route) => {
              setValue(2);
              console.log(route);
              return <CreateQuestion questionId={route.match.params.id}/>;
            }}
          />
        </Switch>
      </TabContainer>
    </div>
  );
};

export default Body;
