import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, rgbToHex, hexToRgb, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: 'red'
  }
});
export const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper id='home' style={{ flexGrow: 1 }}>
      <Grid justify='center' alignItems='center' className={classes.root}>
        <h1>Hello</h1>
      </Grid>
    </Paper>
  );
};
