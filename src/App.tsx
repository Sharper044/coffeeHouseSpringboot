import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { ImplicitCallback, Security } from '@okta/okta-react';
import dotenv from 'dotenv';
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Content from './pages/HeaderAndContent';
import { store } from './redux/store';
import { theme } from './styles/theme';

dotenv.config();

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

interface IOktaConfig
	{
		url?: string;
		client_id?: string;
		redirect_uri?: string;
		issuer?: string;
	}

const config: IOktaConfig = {
  issuer: process.env.REACT_APP_OKTA_ORG_URL,
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: process.env.REACT_APP_OKTA_CLIENT_ID,
};

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Security {...config}>
          <Route path="/implicit/callback" component={ImplicitCallback}/>
          <Route path='/' render={() => (
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className={classes.root}>
                  <Content/>
                </div>
              </ThemeProvider>
            )}
          />
        </Security>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
