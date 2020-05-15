import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import { scroller } from 'react-scroll';
import { ArrowForward, ExpandMore } from '@material-ui/icons';

const Fade = require('react-reveal/Fade');

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgb(232, 232, 232)',
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

  card: {
    transition: 'all .2s ease-in-out',
    width: '300px',
    height: '480px',
    '&:hover': {
      transform: 'scale(1.08)',
    },
    '& img': {
      marginTop: '-40px',
      backgroundColor: '#03a3ff',
      borderRadius: 50,
      width: '80px',
      height: '80px',
    },
  },

  expandButton: {
    marginTop: '20px',
    color: '#4a4a4a',
    zIndex: 2,
  },
});

const frontend = [
  'React',
  'Redux',
  'JavaScript',
  'TypeScript',
  'HTML/CSS',
  'Material UI & Semantic UI',
];

const backend = [
  'Python',
  'Java & Kotlin',
  'Flask',
  'Haskell',
  'ExpressJS',
  'MongoDB',
  'MySQL',
];

const tech = ['Docker', 'Tensorflow', 'Git', 'WebdriverIO', 'AWS', 'NodeJS'];

export const Skills: React.FC = () => {
  const classes = useStyles();

  const handleExpandClick = () => {
    scroller.scrollTo('projects', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <div id='skills' className={classes.root}>
      <Typography variant='h4' style={{ color: '#4a4a4a' }}>
        Skills
      </Typography>
      <hr
        className={classes.divider}
        style={{ borderTop: '2px solid #03a3ff' }}
      />

      <Typography
        style={{
          color: '#4a4a4a',
          padding: '20px',
          width: '50%',
          textAlign: 'center',
        }}>
        Here are some of the languages and tech I have picked up along the way,
        be it through college or my own interest!
      </Typography>

      <hr
        className={classes.divider}
        style={{ borderTop: '2px solid #4a4a4a' }}
      />

      <Grid
        container
        direction={'row'}
        justify='center'
        alignContent='center'
        spacing={8}
        style={{ marginTop: '30px', marginBottom: '10px', width: '100%' }}>
        <Grid item>
          <Paper elevation={3} className={classes.card}>
            <div style={{ width: '100%', textAlign: 'center' }}>
              <img
                alt='frontend'
                src={require('../../assets/images/skills/frontend.png')}
              />
            </div>
            <Typography variant='h5'>Frontend</Typography>
            <hr
              className={classes.divider}
              style={{ borderTop: '2px solid #4a4a4a' }}
            />

            <List>
              {frontend.map((item, index) => (
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
          </Paper>
        </Grid>

        <Grid item>
          <Paper elevation={3} className={classes.card}>
            <div style={{ width: '100%', textAlign: 'center' }}>
              <img
                alt='backend'
                src={require('../../assets/images/skills/backend.png')}
              />
            </div>
            <Typography variant='h5'>Backend</Typography>
            <hr
              className={classes.divider}
              style={{ borderTop: '2px solid #4a4a4a' }}
            />

            <List>
              {backend.map((item, index) => (
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
          </Paper>
        </Grid>

        <Grid item>
          <Paper elevation={3} className={classes.card}>
            <div style={{ width: '100%', textAlign: 'center' }}>
              <img
                alt='tech'
                src={require('../../assets/images/skills/tools.png')}
              />
            </div>
            <Typography variant='h5'>Other Tech</Typography>
            <hr
              className={classes.divider}
              style={{ borderTop: '2px solid #4a4a4a' }}
            />

            <List>
              {tech.map((item, index) => (
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
          </Paper>
        </Grid>
      </Grid>

      <IconButton className={classes.expandButton} onClick={handleExpandClick}>
        <ExpandMore fontSize='large' />
      </IconButton>
    </div>
  );
};
