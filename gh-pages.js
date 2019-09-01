const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'master',
  },
  err =>
    err
      ? console.log(`Error with deployment: ${err}`)
      : console.log('Deployed ok!')
);
