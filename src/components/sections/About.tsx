import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, IconButton } from '@material-ui/core';
import { School, Work, ExpandMore } from '@material-ui/icons';
import { scroller } from 'react-scroll';
import me from '../../assets/images/me.png';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#cccccc',
    '& h4': {
      fontFamily: 'Raleway',
      textTransform: 'uppercase',
      marginTop: '60px'
    },
    '& h5': {
      fontFamily: 'Raleway',
      textTransform: 'uppercase',
      padding: '10px',
      textAlign: 'center'
    }
  },
  divider: {
    width: '40px',
    border: 0
  },

  expandButton: {
    marginTop: '20px',
    color: '#4a4a4a',
    zIndex: 2
  }
});
export const About: React.FC = () => {
  const classes = useStyles();

  const handleExpandClick = () => {
    scroller.scrollTo('skills', {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  };

  return (
    <div id='about' className={classes.root}>
      <Grid
        container
        direction='column'
        xs={12}
        alignItems='center'
        style={{ backgroundColor: '#dedede', width: '100%' }}>
        <Typography variant='h4' style={{ color: '#4a4a4a' }}>
          About
        </Typography>
        <hr
          className={classes.divider}
          style={{ borderTop: '2px solid #03a3ff' }}
        />
        <img
          src={me}
          alt='me'
          width={150}
          height={150}
          style={{ padding: '20px' }}
        />
        <hr
          className={classes.divider}
          style={{ borderTop: '2px solid #4a4a4a' }}
        />
        <Typography
          style={{
            color: '#4a4a4a',
            padding: '20px',
            width: '50%',
            textAlign: 'center'
          }}>
          Hi, I'm Luke! I am a 4th year student of computer science with a
          passion for all things computer related! These include web
          development, app development, graphic design, computer hardware and
          lots more.
        </Typography>
      </Grid>

      {/* GRID 2 */}

      <Grid
        container
        direction='column'
        xs={12}
        alignItems='center'
        style={{ width: '70%', marginTop: '20px' }}>
        <Typography variant='h5' style={{ color: '#4a4a4a', display: 'flex' }}>
          <School
            fontSize='large'
            style={{
              color: '#03a3ff',
              paddingRight: '10px'
            }}
          />
          Education
        </Typography>

        <Typography
          style={{
            color: '#4a4a4a',
            padding: '20px',
            width: '70%',
            textAlign: 'center'
          }}>
          <i>Waterford IT, Applied Computing - 2016 to 2020</i>
          <hr
            className={classes.divider}
            style={{ borderTop: '2px solid #4a4a4a' }}
          />
          I am currently in my 4th year in Waterford Institute of Technology. I
          will be graduating in Autumn of 2020 with a level 8 degree in Applied
          Comuting with a specialty in Forensics and Security.
        </Typography>

        <Typography variant='h5' style={{ color: '#4a4a4a', display: 'flex' }}>
          <Work
            fontSize='large'
            style={{
              color: '#03a3ff',
              paddingRight: '10px'
            }}
          />
          Experience
        </Typography>

        <Typography
          style={{
            color: '#4a4a4a',
            padding: '20px',
            width: '70%',
            textAlign: 'center'
          }}>
          <i>Distilled SCH, QA Engineer - January to September 2019</i>
          <hr
            className={classes.divider}
            style={{ borderTop: '2px solid #4a4a4a' }}
          />
          This experience was part of my 3rd year college placement. At
          Distilled SCH, I was part of a scrum team with the responsibility of
          QA engineer. This consisted of manual and automated testing of
          features before being released to DoneDeal.ie. I was fortunate to
          learn new technologies such as Docker, Webdriver IO, Rest Assured and
          Typescript!
        </Typography>
      </Grid>

      <IconButton className={classes.expandButton} onClick={handleExpandClick}>
        <ExpandMore fontSize='large' />
      </IconButton>
    </div>
  );
};
