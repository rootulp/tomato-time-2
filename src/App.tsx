import { Card } from '@blueprintjs/core';
import { observer } from 'mobx-react';
import * as React from 'react';
import { style } from 'typestyle';
import Actions from './Actions'
import './App.css';
import Timer from './Timer';

const card = style({ width: '400px', margin: 'auto' });

@observer
class App extends React.Component {

  private timer: Timer;

  constructor(props: any) {
    super(props);
    this.timer = new Timer();
  }

  public render() {
    return (
      <div className="App">
        <header>
          <h1>Tomato Time 2 🍅</h1>
        </header>
        <Card className={card} elevation={1}>
          <p>{this.timer.timeRemaining}</p>
          <Actions timer={this.timer} />
        </Card>
      </div>
    );
  }
}

export default App;
