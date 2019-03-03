const EVENTS = [
  'click',
  'keypress',
  'keydown',
  'load',
  'mousemove',
  'scroll',
  'touchmove',
  'touchstart',
]

/**
 * @class UserIdleTracker
 * @description A class to check the status of the user and to run a callback
 * when its considered Idle.
 * @param callback - a function to run when the user is Idle
 * @param idleTime - time in milliseconds defined to be considered idle
 */
export default class UserIdleTracker {
  constructor(callback, idleTime) {
    this.callback = callback
    this.idleTime = idleTime
    this.isActive = true

    this.createListeners()
    this.init()
  }

  init = () => {
    this.isActive = true
    clearTimeout(this.timer)
    this.timer = window.setTimeout(this.onIdle, this.idleTime)
  }

  destroy = () => {
    clearTimeout(this.timer)
    this.removeListeners()
  }

  onIdle = () => {
    if (!this.isActive) return
    this.isActive = false
    this.callback()
    this.destroy()
  }

  createListeners = () => {
    EVENTS.forEach(eventName => {
      document.addEventListener(eventName, this.init, false)
    })
  }

  removeListeners = () => {
    EVENTS.forEach(eventName => {
      document.removeEventListener(eventName, this.init, false)
    })
  }
}
