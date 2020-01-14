///

import axios from 'axios';
const keys = require('../src/default.json');

export interface Irepo {
  name: string;
  stargazers_count: string;
  commits: string;
  url: string;
}

export const getRepos = async () => {
  let results: Irepo[] = [];
  let { data } = await axios.get(
    `https://api.github.com/users/Foxyf76/repos?per_page=5&sort=created:asc&client_id=${keys.githubClientID}
  &client_secret=${keys.githubSecret}`
  );

  data.forEach((repo: Irepo) => {
    results.push({
      name: repo.name,
      stargazers_count: repo.stargazers_count,
      commits: '',
      url: repo.url
    });
  });

  results = (await (getCommits(results) as unknown)) as Irepo[];
  return results;
};

const getCommits = async (repos: Irepo[]) => {
  repos.forEach(async repo => {
    let { data } = await axios.get(
      `https://api.github.com/repos/Foxyf76/${repo.name}/stats/contributors`
    );

    repo.commits = data[0].total;
  });

  return repos;
};
