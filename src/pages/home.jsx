import React from 'react';
import ProfilePage from '../components/profile-page';

import '../styles/main.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernames: null,
    };
  }

  componentDidMount() {
    const URL = 'https://mcr-codes-cohorts.herokuapp.com/users/';
    fetch(URL).then(response => response.json()).then(data => {
      this.setState({
        usernames: data.feb19,
      });
    });
  }

  render() {
    if (!this.state.usernames) {
      return (
        <h1>Loading...</h1>
      );
    }
    return (
      <div className="container">
        {
          this.state.usernames.map(user => {
            return (
              <ProfilePage
                key={user}
                name={user}
              />
            );
          })
        }
      </div>
    );
  }
}

export default Home;
