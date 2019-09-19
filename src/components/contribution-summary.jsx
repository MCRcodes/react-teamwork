import React from 'react';

const ContributionSummary = (props) => {
  const { username, events, contributions } = props;
  const pushEvents = events.filter(event => event.type === 'PushEvent');
  const pullRequests = events.filter(event => event.type === 'PullRequestEvent');

  return (
    <div>
      <h1>Contribution Summary for: {username}</h1>
      <h2>
        {username} Has made a total of {contributions} contributions!
      </h2>
      <h2>
        {pushEvents.length} of which were Push event
        {pushEvents.length > 1 && 's'}!
      </h2>
      <h2>
          And, {pullRequests.length} Pull Request
        {pullRequests.length > 1 && 's'}!
      </h2>
    </div>
  );
};

export default ContributionSummary;
