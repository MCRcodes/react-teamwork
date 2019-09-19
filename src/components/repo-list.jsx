import React from 'react';
import RepoCard from './repo-card';

const RepoList = (props) => {
  const { repos } = props;

  return (
    <div>{ repos.map((repo) => {
      return (
        <RepoCard
          className="repoCardClass"
          key={repo.name}
          name={repo.name}
          description={repo.description}
          language={repo.language}
          stars={repo.watchers}
          forks={repo.forks}
        />
      );
    })}
    </div>
  );
};


export default RepoList;
