import Timer from './Timer';

jest.useFakeTimers();

it('starts with 25 minutes remaining', () => {
    const timer = new Timer();

    expect(timer.timeRemaining).toEqual(25 * 60);
});

it('decrements timeRemaining after start', () => {
    const timer = new Timer();
    timer.start();
    jest.advanceTimersByTime(1000);

    expect(timer.timeRemaining).toBeLessThan(25 * 60);
});
