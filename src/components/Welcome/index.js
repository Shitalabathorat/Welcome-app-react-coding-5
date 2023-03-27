import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onLink = () => {
    const {isSubscribe} = this.state
    
    if (isSubscribe === true) {
      return (
        <button className="btn" type="button">
          Subscribed
        </button>
      )
    }
    return (
      <button className="btn" type="button">
        Subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you Happy Learning!</p>
        <button className="btn" onClick={this.onLink} type="button">
          Subscribe
        </button>
      </div>
    )
  }
}
export default Welcome
