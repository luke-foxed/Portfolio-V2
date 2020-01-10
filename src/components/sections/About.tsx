import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: 'green'
  }
});
export const About: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper id='about' style={{ flexGrow: 1 }}>
      <Grid justify='center' alignItems='center' className={classes.root}>
        <h1>About</h1>
      </Grid>
    </Paper>
  );
};
