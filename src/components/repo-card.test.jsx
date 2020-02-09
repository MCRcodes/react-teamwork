import React from 'react';
import { shallow } from 'enzyme';
import RepoCard from './repo-card';

describe('RepoCard', () => {
  let myRepoCard;

  beforeEach(() => {
    myRepoCard = shallow(<RepoCard
      name="React"
      language="JavaScript"
      stars={120000}
      forks={2000}
    />);
  });

  it('should render', () => {
    const listItems = myRepoCard.find('li');
    const repoTitle = listItems.at(0);
    expect(repoTitle.text()).toBe('Repo Name: React');
  });

  it('should not render description field if it does not exist', () => {
    const listItems = myRepoCard.find('li');
    const repoTitle = listItems.at(1);
    expect(repoTitle.text()).toBe('Repo Description: There is no description');
  });

  it('should render description field if it exists', () => {
    myRepoCard.setProps({
      description: 'best UI library in the universe',
    });
    const listItems = myRepoCard.find('li');
    const repoTitle = listItems.at(1);
    expect(repoTitle.text()).toBe('Repo Description: best UI library in the universe');
  });
});
