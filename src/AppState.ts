import { action, observable } from 'mobx';

class AppState {
    @observable public timer: number = 10;
    @observable public isActive: boolean = false;

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
