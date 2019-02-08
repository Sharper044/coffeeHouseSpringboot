import { AppBar, Tab, Tabs, } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

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
    justifyContent: 'flex-end'
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
          indicatorColor="primary"
        >
          <Tab label="Open Questions" />
          <Tab label="Responses" />
          <Tab label="Create Question" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>
                        <OpenQuestions/>
                      </TabContainer>}
      {value === 1 && <TabContainer>
                        <Responses/>
                      </TabContainer>}
      {value === 2 && <TabContainer>
                        <CreateQuestion/>
                      </TabContainer>}
    </div>
  );
};

export default Body;
