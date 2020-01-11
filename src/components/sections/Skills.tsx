import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core';
import { Star } from '@material-ui/icons';
import gradient from '../../assets/images/gradient.png';

// Import images
import javascript from '../../assets/images/languages/javascript.png';
import typescript from '../../assets/images/languages/typescript.png';
import java from '../../assets/images/languages/java.png';
import html from '../../assets/images/languages/html.png';
import python from '../../assets/images/languages/python.png';
import css from '../../assets/images/languages/css.png';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url(' + gradient + ')'
  },
  header: {
    fontFamily: 'Raleway',
    textTransform: 'uppercase',
    paddingBottom: '10px',
    color: 'white',
    marginTop: '100px'
  },
  listItem: {
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  }
});
export const Skills: React.FC = () => {
  const classes = useStyles();

  return (
    <div id='skills' className={classes.root}>
      <Grid container direction='column' item xs={6} alignItems='center'>
        <Typography variant='h3' className={classes.header}>
          <Star fontSize='large' />
          Skills
        </Typography>
        <Typography
          variant='body1'
          style={{ color: 'white', fontSize: '22px' }}>
          Here are some of the languages & frameworks I have some experience
          with!
        </Typography>
      </Grid>
    </div>
  );
};
