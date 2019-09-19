const URL = 'https://mcr-codes-cohorts.herokuapp.com/users/';

const fetchGitHubProfile = (username) => {
  return fetch(`${URL}${username}`)
    .then(res => res.json());
};

export default fetchGitHubProfile;
