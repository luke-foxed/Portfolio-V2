import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, IconButton } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { scroller } from 'react-scroll';
import Particles from 'react-particles-js';
import cover from '../../assets/images/cover.png';
import avatar from '../../assets/images/avatar.png';
import { isMobile } from 'react-device-detect';
import { ThemeContext } from '../../themeProvider';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: 'url(' + cover + ')',
    backgroundSize: 'cover',
  },
  particles: {
    position: 'absolute',
    width: '100%',
    height: '90%',
    zIndex: 1,
  },
  header: {
    fontFamily: 'Raleway',
    color: 'white',
    paddingTop: '20px',
  },
  subtitle: {
    fontFamily: 'Raleway',
    color: 'white',
    fontSize: '18px',
  },
  expandButton: {
    marginTop: '20px',
    color: 'white',
    zIndex: 2,
  },
});
export const Home: React.FC = () => {
  const classes = useStyles();
  const { lightTheme } = useContext(ThemeContext);

  const handleExpandClick = () => {
    scroller.scrollTo('about', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <div
      id='home'
      style={{
        backgroundColor: 'black',
      }}
    >
      <Grid
        justify='center'
        alignItems='center'
        className={classes.root}
        style={{
          opacity: lightTheme ? '1' : '0.8',
          transition: 'all .2s ease-in-out',
        }}
      >
        <Particles
          className={classes.particles}
          params={{
            particles: {
              number: {
                value: isMobile ? 20 : 50,
              },
              size: {
                value: 3,
              },
            },
          }}
        />
        <img
          src={avatar}
          alt='avatar'
          width={250}
          height={250}
          style={{ zIndex: 1 }}
        />
        <Typography variant='h2' className={classes.header}>
          Luke Fox
        </Typography>
        <Typography variant='subtitle1' className={classes.subtitle}>
          Cybersecurity & Web Development Enthusiast
        </Typography>
        <IconButton
          className={classes.expandButton}
          onClick={handleExpandClick}
        >
          <ExpandMore fontSize='large' />
        </IconButton>
      </Grid>
    </div>
  );
};
