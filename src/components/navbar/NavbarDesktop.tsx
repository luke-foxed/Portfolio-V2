import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { Router } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Brightness2, WbSunny } from '@material-ui/icons';
import { ThemeContext } from '../../themeProvider';
import palette from '../theme';

const history = createBrowserHistory();
const trackingId = process.env.REACT_APP_TRACKING_ID;
ReactGA.initialize(trackingId as string);

history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  navBar: {
    transition: 'background-color 0.5s ease-in-out',
  },
  circle: {
    height: '45px',
    width: '45px',
    borderRadius: '200px',
    border: '3px solid white',
    backgroundColor: 'transparent',
    display: ' flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 0px 33px 0px rgba(0,0,0,0.5)',
  },
  navItems: {
    display: 'flex',
    flexDirection: 'row',
    textTransform: 'uppercase',
  },
  navActiveItem: {
    color: 'rgb(27,163,251)',
    borderRadius: 25,
  },
});

export const NavbarDesktop: React.FC = () => {
  const classes = useStyles({});
  const [active, setActive] = useState(false);
  const { lightTheme, toggleTheme } = useContext(ThemeContext);
  const theme = palette(lightTheme);

  const handleState = (to: any) => {
    if (to === 'home') {
      setActive(true);
      history.push('/');
    } else {
      setActive(false);
      history.push(`/${to}`);
    }
  };

  const RouterComponent = () => {
    return (
      <Router history={history}>
        <List
          className={classes.navItems}
          component='nav'
          style={{
            color: active ? 'white' : lightTheme ? '#575757' : 'white',
          }}
        >
          <Link
            activeClass={classes.navActiveItem}
            onSetActive={handleState}
            to='home'
            spy={true}
            smooth={true}
            duration={500}
          >
            <ListItem button style={{ borderRadius: 25 }}>
              <ListItemText primary='Home' />
            </ListItem>
          </Link>

          <Link
            activeClass={classes.navActiveItem}
            onSetActive={handleState}
            to='about'
            spy={true}
            smooth={true}
            duration={500}
          >
            <ListItem button style={{ borderRadius: 25 }}>
              <ListItemText primary='About' />
            </ListItem>
          </Link>
          <Link
            activeClass={classes.navActiveItem}
            onSetActive={handleState}
            to='skills'
            spy={true}
            smooth={true}
            duration={500}
          >
            <ListItem button style={{ borderRadius: 25 }}>
              <ListItemText primary='Skills' />
            </ListItem>
          </Link>
          <Link
            activeClass={classes.navActiveItem}
            onSetActive={handleState}
            to='projects'
            spy={true}
            smooth={true}
            duration={500}
          >
            <ListItem button style={{ borderRadius: 25 }}>
              <ListItemText primary='Projects' />
            </ListItem>
          </Link>
          <Link
            activeClass={classes.navActiveItem}
            onSetActive={handleState}
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
          >
            <ListItem button style={{ borderRadius: 25 }}>
              <ListItemText primary='Contact' />
            </ListItem>
          </Link>
        </List>
      </Router>
    );
  };

  return (
    <AppBar
      elevation={active ? 0 : 5}
      className={classes.navBar}
      style={{
        backgroundColor: active
          ? 'transparent'
          : lightTheme
          ? '#e3e3e3'
          : 'rgba(0,0,0,0.8)',
      }}
    >
      <Toolbar
        style={{
          width: '60%',
          margin: 'auto',
        }}
      >
        <Grid container justify='center'>
          <Grid xs={4} container item justify='flex-start' alignItems='center'>
            {active ? (
              <div className={classes.circle} style={{}}>
                <Typography style={{ fontFamily: 'Raleway', fontSize: '25px' }}>
                  L<b style={{ color: '#03a3ff' }}>F</b>
                </Typography>
              </div>
            ) : (
              <Typography style={{ fontFamily: 'Raleway', fontSize: '25px' }}>
                <b style={{ color: theme.fontCol }}>LUKE_</b>
                <b style={{ color: '#03a3ff' }}>FOX</b>
              </Typography>
            )}
          </Grid>

          <Grid xs={8} container justify='flex-end' item alignItems='center'>
            <RouterComponent />
            <IconButton style={{ marginLeft: '20px' }} onClick={toggleTheme}>
              {lightTheme ? (
                <Brightness2 style={{ color: active ? 'white' : '#03a3ff' }} />
              ) : (
                <WbSunny style={{ color: active ? 'white' : '#03a3ff' }} />
              )}
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
