import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, IconButton } from '@material-ui/core';
import placeholder from '../../assets/images/placeholder4.png';
import avater from '../../assets/images/avatar.png';
import { ExpandMore } from '@material-ui/icons';
import { scroller } from 'react-scroll';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage:
      'url(' +
      placeholder +
      '), linear-gradient(90deg, rgba(17,88,176,0.5) 0%, rgba(88,153,235,0.5) 50%,rgba(177,195,218,0.2) 100%)',
    backgroundBlendMode: 'overlay',
    backgroundSize: 'cover'
  },
  header: {
    fontFamily: 'Raleway',
    color: 'white',
    paddingTop: '20px'
  },
  subtitle: {
    fontFamily: 'Raleway',
    color: 'white',
    fontSize: '18px'
  },
  expandButton: {
    marginTop: '20px',
    color: 'white'
  }
});
export const Home: React.FC = () => {
  const classes = useStyles();

  const handleExpandClick = () => {
    scroller.scrollTo('about', {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  };

  return (
    <Paper id='home'>
      <Grid justify='center' alignItems='center' className={classes.root}>
        <img src={avater} alt='avatar' width={250} height={250}></img>
        <Typography variant='h2' className={classes.header}>
          Luke Fox
        </Typography>
        <Typography variant='subtitle1' className={classes.subtitle}>
          Computer Science Student
        </Typography>
        <IconButton
          className={classes.expandButton}
          onClick={handleExpandClick}>
          <ExpandMore />
        </IconButton>
      </Grid>
    </Paper>
  );
};
