const axios = require('axios');

export interface Irepo {
  name: string;
  stargazers_count: string;
  commits_url: string;
  html_url: string;
}

export const getRepos = async () => {
  const asyncForEach = async (array: any, callback: any) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  };

  let results: Irepo[] = [];
  let { data } = await axios.get(
    'https://api.github.com/users/Foxyf76/repos?per_page=5&sort=created:asc',
    {
      'user-agent': 'node.js',
      Authorization: `token ${process.env.REACT_APP_GITHUB_KEY}`,
    }
  );

  // source https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
  await asyncForEach(data, async (repo: Irepo) => {
    let count;
    let { data } = await axios.get(
      `https://api.github.com/repos/Foxyf76/${repo.name}/stats/contributors`,
      {
        'user-agent': 'node.js',
        Authorization: `token ${process.env.REACT_APP_GITHUB_KEY}`,
      }
    );

    if (repo.name.length > 20) {
      repo.name = repo.name.substring(0, 15) + '...';
    }

    try {
      count = data[0].total;
    } catch {
      count = 0;
    }

    results.push({
      name: repo.name,
      stargazers_count: repo.stargazers_count,
      commits_url: count,
      html_url: repo.html_url,
    });
  });

  return results;
};
