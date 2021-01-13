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
} from '@material-ui/core';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { WbSunny } from '@material-ui/icons';
import { ThemeContext } from '../../themeProvider';

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
  navItems: {
    display: 'flex',
    flexDirection: 'row',
    // paddingLeft: '30px',
    // textTransform: 'uppercase',
  },
  navActiveItem: {
    color: 'rgb(27,163,251)',
    borderRadius: 25,
  },
});

export const NavbarDesktop: React.FC = () => {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  const { lightTheme, toggleTheme } = useContext(ThemeContext);

  const handleState = (to: any) => {
    if (to === 'home') {
      setActive(true);
      history.push('/');
    } else {
      setActive(false);
      history.push(`/${to}`);
    }
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
          : '#000',
      }}
    >
      <Toolbar style={{ width: '70%', margin: 'auto' }}>
        <Grid container justify='center'>
          <Grid xs={6} container justify='flex-start' item>
            LOGO
          </Grid>
          <Grid xs={6} container justify='flex-end' item alignItems='center'>
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
            <IconButton style={{ marginLeft: '20px' }} onClick={toggleTheme}>
              <WbSunny style={{ color: 'white' }} />
            </IconButton>
          </Grid>
        </Grid>

        {/* <Router history={history}>
            <List
              className={classes.navItems}
              component='nav'
              style={active ? { color: 'white' } : { color: '#575757' }}
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
          </Router> */}
      </Toolbar>
    </AppBar>
  );
};
