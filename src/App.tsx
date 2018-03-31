import * as React from 'react';
import './App.css';
import { Card, Button, Intent } from '@blueprintjs/core';
import { style } from 'typestyle';
import { IconNames } from '@blueprintjs/icons';

const card = style({width: '400px', margin: 'auto' });

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Tomato Time 2 🍅</h1>
        </header>
        <Card className={card} elevation={1}>
          <Button text="Start" intent={Intent.SUCCESS} icon={IconNames.PLAY} />
          <Button text="Stop" intent={Intent.DANGER} icon={IconNames.STOP} />
        </Card>
      </div>
    );
  }
}

export default App;
