import axios from 'axios';
const keys = require('../src/default.json');

export const getRepos = async () => {
  let { data } = await axios.get(
    `https://api.github.com/users/Foxyf76/repos?per_page=5&sort=created:asc&client_id=${keys.githubClientID}
  &client_secret=${keys.githubSecret}`
  );

  if (data.length === 0) {
    return 'Error fetching GitHub';
  } else return data;
};
