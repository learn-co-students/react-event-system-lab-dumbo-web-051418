// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

  handleEvent = () => (console.log('Entering password...'))

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleEvent}/>  
      </div>
    )
  }
}

export default Keypad
