import React from 'react';
import RepoList from './repo-list';
import { shallow } from 'enzyme';

describe('RepoList', () => {
  it('should render', () => {
    const TEST_REPOS = [{
      name: 'enzyme',
      description: 'a testing library',
      language: 'JavaScript',
      watchers: 17000,
      forks: 1851,
    },
    {
      name: 'react',
      description: 'a UI library',
      language: 'JavaScript',
      watchers: 127000,
      forks: 23188,
    },
    {
      name: 'jQuery',
      description: 'a UI library',
      language: 'JavaScript',
      watchers: 51000,
      forks: 18000,
    },
    ];
    const myRepoList = shallow(<RepoList repos={TEST_REPOS} />);

    const repoCardElements = myRepoList.find('RepoCard');
    expect(repoCardElements.at(1).prop('name')).toBe('react');
    expect(repoCardElements.at(1).prop('description')).toBe('a UI library');
    expect(repoCardElements.at(1).prop('language')).toBe('JavaScript');
    expect(repoCardElements.at(1).prop('stars')).toBe(127000);
    expect(repoCardElements.at(1).prop('forks')).toBe(23188);

    expect(repoCardElements.at(1).props()).toEqual({
      className: 'repoCardClass', description: 'a UI library', forks: 23188, language: 'JavaScript', name: 'react', stars: 127000,
    });
    expect(repoCardElements).toHaveLength(3);
  });
});
