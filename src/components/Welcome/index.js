import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true, subContent: 'Subscribe'}

  OnClickButton = () => {
    this.setState(prevState =>
      prevState.isSubscribed
        ? {isSubscribed: false, subContent: 'Subscribed'}
        : {isSubscribed: true, subContent: 'Subscribe'},
    )
  }

  render() {
    const {subContent} = this.state

    return (
      <div className="main-bg-container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button
          onClick={this.OnClickButton}
          type="button"
          className="button-style"
        >
          {subContent}
        </button>
      </div>
    )
  }
}
export default Welcome
