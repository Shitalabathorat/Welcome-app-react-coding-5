import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {count: 'Subscribed'}

  onClick = () => {
    this.setState(prevState => {
      console.log(`Previous State value ${prevState.count}`)
      return {count: `${prevState.count}`}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button className="btn" type="button" onClick={this.onClick}>
          {count}
        </button>
        <button className="btn" type="button">
          Subscribed
        </button>
      </div>
    )
  }
}
export default Welcome
