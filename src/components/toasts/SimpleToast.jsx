import React, { Component } from 'react';

export default class SimpleToast extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="simple-toast rounded">
                <div className="simple-toast__title">
                    { this.props.toast.title }
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
