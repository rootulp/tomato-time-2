import { Button } from '@blueprintjs/core';
import { shallow } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Actions from './Actions';
import Timer from './Timer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const timer: Timer = new Timer();
  ReactDOM.render(<Actions timer={timer}/>, div);
});

it('renders 3 buttons', () => {
  // Timer should really be a mock here
  const timer: Timer = new Timer(0, false);
  const actions = shallow(<Actions timer={timer}/>);

  expect(actions.find(Button)).toHaveLength(3);
});

