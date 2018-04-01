import Timer from './Timer';

it('starts with 25 minutes remaining', () => {
    const timer = new Timer();
    expect(timer.timeRemaining).toEqual(25 * 60);
});
