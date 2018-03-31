import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import AppState from './AppState';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const appState: AppState = new AppState();
  ReactDOM.render(<App appState={appState}/>, div);
});
