// Used mostly to get the tabs working properly. could be simplified away.

import Typography from '@material-ui/core/Typography';
import React from 'react';

interface ITabContainerProps {
  children: React.ReactNode;
}

const TabContainer = React.memo((props: ITabContainerProps) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3, width: '100%', maxWidth: 1080 }}>
      {props.children}
    </Typography>
  );
});

export default TabContainer;