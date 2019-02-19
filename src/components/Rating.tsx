import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import FilledStar from '@material-ui/icons/Star';
import EmptyStar from '@material-ui/icons/StarBorder';
import { theme } from '../styles/theme';

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    display: 'flex',
    marginBottom: theme.spacing.unit / 2,
  },
  gold: {
    color: 'gold',
  },
  grey: {
    color: 'grey',
  }
}));

const Rating = React.memo((props: {rating: number, isAnswered: boolean}) => {
  const classes = useStyles();
  const [hoverLevel, setHoverLevel] = React.useState(-1);
  const { isAnswered, rating } = props;

  const filled = (starRating: number, level: number) => {
    if (!isAnswered) {
      if (starRating >= level && (hoverLevel === -1 || hoverLevel >= level)) {
        return <FilledStar fontSize='small' className={classes.gold} onClick={(e) => handleClick(e, level)}/>;
      } else if (starRating < level && (hoverLevel === -1 || hoverLevel < level)) {
        return <EmptyStar fontSize='small' className={classes.grey} onClick={(e) => handleClick(e, level)}/>;
      } else {
        return <EmptyStar fontSize='small' className={classes.gold} onClick={(e) => handleClick(e, level)}/>;
      }
    } else {
      if (starRating >= level) {
        return <FilledStar fontSize='small' className={classes.gold}/>;
      } else {
        return <EmptyStar fontSize='small' className={classes.grey}/>;
      }
    }
  };

  const handleClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>, value: number) => {
    event.stopPropagation();
    console.log(value);
  };

  return (
    <div className={classes.root} onMouseLeave={() => setHoverLevel(-1)}>
        <div onMouseEnter={() => setHoverLevel(1)}>
          {filled(rating, 1)}
        </div>
        <div onMouseEnter={() => setHoverLevel(2)}>
          {filled(rating, 2)}
        </div>
        <div onMouseEnter={() => setHoverLevel(3)}>
          {filled(rating, 3)}
        </div>
        <div onMouseEnter={() => setHoverLevel(4)}>
          {filled(rating, 4)}
        </div>
        <div onMouseEnter={() => setHoverLevel(5)}>
          {filled(rating, 5)}
        </div>
    </div>
  );
});


export default Rating;
