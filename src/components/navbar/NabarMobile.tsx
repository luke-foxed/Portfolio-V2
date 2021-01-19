import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Squash } from 'hamburger-react';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  Grid,
  Collapse,
} from '@material-ui/core';
import ReactGA from 'react-ga';
import { ThemeContext } from '../../themeProvider';
import { Brightness2, WbSunny } from '@material-ui/icons';
import { palette, primaryCol } from '../theme';

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
  },
  navBar: {
    transition: 'background-color 0.5s ease-in-out',
  },
  navItems: {
    width: '100%',
    textAlign: 'center',
    textTransform: 'uppercase',
    '& span': {
      fontSize: '18px',
    },
  },
  navActiveItem: {
    color: primaryCol,
    borderRadius: 25,
  },
});

export const NavbarMobile: React.FC = () => {
  const classes = useStyles({});
  const [isOpen, setMenuOpen] = useState(false);
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
    setMenuOpen(false);
  };

  const handleMenu = () => {
    setMenuOpen(!isOpen);
  };

  return (
    <AppBar
      elevation={active ? 0 : 5}
      className={classes.navBar}
      style={{
        // not at all messy
        backgroundColor:
          active && !isOpen
            ? 'transparent'
            : active && isOpen
            ? 'rgba(0,0,0,0.4)'
            : lightTheme
            ? '#e3e3e3'
            : 'rgba(0,0,0,0.8)',
        backdropFilter: active && isOpen ? 'blur(2px)' : '',
      }}
    >
      <Toolbar style={{ margin: 0, padding: 0 }}>
        <Grid container justify='center'>
          <Grid container item xs={7} justify='flex-start' alignItems='center'>
            <Typography style={{ fontFamily: 'Raleway', fontSize: '25px' }}>
              <b style={{ color: active ? 'white' : theme.fontCol }}>LUKE_</b>
              <b style={{ color: primaryCol }}>FOX</b>
            </Typography>
          </Grid>

          <Grid container item xs={3} justify='flex-end' alignItems='center'>
            <Squash color={primaryCol} toggle={handleMenu} toggled={isOpen} />
          </Grid>

          <Grid
            container
            item
            xs={12}
            justify='center'
            style={{
              width: '100%',

              backgroundColor: 'transparent',
            }}
          >
            <Collapse in={isOpen}>
              <BrowserRouter>
                <Divider />
                <List
                  className={classes.navItems}
                  component='nav'
                  style={{ color: active ? 'white' : theme.fontCol }}
                >
                  <Link
                    activeClass={classes.navActiveItem}
                    onSetActive={handleState}
                    to='home'
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <ListItem
                      button
                      style={{ borderRadius: 25, textAlign: 'center' }}
                      onClick={handleState}
                    >
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
                    <ListItem
                      button
                      style={{ borderRadius: 25, textAlign: 'center' }}
                    >
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
                    <ListItem
                      button
                      style={{ borderRadius: 25, textAlign: 'center' }}
                    >
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
                    <ListItem
                      button
                      style={{ borderRadius: 25, textAlign: 'center' }}
                    >
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
                    <ListItem
                      button
                      style={{ borderRadius: 25, textAlign: 'center' }}
                    >
                      <ListItemText primary='Contact' />
                    </ListItem>
                  </Link>

                  <ListItem button>
                    <IconButton
                      style={{ marginLeft: '20px' }}
                      onClick={toggleTheme}
                    >
                      {lightTheme ? (
                        <Brightness2
                          style={{ color: active ? 'white' : primaryCol }}
                        />
                      ) : (
                        <WbSunny
                          style={{ color: active ? 'white' : primaryCol }}
                        />
                      )}
                    </IconButton>
                  </ListItem>
                </List>
              </BrowserRouter>
            </Collapse>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
