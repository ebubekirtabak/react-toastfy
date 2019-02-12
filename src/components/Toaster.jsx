import React, { Component } from 'react';
import { render } from 'react-dom';


export default class Toaster extends Component {

  render () {
    return (
      <div className="toast-container tr">

      </div>
    );
  }

  componentDidMount () {
    console.log('onload');
  }
}
