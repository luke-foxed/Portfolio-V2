import React, { useContext } from 'react';
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
import { ThemeContext } from '../../themeProvider';
import Seperator from '../layout/Seperator';
import { isMobile } from 'react-device-detect';
import { palette, primaryCol } from '../theme';

const Fade = require('react-reveal/Fade');

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    transition: 'background-color 0.5s ease-in-out',
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
  italicHeader: {
    padding: '20px',
    width: '70%',
    textAlign: 'center',
    fontSize: '18px',
  },
  expandButton: {
    marginTop: '20px',
    zIndex: 2,
    color: primaryCol,
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

const stitherads = [
  'Creating software to help advertisers scale full-funnel performance marketing campaigns on Facebook, Instagram, Pinterest, SnapChat & TikTok',
  'Working within the creative team, building a Photoshop-like and After Effects tools to allow users to create and publish image & video advertisements',
  'Full-stack engineer, working with tech such as React, Ruby On Rails, Postgres, Heroku and AWS'
];

const distilled = [
  'Leading Irish online media company, consisting of DoneDeal, Daft & Adverts',
  'Working within a scrum team to provide manual and automated testing of features before being released to DoneDeal',
  'Exposure to tech such as Docker, Webdriver IO, Rest Assured and Typescript',
];

const reliaquest = [
  'Company specializing in security-as-a-service',
  'Providing analysis and investigation of security related data from a range of security devices and customer environments',
  'Use of various SIEM, EDR and EMS tools such as Splunk, LogRhythm, CrowdStrike & Carbon Black',
];

export const About: React.FC = () => {
  const classes = useStyles({});
  const { lightTheme } = useContext(ThemeContext);
  const theme = palette(lightTheme);

  const handleExpandClick = () => {
    scroller.scrollTo('skills', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <div
      id='about'
      className={classes.root}
      style={{ backgroundColor: theme.background1Col }}
    >
      <Grid
        container
        direction='column'
        alignItems='center'
        style={{ backgroundColor: theme.background2Col, width: '100%' }}
      >
        <Typography variant='h4' style={{ color: theme.fontCol }}>
          About
        </Typography>

        <Seperator color={primaryCol} />

        <img
          src={me}
          alt='me'
          width={150}
          height={150}
          style={{ padding: '20px' }}
        />

        <Seperator color={theme.fontCol} />

        <Typography
          style={{
            color: theme.fontCol,
            padding: '20px',
            width: '50%',
            textAlign: 'center',
          }}
        >
          Hi, I'm <b style={{ color: primaryCol }}>Luke</b>! I am a recent
          computer science graduate with a passion for all things computer
          related! These include cybersecurity, networking, web development, app
          development, graphic design, computer hardware and lots more.
        </Typography>
      </Grid>

      <Grid
        container
        direction='column'
        xs={12}
        alignItems='center'
        style={{ width: isMobile ? '100%' : '70%', marginTop: '20px' }}
      >
        <Typography
          variant='h5'
          style={{ color: theme.fontCol, display: 'flex' }}
        >
          <School
            fontSize='large'
            style={{
              color: primaryCol,
              paddingRight: '10px',
            }}
          />
          Education
        </Typography>

        <Typography
          className={classes.italicHeader}
          style={{
            color: theme.fontCol,
          }}
        >
          <i style={{ fontFamily: 'Raleway' }}>
            Waterford IT, Applied Computing - 2016 to 2020
          </i>

          <Seperator color={theme.fontCol} />

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
                        style={{ color: primaryCol }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        'I attended Waterford Institute of Technology, studying Applied Computing (level 8) with a specialty in Forensics and Security - where I graduated with first class honors.'
                      }
                    />
                  </ListItem>
                </Fade>
              </List>
            </Grid>
          </Grid>
        </Typography>

        <Typography
          variant='h5'
          style={{ color: theme.fontCol, display: 'flex' }}
        >
          <Work
            fontSize='large'
            style={{
              color: primaryCol,
              paddingRight: '10px',
            }}
          />
          Experience
        </Typography>

        <Typography
          className={classes.italicHeader}
          style={{
            color: theme.fontCol,
          }}
        >
          <i style={{ fontFamily: 'Raleway' }}>
            Distilled SCH, QA Engineer Intern - January to September 2019
          </i>

          <Seperator color={theme.fontCol} />

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
                          style={{ color: primaryCol }}
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
          className={classes.italicHeader}
          style={{
            color: theme.fontCol,
          }}
        >
          <i style={{ fontFamily: 'Raleway' }}>
            ReliaQuest, Security Analyst - June 2020 to December 2020
          </i>

          <Seperator color={theme.fontCol} />

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
                          style={{ color: primaryCol }}
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

        <Typography
          className={classes.italicHeader}
          style={{
            color: theme.fontCol,
          }}
        >
          <i style={{ fontFamily: 'Raleway' }}>
            StitcherAds, Software Engineer - January 2021 to Present
          </i>

          <Seperator color={theme.fontCol} />

          <Grid
            container
            direction='row'
            justify='center'
            alignContent='center'
            alignItems='center'
          >
            <Grid item sm={9}>
              <List>
                {stitherads.map((item, index) => (
                  <Fade top cascade duration={+index * 300}>
                    <ListItem>
                      <ListItemIcon>
                        <ArrowForward
                          fontSize='small'
                          style={{ color: primaryCol }}
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
                src={require('../../assets/images/stitcher.png')}
                alt='distilled'
                className={classes.roundImage}
              />
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
