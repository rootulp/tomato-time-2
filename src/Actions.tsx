import { Button, ButtonGroup, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { observer } from 'mobx-react';
import * as React from 'react';
import Timer from './Timer';

@observer
class Actions extends React.Component<{ timer: Timer }, {}> {
    public render() {
      return (
        <div>
          <ButtonGroup>
            <Button
              text="Start"
              intent={Intent.SUCCESS}
              icon={IconNames.PLAY}
              onClick={this.props.timer.startTimer}
            />
            <Button
              text="Pause"
              intent={Intent.WARNING}
              icon={IconNames.PAUSE}
              onClick={this.props.timer.pauseTimer}
            />
            <Button
              text="Reset"
              intent={Intent.DANGER}
              icon={IconNames.REFRESH}
              onClick={this.props.timer.resetTimer}
            />
          </ButtonGroup>
        </div>
      );
    }
}

export default Actions;
