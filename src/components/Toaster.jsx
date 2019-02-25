import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleToast from './toasts/SimpleToast';

class Toaster extends Component {

  constructor(props) {
    super(props);
    this.state = { toasts: [
        { id: 12, title: 'tesadsa' }
      ] };
  }

  render () {
    return (
        <div className="toast-container tr">
            <div className="toast-container__content">
                { this.props.toasts.map((toast) =>
                    <SimpleToast key={ toast.id } />
                )}
            </div>
        </div>
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log({ prevProps, prevState, snapshot });
  }

  componentDidMount () {
    console.log('onload');
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
