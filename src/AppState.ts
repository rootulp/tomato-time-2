import { action, observable } from 'mobx';

class AppState {
    @observable public timer: number;
    @observable public isActive: boolean;

    constructor(timer: number = 10, isActive: boolean = false) {
        this.timer = timer;
        this.isActive = isActive;

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
