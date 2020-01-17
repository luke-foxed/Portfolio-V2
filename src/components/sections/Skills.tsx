import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import gradient from '../../assets/images/gradient.png';
import { Language, Code } from '@material-ui/icons';

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
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgb(232, 232, 232)',
    '& h4': {
      fontFamily: 'Raleway',
      textTransform: 'uppercase',
      marginTop: '50px'
    },
    '& h5': {
      fontFamily: 'Raleway',
      textTransform: 'uppercase',
      padding: '10px'
    }
  },

  divider: {
    width: '40px',
    border: 0
  },
  skillCard: {
    position: 'relative',
    width: '300px',
    height: '300px',
    backgroundColor: '#008CBA',
    '&:hover > #overlay': {
      width: '100%'
    },
    '&:hover > img': {
      filter: 'blur(8px)'
    }
  },
  cardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    overflow: 'hidden',
    width: '0',
    height: '100%',
    transition: '.5s ease-in-out'
  },

  cardText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    fontFamily: 'Raleway',
    fontSize: '28px',
    color: 'white'
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

  const SkillCard = () => {
    return (
      <div className={classes.skillCard}>
        <img
          style={{ transition: '.5s ease-in-out' }}
          alt='logo'
          width={300}
          height={300}
          src={
            'https://help.crossbrowsertesting.com/wp-content/uploads/2017/08/java-logo-large.png'
          }
        />
        <div className={classes.cardOverlay} id={'overlay'}>
          <div className={classes.cardText}>JAVA</div>
        </div>
      </div>
    );
  };

  return (
    <div id='skills' className={classes.root}>
      <Typography variant='h4'>Skills</Typography>

      <hr
        className={classes.divider}
        style={{ borderTop: '2px solid #03a3ff' }}
      />

      <Grid container direction={'row'} justify='center' spacing={4} xs={12}>
        <SkillCard></SkillCard>
      </Grid>
    </div>
  );
};
