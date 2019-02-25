import React, { Component } from 'react';

export default class ToastCreator extends Component {

render () {
  return (
      <div className="toast-creator">
          <h3> Create New Toast </h3>
          <div className="toast-creator__content">
              <form>
                  <div className="input-content">
                      <label>
                        Title:
                      </label>
                      <input type="text" name="Title" />
                  </div>
                  <div className="input-content">
                      <label>
                        Message:
                      </label>
                      <input type="text" name="Message" />
                  </div>
                  <input type="submit" value="Submit" />
              </form>
          </div>
      </div>
    );
  }
}
