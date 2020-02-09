import React from 'react';
import { shallow } from 'enzyme';
import Profile from './profile';
import fetchGitHubProfile from '../services/fetchGitHubProfile';

jest.mock('../services/fetchGitHubProfile');
fetchGitHubProfile.mockImplementation(() => Promise.resolve({ repos: [{}] }));

describe('Profile page', () => {
  it('should render', () => {
    const dummyRoute = {
      params: {
        username: 'ersel',
      },
    };
    const myProfile = shallow(<Profile match={dummyRoute} />);
    myProfile.update();
    console.log(myProfile.debug());
  });
});
