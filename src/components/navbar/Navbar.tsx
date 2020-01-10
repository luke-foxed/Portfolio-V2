import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { AppBar, Button, Toolbar } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  navBar: {
    display: 'flex',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed'
  },
  navItems: {
    color: 'white'
  }
});

export const Navbar: React.FC = () => {
  const classes = useStyles();
  const [active, setActive] = useState('');

  const handleNavClick = (e: React.MouseEvent<HTMLElement>) => {
    setActive(e.currentTarget.id);
  };

  return (
    <Paper className={classes.root}>
      <AppBar className={classes.navBar}>
        <Toolbar>
          <Link
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <Button
              id={'home'}
              className={classes.navItems}
              onClick={handleNavClick}>
              Home
            </Button>
          </Link>

          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <Button className={classes.navItems}>About</Button>
          </Link>

          <Link
            activeClass='active'
            to='skills'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <Button className={classes.navItems}>Skills</Button>
          </Link>

          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <Button className={classes.navItems}>Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};
