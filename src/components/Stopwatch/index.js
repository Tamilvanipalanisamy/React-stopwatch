import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    currentRunningSeconds: 0,
  }

  clearTimer = () => {
    clearInterval(this.intervalId)
  }

  startTimer = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        currentRunningSeconds: prevState.currentRunningSeconds + 1,
      }))
    }, 1000)
  }

  stopTimer = () => {
    this.clearTimer()
  }

  resetTimer = () => {
    this.setState({currentRunningSeconds: 0})
  }

  timerFormat = () => {
    const {currentRunningSeconds} = this.state
    const minutes = Math.floor(currentRunningSeconds / 60)
    const seconds = Math.floor(currentRunningSeconds % 60)
    const minutesInString = minutes > 9 ? minutes : `0${minutes}`
    const secondsInString = seconds > 9 ? seconds : `0${seconds}`
    return `${minutesInString}:${secondsInString}`
  }

  render() {
    const {currentRunningSeconds} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card-container">
          <div className="timer-text-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-icon"
            />
            <h1 className="timer-text">Timer</h1>
          </div>
          <h1 className="stop-watch">{this.timerFormat()}</h1>
          <div className="button-container">
            <button
              type="button"
              className="button start-button"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="button stop-button"
              onClick={this.stopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button reset-button"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
