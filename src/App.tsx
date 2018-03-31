import * as React from 'react';
import './App.css';
import { Card } from '@blueprintjs/core';
import { style } from 'typestyle';

const card = style({width: '400px', margin: 'auto' });

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Tomato Time 2 🍅</h1>
        </header>
        <Card className={card} elevation={1}>
          Foo
        </Card>
      </div>
    );
  }
}

export default App;
