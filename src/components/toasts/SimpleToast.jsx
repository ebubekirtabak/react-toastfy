import React, { Component } from 'react';
import { render } from 'react-dom';


export default class SimpleToast extends Component {

  render () {
    return (
      <div className="simple-toast">
        <div className="simple-toast__title">
        </div>
        <div className="simple-toast__message">
        </div>
        <div className="simple-toast__icon">
        </div>
      </div>
    );
  }

  componentDidMount () {
    console.log('onload');
  }
}
