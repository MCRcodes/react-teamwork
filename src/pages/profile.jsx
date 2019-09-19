import React, { Component } from 'react';
import ContributionSummary from '../components/contribution-summary';
import ProfileCard from '../components/profile-card';
import RepoList from '../components/repo-list';
import fetchGitHubProfile from '../services/fetchGitHubProfile';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.match.params.username,
      profileData: {},
    };
  }

  componentDidMount() {
    console.log('goGetGetch is called within componentDidMount');
    this.goGetFetch();
  }

  captureGitHubUsername = (event) => {
    const username = event.target.value;
    this.setState({ username });
  };

  goGetFetch = () => {
    const { username } = this.state;
    return fetchGitHubProfile(username)
      .then(data => {
        this.setState({ profileData: data });
      });
  };

  render() {
    const { username } = this.state;

    if (!this.state.profileData.repos) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <input onChange={this.captureGitHubUsername} />
        <button onClick={this.goGetFetch}>Get Stats</button>
        <br />
        <br />
        <ProfileCard username={username} profile={this.state.profileData.profile} />
        <RepoList username={username} repos={this.state.profileData.repos} />
        <ContributionSummary username={username} events={this.state.profileData.events} contributions={this.state.profileData.contributions} />
      </div>
    );
  }
}

export default Profile;
