import React, { Component } from 'react';
import SimpleToast from './toasts/SimpleToast';
import { addSimpleToast } from '../store/actions';

export default class Toaster extends Component {

  constructor(props) {
    super(props);
    this.state = { numbers: [ 1, 2, 3, 4, 5 ] };
  }

  render () {
    return (
      <div className="toast-container tr">
        <div className="toast-container__content">
          {this.state.numbers.map((number) =>
            <SimpleToast key={number} />
          )}
        </div>
      </div>
    );
  }

  componentDidMount () {
    console.log('onload');
    addSimpleToast(' test message ');
  }

  appendToast() {
    this.setState(state => ({
      numbers: [...state.numbers, 12]
    }));
  }
}
