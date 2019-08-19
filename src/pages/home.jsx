import React from 'react';
import { Link } from 'react-router-dom';

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
      this.state.usernames.map(user => {
        return (
          <Link to={`/${user}`} key={user}>{user}</Link>
        );
      })
    );
  }

}

export default Home;
