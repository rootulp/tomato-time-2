import { observable, action } from 'mobx';

class AppState {
    @observable timer = 10;

    constructor() {
        setInterval(() => {
            this.timer -= 1;
        },          1000);
    }

    @action
    public resetTimer = () => {
        this.timer = 10;
    }
}

export default AppState;
