import { Button, ButtonGroup, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { observer } from 'mobx-react';
import * as React from 'react';
import AppState from './AppState';

@observer
class Actions extends React.Component<{ appState: AppState }, {}> {
    public render() {
      return (
        <div>
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
        </div>
      );
    }
}

export default Actions;
