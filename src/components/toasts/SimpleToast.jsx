import React, { Component } from 'react';

export default class SimpleToast extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className={ `simple-toast ${ this.props.toast.class || {} }` }>
                <div className="simple-toast__title">
                    { this.props.toast.title }
                </div>
                <div className="simple-toast__message">
                    { this.props.toast.message || {} }
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
