import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: 'violet'
  }
});
export const Projects: React.FC = () => {
  const classes = useStyles();

  return (
    <div id='projects' style={{ flexGrow: 1 }}>
      <Grid justify='center' alignItems='center' className={classes.root}>
        <h1>Projects</h1>
      </Grid>
    </div>
  );
};
