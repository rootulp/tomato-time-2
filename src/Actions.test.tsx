import { Button } from '@blueprintjs/core';
import { shallow } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Actions from './Actions';
import AppState from './AppState';

jest.mock('./AppState');

it('renders without crashing', () => {
  const div = document.createElement('div');
  const appState: AppState = new AppState();
  ReactDOM.render(<Actions appState={appState}/>, div);
});

it('renders 3 buttons', () => {
  // AppState should really be a mock here
  const appState: AppState = new AppState(0, false);
  const actions = shallow(<Actions appState={appState}/>);

  expect(actions.find(Button)).toHaveLength(3);
});

