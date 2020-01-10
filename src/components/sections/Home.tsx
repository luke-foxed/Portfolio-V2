import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, rgbToHex, hexToRgb, Paper } from '@material-ui/core';
import placeholder from '../../assets/images/placeholder.jpg';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url(' + placeholder + ')'
  }
});
export const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper id='home' style={{ flexGrow: 1 }}>
      <Grid justify='center' alignItems='center' className={classes.root}>
        <h1 style={{ color: 'white' }}>Hello</h1>
      </Grid>
    </Paper>
  );
};
