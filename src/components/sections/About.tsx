import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import { School, Work } from '@material-ui/icons';
import pattern from '../../assets/images/pattern.png';
import me from '../../assets/images/me.png';

const Fade = require('react-reveal/Fade');

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
export const About: React.FC = () => {
  const classes = useStyles();

  return (
    <div id='about' className={classes.root}>
      <Grid
        container
        direction='column'
        xs={12}
        alignItems='center'
        style={{ backgroundColor: '#dedede', width: '100%' }}>
        <Typography
          variant='h4'
          className={classes.header}
          style={{ color: '#4a4a4a' }}>
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
            width: '30%',
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
        style={{ width: '100%' }}>
        <Typography
          variant='h5'
          className={classes.header}
          style={{ color: '#4a4a4a', display: 'flex' }}>
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
            width: '30%',
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

        <Typography
          variant='h5'
          className={classes.header}
          style={{ color: '#4a4a4a', display: 'flex' }}>
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
            width: '30%',
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
    </div>
  );
};
