import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

jest.useFakeTimers();

it('App renders correctly', () => {
  renderer.create(<App />);
});
