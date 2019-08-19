import React from 'react';
import { Link } from 'react-router-dom';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    fetch(`https://mcr-codes-cohorts.herokuapp.com/users/${this.props.name}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          user: data,
        });
      });
  }

  render() {
    if (!this.state.user) {
      return <div>loading...</div>;
    }
    return (

      <div className="profile__card">
        <img src={this.state.user.profile.avatar} />
        <Link to={`/${this.props.name}`}>{this.props.name}</Link>
      </div>
    );
  }
}

export default ProfilePage;
