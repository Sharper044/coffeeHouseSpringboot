import Typography from '@material-ui/core/Typography';
import React from 'react';

interface ITabContainerProps {
  children: React.ReactNode;
}

const TabContainer = React.memo((props: ITabContainerProps) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
});

export default TabContainer;