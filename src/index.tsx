import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import AppState from './AppState';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const appState: AppState = new AppState();

ReactDOM.render(
  <App appState={appState} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
