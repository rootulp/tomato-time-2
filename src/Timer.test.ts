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

it('timeRemaining does not go below zero', () => {
    const timer = new Timer();
    timer.start();
    jest.advanceTimersByTime(26 * 60 * 1000);

    expect(timer.timeRemaining).toBeGreaterThanOrEqual(0);
});

it('resets after pomodoro complete', () => {
    const timer = new Timer();
    timer.start();
    jest.advanceTimersByTime(25 * 60 * 1000);

    expect(timer.timeRemaining).toEqual(0);
    jest.advanceTimersByTime(1000);

    expect(timer.timeRemaining).toEqual(25 * 60);
    expect(timer.isActive).toEqual(false);
});
