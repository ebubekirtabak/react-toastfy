import React, { Component } from 'react';
import { render } from 'react-dom';


export default class SimpleToast extends Component {

	render () {
		return (
      <div className="simple-toast rounded">
        <div className="simple-toast__title">
          Simple Toast Title
        </div>
        <div className="simple-toast__message">
          Lorem ipsum message text.
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
