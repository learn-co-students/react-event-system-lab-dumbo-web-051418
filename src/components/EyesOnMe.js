import React from 'react';

class EyesOnMe extends React.Component {

  handleBlur = (event) => {
    console.log('Hey! Eyes on me!')
  }
  handleFocus = (event) => {
    console.log('Good!')
  }

  render () {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur} >
        Eyes On Me, please!
      </button>
    )
  }
}
export default EyesOnMe;
