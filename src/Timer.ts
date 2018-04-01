import { action, observable } from 'mobx';

class Timer {
    public static readonly POMODORO_LENGTH: number = 25 * 60;
    @observable public timeRemaining: number;
    @observable public isActive: boolean;


    constructor(timer: number = Timer.POMODORO_LENGTH, isActive: boolean = false) {
        this.timeRemaining = timer;
        this.isActive = isActive;

        setInterval(() => {
            this.tick();
        },          1000);
    }

    @action
    public start = () => {
        this.isActive = true;
    }

    @action
    public pause = () => {
        this.isActive = false;
    }

    @action
    public reset = () => {
        this.isActive = false;
        this.timeRemaining = Timer.POMODORO_LENGTH;
    }

    @action
    private tick = () => {
        if (this.isActive && this.timeRemaining === 0) {
            this.reset();
        }
        if (this.isActive) {
            this.timeRemaining -= 1;
        }
    }
}

export default Timer;
