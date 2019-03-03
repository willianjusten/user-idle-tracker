import UserIdleTracker from './index'

describe('UserIdleTracker', () => {
  let callback
  let tracker
  const idleTime = 1000

  beforeEach(() => {
    jest.useFakeTimers()
    callback = jest.fn()
    tracker = new UserIdleTracker(callback, idleTime)
  })

  it('should call a callback after the idleTime is passed', () => {
    jest.advanceTimersByTime(idleTime)
    expect(callback).toHaveBeenCalled()
  })

  it('should not call a callback if an event is triggered before the idleTime', () => {
    jest.advanceTimersByTime(500)
    document.dispatchEvent(new Event('scroll'))
    jest.advanceTimersByTime(500)

    expect(callback).not.toHaveBeenCalled()
  })

  it('should call callback only once', () => {
    jest.advanceTimersByTime(idleTime)
    jest.advanceTimersByTime(idleTime)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should ignore idle time when destroyed', () => {
    tracker.destroy()
    jest.advanceTimersByTime(idleTime)
    expect(callback).not.toHaveBeenCalled()
  })

  it('should allow to restart the timer', () => {
    jest.advanceTimersByTime(500)
    tracker.init()
    jest.advanceTimersByTime(500)
    expect(callback).not.toHaveBeenCalled()
    jest.advanceTimersByTime(500)
    expect(callback).toHaveBeenCalled()
  })
})
