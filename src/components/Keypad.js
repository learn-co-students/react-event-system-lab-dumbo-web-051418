// Code Keypad Component Here
import React, {Component} from 'react'

class KeyPad extends Component {

  keyUpHandler = () => {
    console.log("Entering password...")
  }

  render() {
    return (
      <input type="password" onKeyUp={this.keyUpHandler}></input>
    )
  }
}

export default KeyPad
