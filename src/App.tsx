import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { Security } from '@okta/okta-react';
import dotenv from 'dotenv';
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

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
  issuer: process.env.REACT_APP_OKTA_ORG_URL + 'oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: process.env.REACT_APP_OKTA_CLIENT_ID,
};

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Security
          issuer={config.issuer}
          client_id={config.client_id}
          redirect_uri={config.redirect_uri}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.root}>
              <Content/>
            </div>
          </ThemeProvider>
        </Security>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
