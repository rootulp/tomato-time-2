import { Card } from '@blueprintjs/core';
import { observer } from 'mobx-react';
import * as React from 'react';
import { style } from 'typestyle';
import Actions from './Actions'
import './App.css';
import AppState from './AppState';

const card = style({ width: '400px', margin: 'auto' });

@observer
class App extends React.Component<{ appState: AppState }, {}> {
  public render() {
    return (
      <div className="App">
        <header>
          <h1>Tomato Time 2 🍅</h1>
        </header>
        <Card className={card} elevation={1}>
          <p>{this.props.appState.timer}</p>
          <Actions appState={this.props.appState} />
        </Card>
      </div>
    );
  }
}

export default App;
