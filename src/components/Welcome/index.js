import {Component} from 'react'
import './index.css'

class Welcome extends Component {
    state = {isSubscribe: true, content: "Subscribe"}

    onClickChange =(event) => {
        this.setState((prevState) => ({
            const gettingStatus = prevState.isSubscribe
            return( if (gettingStatus === true){
                prevState.isSubscribe = false
                prevState.content = "Subscribed"
            } else{
                prevState.isSubscribe = false
                prevState.content = "Subscribe"
            })
        })
    }

  render() {
      const {isSubscribe, content} = this.state
    return (
      <div className="main-bg-container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
       <button className="button-style" type="button">{content}</button>
      </div>
    )
  }
}
export default Welcome
