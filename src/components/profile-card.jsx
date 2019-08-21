import React from 'react';
import PropTypes from 'prop-types';

const ProfileCard = props => {
  return (

    <div>
      <h1 className="profile-card">{props.name}</h1>
      <img src={props.avatar} />
      <ul>
        <li><a href={props.url}>{props.url}</a></li>
        <li>Repos: {props.repos}</li>
        <li>following: {props.following}</li>
        {props.location ? (<li>Location: {props.location}</li>) : (null) }
        {props.company ? (<li>Company: {props.company}</li>) : (null) }
      </ul>
    </div>

  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProfileCard;
