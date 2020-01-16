const axios = require('axios');

export interface Irepo {
  name: string;
  stargazers_count: string;
  commits_url: string;
  html_url: string;
}

export const getRepos = async () => {
  let results: Irepo[] = [];
  let { data } = await axios.get(
    `https://api.github.com/users/Foxyf76/repos?per_page=5&sort=created:asc`
  );

  data.forEach(async (repo: Irepo) => {
    // not working?
    // let { data } = await axios.get(
    //   `https://api.github.com/repos/Foxyf76/${repo.name}/stats/contributors`
    // );

    if (repo.name.length > 20) {
      repo.name = repo.name.substring(0, 15) + '...';
    }
    results.push({
      name: repo.name,
      stargazers_count: repo.stargazers_count,
      // commits_url: data[0].total,
      commits_url: '0',
      html_url: repo.html_url
    });
  });

  console.log(results);

  return results;
};
