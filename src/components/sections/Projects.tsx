import React, { useEffect, useState, useContext, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  CircularProgress,
} from '@material-ui/core';
import pattern from '../../assets/images/skills_pattern.png';
import {
  DeveloperBoard,
  GitHub,
  Star,
  Publish,
  OpenInNew,
  ExpandMore,
} from '@material-ui/icons';
import { scroller } from 'react-scroll';
import { getRepos, Irepo } from '../../actions';
import Seperator from '../layout/Seperator';
import { ThemeContext } from '../../themeProvider';
import palette from '../theme';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { isMobile } from 'react-device-detect';

const projects = [
  {
    image: require('../../assets/images/seospider.png'),
    name: 'SEO Spider',
    description: `An SEO tool which scrapes the 'people also asked' (PAA) section of the Google search results page. The resulting PAA questions 
    are then searched and scraped to create a tree structure of search terms and the google search results.`,
    link: 'https://github.com/Foxyf76/People-Also-Asked/',
  },

  {
    image: require('../../assets/images/socialcleanr.png'),
    name: 'SocialCleanr',
    description: `A web app that uses machine learning and social media APIs to pull user's Facebook/Twitter content before filtering it for 
    innapropriate imagry or text. All innapropriate detected via machine learning are then alerted to the user.`,
    link: 'https://github.com/Foxyf76/Social-Cleaner',
  },

  {
    image: require('../../assets/images/totalosint1.png'),
    name: 'TotalOSINT (WIP)',
    description: `A web app for scraping and combining OSINT from across multiple websites including VirusTotal, MetaDefender and IBM X-Force. This 
    app supports searches on IP addresses, file hashes and domains.`,
    link: 'https://github.com/Foxyf76/TotalOSINT',
  },

  {
    image: require('../../assets/images/gifme.png'),
    name: 'GifMe',
    description: `A small app built as part of a coding challenge, GifMe uses the Giphy API to display and lazy-load trending images from Giphy.
    Also supported by this app are searching and saving functionality.`,
    link: 'https://github.com/Foxyf76/GifMe',
  },
];

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url(' + pattern + ')',
    boxShadow: 'inset 0px 10px 10px rgba(0,0,0,0.6)',
    transition: 'background-color 0.5s ease-in-out',
    '& h4': {
      color: 'white',
      fontFamily: 'Raleway',
      textTransform: 'uppercase',
      marginTop: '60px',
    },
    '& h5': {
      fontFamily: 'Raleway',
      textTransform: 'uppercase',
      padding: '10px',
    },
    '& .slick-list': {
      margin: '10px',
    },
    '& .slick-initialized': {
      width: isMobile ? 'auto' : '70%',
    },
    '& .slick-dots li button:before': {
      color: 'white',
    },
  },
  projectCard: {
    transition: 'all .2s ease-in-out',
    margin: '20px',
    maxWidth: '300px',
    height: '420px',
    textAlign: 'center',

    '&:hover': {
      transform: 'scale(1.08)',
    },
  },
  githubCard: {
    borderRadius: '15px',
    margin: '10px',
    paddingBottom: '10px',
    width: '300px',
    height: '90px',
    transition: 'all .5s ease-in-out',
    '& h6': {
      fontFamily: 'Raleway',
      textTransform: 'uppercase',
    },
    '&:hover': {
      backgroundColor: '#03a3ff !important',
      '& p, h6': {
        color: 'white !important',
      },
    },
  },
  expandButton: {
    marginTop: '20px',
    color: '#03a3ff',
  },
});
export const Projects: React.FC = () => {
  const classes = useStyles();
  const [repos, setRepos] = useState<Irepo[]>([]);
  const { lightTheme } = useContext(ThemeContext);
  const theme = palette(lightTheme);

  useEffect(() => {
    async function fetchRepos() {
      setRepos(await getRepos());
    }
    if (repos.length === 0) {
      fetchRepos();
    }
  }, [repos]);

  const handleExpandClick = () => {
    scroller.scrollTo('contact', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <div id='projects' className={classes.root}>
      <Typography variant='h4'>Projects</Typography>

      <Seperator color='#03a3ff' />

      <Typography variant='h5' style={{ color: 'white', display: 'flex' }}>
        <DeveloperBoard
          fontSize='large'
          style={{
            color: '#03a3ff',
            paddingRight: '10px',
          }}
        />
        Recent Works
      </Typography>

      <Slider
        {...settings}
        centerMode={true}
        variableWidth={true}
        draggable={isMobile}
        swipeToSlide={isMobile}
        arrows={!isMobile}
      >
        {projects.map((project, key) => (
          <div>
            <Card
              key={key}
              raised={true}
              className={classes.projectCard}
              style={{
                borderRadius: '15px',
                backgroundColor: theme.cardCol,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt={project.name}
                  height='180'
                  image={project.image}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='h2'
                    style={{ color: theme.fontCol }}
                  >
                    {project.name}
                  </Typography>
                  <Typography
                    style={{ height: '120px', color: theme.fontCol }}
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a
                  href={project.link}
                  style={{
                    textDecoration: 'none',
                    margin: '0 auto',
                  }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button
                    startIcon={<OpenInNew />}
                    size='small'
                    color='primary'
                    style={{ color: '#03a3ff' }}
                  >
                    View On GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </div>
        ))}
      </Slider>

      <div
        style={{
          backgroundColor: theme.background2Col,
          marginTop: '60px',
          width: '100%',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'background-color 0.5s ease-in-out',
        }}
      >
        <Seperator color={theme.fontCol} />

        <Typography
          variant='h5'
          style={{ display: 'flex', color: theme.fontCol }}
        >
          <GitHub
            fontSize='large'
            style={{
              color: '#03a3ff',
              paddingRight: '10px',
            }}
          />
          Active GitHub Repos
        </Typography>

        {repos.length === 0 ? (
          <CircularProgress
            value={0}
            style={{ padding: '20px', color: '#03a3ff' }}
          />
        ) : (
          <Grid container direction={'row'} justify='center' xs={12}>
            {repos.map((repo) => (
              <a
                href={repo.html_url}
                style={{ textDecoration: 'none' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Card
                  className={classes.githubCard}
                  style={{ backgroundColor: theme.cardCol }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography variant='h6' style={{ color: theme.fontCol }}>
                        {repo.name}
                      </Typography>
                      <Typography
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          color: theme.fontCol,
                        }}
                      >
                        <Publish
                          fontSize='small'
                          style={{ paddingRight: '10px' }}
                        />
                        Commits: {repo.commits_url}
                      </Typography>

                      <Typography
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          color: theme.fontCol,
                        }}
                      >
                        <Star
                          fontSize='small'
                          style={{ paddingRight: '10px' }}
                        />
                        Stars: {repo.stargazers_count}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </a>
            ))}
          </Grid>
        )}

        <IconButton
          className={classes.expandButton}
          onClick={handleExpandClick}
        >
          <ExpandMore fontSize='large' />
        </IconButton>
      </div>
    </div>
  );
};
