import { observable, action } from 'mobx';

class AppState {
    @observable timer: number = 10;
    @observable isActive: boolean = false;

    constructor() {
        setInterval(() => {
            this.tick();
        },          1000);
    }

    @action
    public startTimer = () => {
        this.isActive = true;
    }

    @action
    public pauseTimer = () => {
        this.isActive = false;
    }

    @action
    public resetTimer = () => {
        this.isActive = false;
        this.timer = 10;
    }

    @action
    private tick = () => {
        if (this.isActive) {
            this.timer -= 1;
        }
    }
}

export default AppState;
