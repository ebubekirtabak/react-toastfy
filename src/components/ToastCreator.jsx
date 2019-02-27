import React, { Component } from 'react';
import { addSimpleToast } from '../store/actions';
import { connect } from 'react-redux';

class ToastCreator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '' ,
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render () {
        return (
            <div className="toast-creator">
                <h3> Create New Toast </h3>
                <div className="toast-creator__content">
                    <form onSubmit={ this.handleSubmit }>
                        <div className="input-content">
                            <label>
                        Title:
                            </label>
                            <input type="text" name="title" value={ this.state.title } onChange={ this.handleChange }  />
                        </div>
                        <div className="input-content">
                            <label>
                        Message:
                            </label>
                            <input type="text" name="message" value={ this.state.message } onChange={ this.handleChange } />
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }

    handleChange (evt) {
        this.setState({ [ evt.target.name ]: evt.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const id = Math.floor(Math.random() * 24234234);
        this.props.addSimpleToast({
            id: id,
            message: this.state.message,
            title: this.state.title,
            class: 'rounded'
        });
    }
}

const mapDispatchToProps = {
    addSimpleToast
};

export default connect( null, mapDispatchToProps )( ToastCreator );
