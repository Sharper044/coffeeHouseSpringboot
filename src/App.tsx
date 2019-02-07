import { makeStyles } from '@material-ui/styles';
import * as React from 'react';

import Body from './components/Body';
import Header from './components/Header';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header loggedIn={true}/>
      <Body/>
    </div>
  );
};

export default App;
