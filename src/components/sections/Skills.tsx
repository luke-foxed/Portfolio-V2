import React, { useState, ReactHTMLElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, ListItemText, GridList } from '@material-ui/core';
import gradient from '../../assets/images/gradient.png';
import { Work, Language, Code } from '@material-ui/icons';

const Fade = require('react-reveal/Fade');

const languages = [
  {
    image: require('../../assets/images/languages/typescript.png'),
    color: '#1076c6',
    language: 'TypeScript'
  },
  {
    image: require('../../assets/images/languages/javascript.png'),
    color: '#dc35ce',
    language: 'JavaScript'
  },
  {
    image: require('../../assets/images/languages/python.png'),
    color: '#ffd242',
    language: 'Python'
  },
  {
    image: require('../../assets/images/languages/html.png'),
    color: '#f16529',
    language: 'HTML'
  },
  {
    image: require('../../assets/images/languages/java.png'),
    color: '#dc3535',
    language: 'Java'
  },
  {
    image: require('../../assets/images/languages/css.png'),
    color: '#55b773',
    language: 'CSS'
  },
  {
    image: require('../../assets/images/languages/kotlin.png'),
    color: '#7c66f3',
    language: 'Kotlin'
  }
];

const technologies = [
  {
    image: require('../../assets/images/technologies/node.png'),
    color: '#83cd29',
    language: 'Node'
  },
  {
    image: require('../../assets/images/technologies/docker.png'),
    color: '#0b92d1',
    language: 'Docker'
  },
  {
    image: require('../../assets/images/technologies/express.png'),
    color: '#444444',
    language: 'Express'
  },
  {
    image: require('../../assets/images/technologies/tensorflow.png'),
    color: '#ff8600',
    language: 'Tensorflow'
  },
  {
    image: require('../../assets/images/technologies/react.png'),
    color: '#53c1de',
    language: 'React'
  },
  {
    image: require('../../assets/images/technologies/webdriverio.png'),
    color: '#ea5906',
    language: 'WebdriverIO'
  },
  {
    image: require('../../assets/images/technologies/flask.png'),
    color: '#000',
    language: 'Flask'
  },
  {
    image: require('../../assets/images/technologies/git.png'),
    color: '#f05033',
    language: 'Git'
  }
];

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url(' + gradient + ')',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgb(232, 232, 232)'
  },
  header: {
    fontFamily: 'Raleway',
    textTransform: 'uppercase',
    paddingBottom: '20px',
    marginTop: '80px',
    color: '#5b5b5b'
  },
  gridList: {
    padding: '15px',
    marginTop: '10px',
    borderRadius: 50,
    backgroundColor: '#03a3ff',
    width: '60vw',
    textAlign: 'center'
  },
  gridImage: {
    transition: 'all .2s ease-in-out',
    overflow: 'hidden',
    borderRadius: 150,
    borderColor: 'transparent',
    backgroundColor: 'grey',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  divider: {
    width: '40px',
    border: 0
  }
});
export const Skills: React.FC = () => {
  const classes = useStyles();

  const handleMouseOver = (e: any, color: String) => {
    const currentImage = e.target;
    currentImage.style.backgroundColor = color;
  };

  const handleMouseOut = (e: any) => {
    e.target.style.backgroundColor = 'grey';
  };

  return (
    <div id='skills' className={classes.root}>
      <Grid container direction='column' xs={12} alignItems='center'>
        <Typography
          variant='h4'
          className={classes.header}
          style={{ color: 'white' }}>
          Skills
        </Typography>

        <hr
          className={classes.divider}
          style={{ borderTop: '2px solid white' }}
        />
        <br></br>
        <Typography
          variant='h5'
          className={classes.header}
          style={{ color: '#4a4a4a', display: 'flex' }}>
          <Language
            fontSize='large'
            style={{
              color: '#03a3ff',
              paddingRight: '10px'
            }}
          />
          Languages
        </Typography>

        <Grid
          container
          className={classes.gridList}
          spacing={0}
          justify='center'>
          {languages.map(item => (
            <Grid
              item
              style={{ padding: '10px' }}
              xs={'auto'}
              sm={6}
              md={4}
              lg={4}
              xl={'auto'}>
              <Fade bottom>
                <img
                  width={100}
                  height={100}
                  src={item.image}
                  className={classes.gridImage}
                  onMouseOver={event => handleMouseOver(event, item.color)}
                  onMouseOut={event => handleMouseOut(event)}
                  alt={'image' + languages.indexOf(item)}
                />
                <Typography
                  style={{
                    color: 'white',
                    paddingTop: '10px'
                  }}>
                  {item.language}
                </Typography>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Typography
        variant='h5'
        className={classes.header}
        style={{ color: '#4a4a4a', display: 'flex' }}>
        <Code
          fontSize='large'
          style={{
            color: '#03a3ff',
            paddingRight: '10px'
          }}
        />
        Technologies
      </Typography>

      <Grid container className={classes.gridList} spacing={0} justify='center'>
        {technologies.map(item => (
          <Grid
            item
            style={{ padding: '10px' }}
            xs={'auto'}
            sm={6}
            md={4}
            lg={4}
            xl={'auto'}>
            <Fade bottom>
              <img
                width={100}
                height={100}
                src={item.image}
                className={classes.gridImage}
                onMouseOver={event => handleMouseOver(event, item.color)}
                onMouseOut={event => handleMouseOut(event)}
                alt={'image' + languages.indexOf(item)}
              />
              <Typography
                style={{
                  color: 'white',
                  paddingTop: '10px'
                }}>
                {item.language}
              </Typography>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
