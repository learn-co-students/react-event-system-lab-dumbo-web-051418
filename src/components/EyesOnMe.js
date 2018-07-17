// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {

  focusEvent = () => console.log('Good!')

  render() {
    const blurEvent = () => console.log('Hey! Eyes on me!')

    return (
      <button onFocus={this.focusEvent} onBlur={blurEvent}>Button</button>
    )
  }
}
