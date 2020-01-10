import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  AppBar,
  Button,
  Toolbar,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  navBar: {
    display: 'flex',
    height: '8vh',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed'
  },
  navItems: {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    padding: 0
  },
  navActiveItem: {
    color: 'orange'
  }
});

export const Navbar: React.FC = () => {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  const handleState = (to: any) => {
    if (to === 'home') {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <Paper className={classes.root}>
      <AppBar
        className={classes.navBar}
        style={
          active
            ? { backgroundColor: 'transparent' }
            : { backgroundColor: 'darkGrey' }
        }>
        <Toolbar>
          <List className={classes.navItems} component='nav'>
            <Link
              activeClass={classes.navActiveItem}
              onSetActive={handleState}
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <ListItem button>
                <ListItemText primary='Home' />
              </ListItem>
            </Link>

            <Link
              activeClass={classes.navActiveItem}
              onSetActive={handleState}
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <ListItem button>
                <ListItemText primary='About' />
              </ListItem>
            </Link>

            <Link
              activeClass={classes.navActiveItem}
              onSetActive={handleState}
              to='skills'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <ListItem button>
                <ListItemText primary='Skills' />
              </ListItem>
            </Link>

            <Link
              activeClass={classes.navActiveItem}
              onSetActive={handleState}
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <ListItem button>
                <ListItemText primary='Contact' />
              </ListItem>
            </Link>
          </List>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};
