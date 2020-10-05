import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
} from '@material-ui/core';
import { School, Work, ExpandMore, ArrowForward } from '@material-ui/icons';
import { scroller } from 'react-scroll';
import me from '../../assets/images/me.png';

const Fade = require('react-reveal/Fade');

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
      marginTop: '60px',
    },
    '& h5': {
      fontFamily: 'Raleway',
      textTransform: 'uppercase',
      padding: '10px',
      textAlign: 'center',
    },
  },
  divider: {
    width: '40px',
    border: 0,
  },
  expandButton: {
    marginTop: '20px',
    color: '#4a4a4a',
    zIndex: 2,
  },
  roundImage: {
    height: '160px',
    width: '160px',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'rotate(10deg) scale(0.9)',
    },
  },
});

const distilled = [
  'Leading Irish online media company, consisting of DoneDeal, Daft & Adverts',
  'Working within a scrum team to provide manual and automated testing of features before being released to DoneDeal',
  'Exposure to tech such as Docker, Webdriver IO, Rest Assured and Typescript',
];

const reliaquest = [
  'Company specializing in security-as-a-service',
  'Providing analysis and investigation of security related data from a range of security devices and customer environments',
  'Use of various SIEM, EDR and EMS tools such as Splunk, LogRhythm, CrowdStrike & Carbon Black ',
];

export const About: React.FC = () => {
  const classes = useStyles();

  const handleExpandClick = () => {
    scroller.scrollTo('skills', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <div id='about' className={classes.root}>
      <Grid
        container
        direction='column'
        alignItems='center'
        style={{ backgroundColor: '#dedede', width: '100%' }}
      >
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
            textAlign: 'center',
          }}
        >
          Hi, I'm <b style={{ color: '#03a3ff' }}>Luke</b>! I am a recent
          computer science graduate with a passion for all things computer
          related! These include cybersecurity, networking, web development, app
          development, graphic design, computer hardware and lots more.
        </Typography>
      </Grid>

      {/* GRID 2 */}

      <Grid
        container
        direction='column'
        xs={12}
        alignItems='center'
        style={{ width: '70%', marginTop: '20px' }}
      >
        <Typography variant='h5' style={{ color: '#4a4a4a', display: 'flex' }}>
          <School
            fontSize='large'
            style={{
              color: '#03a3ff',
              paddingRight: '10px',
            }}
          />
          Education
        </Typography>

        <Typography
          style={{
            color: '#4a4a4a',
            padding: '20px',
            width: '70%',
            textAlign: 'center',
          }}
        >
          <i style={{ fontSize: '18px', fontFamily: 'Raleway' }}>
            Waterford IT, Applied Computing - 2016 to 2020
          </i>
          <hr
            className={classes.divider}
            style={{ borderTop: '2px solid #4a4a4a' }}
          />
          <Grid
            container
            direction='row'
            justify='center'
            alignContent='center'
            alignItems='center'
          >
            <Grid item sm={3}>
              <img
                src={require('../../assets/images/wit.png')}
                alt='wit'
                className={classes.roundImage}
              />
            </Grid>
            <Grid item sm={9}>
              <List>
                <Fade top cascade duration={300}>
                  <ListItem>
                    <ListItemIcon>
                      <ArrowForward
                        fontSize='small'
                        style={{ color: '#03a3ff' }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        'I attended Waterford Institute of Technology, studying Applied Computing (level 8) with a specialty in Forensics and Security - where I received first class honors.'
                      }
                    />
                  </ListItem>
                </Fade>
              </List>
            </Grid>
          </Grid>
        </Typography>

        <Typography variant='h5' style={{ color: '#4a4a4a', display: 'flex' }}>
          <Work
            fontSize='large'
            style={{
              color: '#03a3ff',
              paddingRight: '10px',
            }}
          />
          Experience
        </Typography>

        <Typography
          style={{
            color: '#4a4a4a',
            padding: '20px',
            width: '70%',
            textAlign: 'center',
          }}
        >
          <i style={{ fontSize: '18px', fontFamily: 'Raleway' }}>
            Distilled SCH, QA Engineer Intern - January to September 2019
          </i>
          <hr
            className={classes.divider}
            style={{ borderTop: '2px solid #4a4a4a' }}
          />
          <Grid
            container
            direction='row'
            justify='center'
            alignContent='center'
            alignItems='center'
          >
            <Grid item sm={9}>
              <List>
                {distilled.map((item, index) => (
                  <Fade top cascade duration={+index * 300}>
                    <ListItem>
                      <ListItemIcon>
                        <ArrowForward
                          fontSize='small'
                          style={{ color: '#03a3ff' }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  </Fade>
                ))}
              </List>
            </Grid>
            <Grid item sm={3}>
              <img
                src={require('../../assets/images/distilled.png')}
                alt='distilled'
                className={classes.roundImage}
              />
            </Grid>
          </Grid>
        </Typography>

        <Typography
          style={{
            color: '#4a4a4a',
            padding: '20px',
            width: '70%',
            textAlign: 'center',
          }}
        >
          <i style={{ fontSize: '18px', fontFamily: 'Raleway' }}>
            ReliaQuest, Security Analyst - June 2020 to Present
          </i>
          <hr
            className={classes.divider}
            style={{ borderTop: '2px solid #4a4a4a' }}
          />
          <Grid
            container
            direction='row'
            justify='center'
            alignContent='center'
            alignItems='center'
          >
            <Grid item sm={3}>
              <img
                src={require('../../assets/images/rq.png')}
                alt='reliaquest'
                className={classes.roundImage}
              />
            </Grid>
            <Grid item sm={9}>
              <List>
                {reliaquest.map((item, index) => (
                  <Fade top cascade duration={+index * 300}>
                    <ListItem>
                      <ListItemIcon>
                        <ArrowForward
                          fontSize='small'
                          style={{ color: '#03a3ff' }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  </Fade>
                ))}
              </List>
            </Grid>
          </Grid>
        </Typography>
      </Grid>

      <IconButton className={classes.expandButton} onClick={handleExpandClick}>
        <ExpandMore fontSize='large' />
      </IconButton>
    </div>
  );
};
