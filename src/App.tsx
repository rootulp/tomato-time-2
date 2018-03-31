import * as React from 'react';
import './App.css';
import { Card, Button, Intent, ButtonGroup } from '@blueprintjs/core';
import { style } from 'typestyle';
import { IconNames } from '@blueprintjs/icons';
import { observer } from 'mobx-react';
import AppState from './AppState';

const card = style({width: '400px', margin: 'auto' });

@observer
class App extends React.Component<{appState: AppState}, {}> {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Tomato Time 2 🍅</h1>
        </header>
        <Card className={card} elevation={1}>
          <p>{this.props.appState.timer}</p>
          <ButtonGroup>
            <Button
              text="Start"
              intent={Intent.SUCCESS}
              icon={IconNames.PLAY}
              onClick={this.props.appState.startTimer}
            />
            <Button
              text="Pause"
              intent={Intent.WARNING}
              icon={IconNames.PAUSE}
              onClick={this.props.appState.pauseTimer}
            />
            <Button
              text="Reset"
              intent={Intent.DANGER}
              icon={IconNames.REFRESH}
              onClick={this.props.appState.resetTimer}
            />
          </ButtonGroup>
        </Card>
      </div>
    );
  }
}

export default App;
