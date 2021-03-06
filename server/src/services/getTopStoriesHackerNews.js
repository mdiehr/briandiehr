import rest from 'restler';
const hackerNewsAPI = 'https://hacker-news.firebaseio.com';

function getTopStoriesHackerNews() {
  return new Promise((resolve, reject) => {
    rest.get(`${hackerNewsAPI}/v0/topstories.json`)
      .on('complete', response => resolve(response))
      .on('error', error => reject(error));
  });
}

export default getTopStoriesHackerNews;
