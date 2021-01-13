import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { scroller } from 'react-scroll';
import cover from '../../assets/images/cover.png';
import { Description, ExpandLess, Favorite } from '@material-ui/icons';
import { ThemeContext } from '../../themeProvider';
import palette from '../theme';
import Seperator from '../layout/Seperator';

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
    },
  },

  divider: {
    width: '40px',
    border: 0,
  },
  contactContainer: {
    width: '100%',
    backgroundImage: 'url(' + cover + ')',
    backgroundPosition: 'center center',
    height: '500px',
    boxShadow:
      'inset 0px 11px 8px -5px rgba(0,0,0,0.6),inset 0px -11px 8px -5px rgba(0,0,0,0.6)',
    '& img': {
      transition: 'all .2s ease-in-out',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      margin: '20px',
      borderRadius: 200,
      '&:hover': {
        backgroundColor: '#03a3ff',
      },
    },
  },

  contactButton: {
    transition: 'all .2s ease-in-out',
    backgroundColor: 'transparent',
    margin: '20px',
    '&:hover': {
      backgroundColor: '#03a3ff',
      color: 'white',
    },
  },

  footer: {
    height: '50px',
    backgroundColor: '#757575',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#dbdbdb',
    transition: 'background-color 0.5s ease-in-out',
  },
});
export const Contact: React.FC = () => {
  const classes = useStyles({});
  const { lightTheme } = useContext(ThemeContext);
  const theme = palette(lightTheme);

  const handleTopClick = () => {
    scroller.scrollTo('home', {
      duration: 1000,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <div
      id='contact'
      className={classes.root}
      style={{ backgroundColor: theme.background1Col }}
    >
      <Grid
        container
        direction='column'
        xs={12}
        alignItems='center'
        style={{ width: '100%' }}
      >
        <Typography variant='h4' style={{ color: theme.fontCol }}>
          Contact
        </Typography>

        <Seperator color='#03a3ff' />
      </Grid>

      <Typography
        style={{
          color: theme.fontCol,
          padding: '20px',
          width: '50%',
          textAlign: 'center',
        }}
      >
        Want to see more or get in touch? Feel free to check out any of the
        below sites!
      </Typography>

      <Grid
        container
        direction={'row'}
        justify='center'
        xs={12}
        style={{ padding: '120px' }}
        className={classes.contactContainer}
      >
        <a
          href='https://www.linkedin.com/in/luke-fox-aa103a148/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
            width={200}
            height={200}
            src={require('../../assets/images/contact/linkedin.png')}
            alt={'linkedin'}
          />
        </a>
        <a
          href='https://github.com/Foxyf76'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
            width={200}
            height={200}
            src={require('../../assets/images/contact/github.png')}
            alt={'github'}
          />
        </a>

        <a
          href='https://twitter.com/luke_foxed'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
            width={200}
            height={200}
            src={require('../../assets/images/contact/twitter.png')}
            alt={'twitter'}
          />
        </a>

        <a
          href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=lukefoxportfolio@gmail.com&tf=1'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
            width={200}
            height={200}
            src={require('../../assets/images/contact/gmail.png')}
            alt={'gmail'}
          />
        </a>
      </Grid>

      <Seperator color={theme.fontCol} />

      <div
        style={{
          display: 'flex',
          flex: '1 0 auto',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h5'
          style={{ display: 'flex', color: theme.fontCol, flex: '1 0 auto' }}
        >
          <Description
            fontSize='large'
            style={{
              color: '#03a3ff',
              paddingRight: '10px',
            }}
          />
          Request A CV
        </Typography>
        <Typography
          style={{
            color: theme.fontCol,
            padding: '20px',
            width: '55%',
            textAlign: 'center',
          }}
        >
          If you'd like a CV, please get in contact with via LinkedIn or Gmail
          and I will send one upon request!
        </Typography>

        <Button
          variant='outlined'
          href='mailto:lukefoxportfolio@gmail.com'
          rel='noopener noreferrer'
          target='_blank'
          style={{ color: theme.fontCol }}
          className={classes.contactButton}
        >
          Send an Email
        </Button>

        <Button
          onClick={handleTopClick}
          style={{ margin: '20px', color: '#03a3ff' }}
          startIcon={<ExpandLess fontSize='large' />}
        >
          Back To Top
        </Button>
        <br />
        <br />
      </div>

      <div className={classes.footer} style={{ backgroundColor: theme.footer }}>
        <p>Made with</p> &nbsp; <Favorite style={{ color: '#03a3ff' }} /> &nbsp;
        <p>by Luke Fox, 2020</p>
      </div>
    </div>
  );
};
