import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Content from './components/HeaderAndContent';
import { store } from './redux/store';
import { theme } from './styles/theme';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={classes.root}>
            <Content loggedIn={true}/>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
