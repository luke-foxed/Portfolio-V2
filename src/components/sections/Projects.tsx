import React, { useRef, useEffect, useState } from 'react';
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
  Divider
} from '@material-ui/core';
import pattern from '../../assets/images/skills_pattern.png';
import { Language, DeveloperBoard, GitHub, Star } from '@material-ui/icons';
import { getRepos } from '../../Actions';

interface Irepo {
  name: string;
  commits_url: string;
  stargazers_count: string;
  link: string;
}

const projects = [
  {
    image: require('../../assets/images/seospider.png'),
    name: 'SEO Spider',
    description: `An SEO tool which scrapes the 'people also asked' (PAA) section of the Google search results page. The resulting PAA questions 
    are then searched and scraped to create a tree structure of search terms and the google search results.`,
    link: 'https://github.com/Foxyf76/People-Also-Asked/'
  },

  {
    image: require('../../assets/images/socialcleanr.png'),
    name: 'SocialCleanr (Ongoing)',
    description: `A web app that uses machine learning and social media APIs to pull down a user's Facebook/Twitter content before filtering it for 
    innapropriate imagry or text`,
    link: 'https://github.com/Foxyf76/Social-Cleaner'
  }
];

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url(' + pattern + ')',
    boxShadow: 'inset 0px 10px 10px rgba(0,0,0,0.6)'
  },
  header: {
    fontFamily: 'Raleway',
    textTransform: 'uppercase',
    paddingBottom: '20px',
    marginTop: '60px',
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
  },
  githubCard: {
    marginRight: '10px',
    marginLeft: '10px',
    '& h6': {
      fontFamily: 'Raleway',
      textTransform: 'uppercase'
    }
  }
});
export const Projects: React.FC = () => {
  const classes = useStyles();
  const [repos, setRepos] = useState<Irepo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      setRepos(await getRepos());
    }
    if (repos.length === 0) {
      fetchRepos();
    }
  }, [repos]);

  console.log(repos);

  return (
    <div id='projects' className={classes.root}>
      <Typography
        variant='h4'
        className={classes.header}
        style={{ color: 'white' }}>
        Projects
      </Typography>

      <hr
        className={classes.divider}
        style={{ borderTop: '2px solid white' }}
      />

      <Typography
        variant='h5'
        className={classes.header}
        style={{ color: 'white', display: 'flex' }}>
        <DeveloperBoard
          fontSize='large'
          style={{
            color: '#03a3ff',
            paddingRight: '10px'
          }}
        />
        Recent Works
      </Typography>

      <Grid container direction={'row'} justify='center' spacing={4} xs={12}>
        {projects.map(project => (
          <Grid item xs={'auto'} sm={6} md={4} lg={4} xl={'auto'}>
            <Card
              raised={true}
              style={{ width: '300px', textAlign: 'center' }}
              onClick={getRepos}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt={project.name}
                  height='200'
                  image={project.image}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {project.name}
                  </Typography>
                  <Typography
                    style={{ height: '120px' }}
                    variant='body2'
                    color='textSecondary'
                    component='p'>
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a href={project.link} style={{ textDecoration: 'none' }}>
                  <Button size='small' color='primary'>
                    View On GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        xs={12}
        alignItems='center'
        justify='center'
        style={{
          backgroundColor: '#dedede',
          marginTop: '40px',
          width: '100%',
          flexGrow: 1
        }}>
        {repos!.map(repo => (
          <Card className={classes.githubCard}>
            <CardActionArea>
              <CardContent>
                <Typography variant='h6'>{repo.name}</Typography>
                <Typography
                  style={{
                    color: 'black',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                  <GitHub fontSize='small' style={{ paddingRight: '10px' }} />
                  Commits: {repo.commits_url.length}
                </Typography>

                <Typography
                  style={{
                    color: 'black',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                  <Star fontSize='small' style={{ paddingRight: '10px' }} />
                  Stars: {repo.stargazers_count}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
    </div>
  );
};
