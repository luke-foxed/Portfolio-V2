import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  AppBar,
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
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.5s ease-in-out',
    height: '5%'
  },
  navItems: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '30px',
    textTransform: 'uppercase'
  },
  navActiveItem: {
    color: 'rgb(27,163,251)',
    borderRadius: 25
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
        elevation={active ? 0 : 5}
        className={classes.navBar}
        style={
          active
            ? { backgroundColor: 'transparent' }
            : { backgroundColor: '#e3e3e3' }
        }>
        <Toolbar>
          <List
            className={classes.navItems}
            component='nav'
            style={active ? { color: 'white' } : { color: '#575757' }}>
            <Link
              activeClass={classes.navActiveItem}
              onSetActive={handleState}
              to='home'
              spy={true}
              smooth={true}
              duration={500}>
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
              duration={500}>
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
              duration={500}>
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
              duration={500}>
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
              duration={500}>
              <ListItem button style={{ borderRadius: 25 }}>
                <ListItemText primary='Contact' />
              </ListItem>
            </Link>
          </List>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};
