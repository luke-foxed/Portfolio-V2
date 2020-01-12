import React, { useState, ReactHTMLElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, ListItemText, GridList } from '@material-ui/core';
import gradient from '../../assets/images/gradient.png';

// Icons
import typescript from '../../assets/images/languages/typescript.png';
import javascript from '../../assets/images/languages/javascript.png';
import python from '../../assets/images/languages/python.png';
import html from '../../assets/images/languages/html.png';

const row1 = [
  { image: typescript, color: '#1076c6', language: 'TypeScript' },
  { image: javascript, color: '#c6105d', language: 'JavaScript' },
  { image: python, color: '#ffd242', language: 'Python' },
  { image: html, color: '#f16529', language: 'HTML' },
  { image: typescript, color: '#1076c6', language: 'TypeScript' },
  { image: javascript, color: '#c6105d', language: 'JavaScript' },
  { image: python, color: '#ffd242', language: 'Python' }
];

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url(' + gradient + ')'
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
    borderRadius: 30,
    backgroundColor: 'rgb(27,163,251)',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  },
  gridImage: {
    transition: 'all .2s ease-in-out',
    backgroundColor: 'grey',
    '&:hover': {
      transform: 'scale(1.2)'
    }
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
      <Grid container direction='column' item xs={6} alignItems='center'>
        <Typography
          variant='h3'
          className={classes.header}
          style={{ color: 'white' }}>
          Skills
        </Typography>
      </Grid>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant='h4' className={classes.header}>
          Languages
        </Typography>

        <GridList className={classes.gridList} cols={7} spacing={15}>
          {row1.map(tile => (
            <Grid item>
              <img
                width={110}
                height={110}
                src={tile.image}
                className={classes.gridImage}
                onMouseOver={event => handleMouseOver(event, tile.color)}
                onMouseOut={event => handleMouseOut(event)}
                alt={'image' + row1.indexOf(tile)}
              />
              <ListItemText style={{ color: 'white', paddingTop: '10px' }}>
                {tile.language}
              </ListItemText>
            </Grid>
          ))}
        </GridList>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Typography variant='h4' className={classes.header}>
          Technologies
        </Typography>

        <GridList className={classes.gridList} cols={7} spacing={15}>
          {row1.map(tile => (
            <Grid item>
              <img
                width={110}
                height={110}
                src={tile.image}
                className={classes.gridImage}
                onMouseOver={event => handleMouseOver(event, tile.color)}
                onMouseOut={event => handleMouseOut(event)}
                alt={'image' + row1.indexOf(tile)}
              />
              <ListItemText style={{ color: 'white', paddingTop: '10px' }}>
                {tile.language}
              </ListItemText>
            </Grid>
          ))}
        </GridList>
      </div>
    </div>
  );
};
