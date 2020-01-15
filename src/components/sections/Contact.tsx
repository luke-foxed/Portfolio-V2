import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#cccccc'
  },
  header: {
    fontFamily: 'Raleway',
    textTransform: 'uppercase',
    marginTop: '50px'
  },
  divider: {
    width: '40px',
    border: 0
  }
});
export const Contact: React.FC = () => {
  const classes = useStyles();

  return (
    <div id='contact' className={classes.root}>
      <Grid
        container
        direction='column'
        xs={12}
        alignItems='center'
        style={{ backgroundColor: '#cccccc', width: '100%', height: '33.3vh' }}>
        <Typography
          variant='h4'
          className={classes.header}
          style={{ color: '#4a4a4a' }}>
          Contact
        </Typography>
        <hr
          className={classes.divider}
          style={{ borderTop: '2px solid #03a3ff' }}></hr>
      </Grid>
    </div>
  );
};
