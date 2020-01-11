import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { School, Work } from '@material-ui/icons';
import pattern from '../../assets/images/pattern.png';
import me from '../../assets/images/me.png';

const Fade = require('react-reveal/Fade');

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: '100vh',
    backgroundColor: '#424240'
  },
  header: {
    fontFamily: 'Raleway',
    textTransform: 'uppercase',
    paddingBottom: '10px',
    color: 'white'
  }
});
export const About: React.FC = () => {
  const classes = useStyles();

  return (
    <div id='about' className={classes.root}>
      <div
        style={{
          backgroundImage: 'url(' + pattern + ')',
          display: 'flex'
        }}>
        {/* GRID 1 */}
        <Grid container spacing={1} alignContent='center' alignItems='center'>
          <Grid item sm={3} />

          <Grid item sm={2}>
            <img src={me} alt='me' width={150} height={150} />
          </Grid>
          <Grid item sm={4}>
            <Typography
              variant='h3'
              className={classes.header}
              style={{ color: 'white' }}>
              About Me
            </Typography>
            <Typography style={{ color: '#d0d0d0', fontSize: '18px' }}>
              Hi! My name is Luke Fox, I am a 4th year student of computer
              science with a passion for all things computer related! These
              include web development, app development, graphic design, computer
              hardware and lots more.
            </Typography>
          </Grid>

          <Grid item sm={3} />
        </Grid>
      </div>

      {/* GRID 2 */}

      <Grid container spacing={1} alignContent='center' alignItems='center'>
        <Grid item sm={3} />

        <Grid item sm={2}>
          <Fade bottom>
            <Typography variant='h4' className={classes.header}>
              <School
                fontSize='large'
                style={{ paddingRight: '10px', color: '#03a3ff' }}
              />
              Education
            </Typography>
          </Fade>
        </Grid>

        <Grid item sm={4}>
          <Fade bottom>
            <Typography variant='h5' className={classes.header}>
              Applied Computing, WIT - 2016 to 2020
            </Typography>
            <Typography style={{ color: '#a3a29b', fontSize: '18px' }}>
              I am currently in my 4th year in Waterford Institute of
              Technology. I will be graduating in Autumn of 2020 with a level 8
              degree in Applied Comuting with a specialty in Forensics and
              Security.
            </Typography>
          </Fade>
        </Grid>

        <Grid item sm={3} />
      </Grid>

      {/* GRID 3 */}
      <Grid container spacing={1} alignContent='center' alignItems='center'>
        <Grid item sm={3} />

        <Grid item sm={2}>
          <Fade bottom>
            <Typography
              variant='h4'
              className={classes.header}
              style={{ color: 'white' }}>
              <Work
                fontSize='large'
                style={{ paddingRight: '10px', color: '#03a3ff' }}
              />
              Experience
            </Typography>
          </Fade>
        </Grid>
        <Grid item sm={4}>
          <Fade bottom>
            <Typography variant='h5' className={classes.header}>
              Distilled SCH - Quality Assurance Engineer
            </Typography>
            <Typography style={{ color: '#a3a29b', fontSize: '18px' }}>
              This experience was part of my 3rd year college placement. At
              Distilled SCH, I was part of a scrum team with the responsibility
              of QA engineer. This consisted of manual and automated testing of
              features before being released to DoneDeal.ie. I was fortunate to
              learn new technologies such as Docker, Webdriver IO, Rest Assured
              and Typescript!
            </Typography>
          </Fade>
        </Grid>

        <Grid item sm={3} />
      </Grid>
    </div>
  );
};
