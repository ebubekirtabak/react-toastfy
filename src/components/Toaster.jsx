import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleToast from './toasts/SimpleToast';

class Toaster extends Component {

  constructor(props) {
    super(props);
    this.state = { numbers: [ 1, 2, 3, 4, 5 ] };
  }

  render () {
    return (
        <div className="toast-container tr">
            <div className="toast-container__content">
                {this.state.numbers.map((number) =>
                    <SimpleToast key={ number } />
                )}
            </div>
        </div>
    );
  }

  componentDidMount () {
    console.log('onload');
  }

  appendToast() {
    this.setState(state => ({
      numbers: [ ...state.numbers, 12 ]
    }));
  }

  componentWillUnmount() {

  }
}

const mapStateToProps = state => {
  return {
    toasts: state.toasts
  }
};

export default connect(
    mapStateToProps
)(Toaster)
