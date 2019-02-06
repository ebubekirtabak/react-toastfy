import React, { Component } from 'react';
import { render } from 'react-dom';


export default class ToastCreator extends Component {

  render () {
   return (
     <div className="toast-creator">
       <h3> Create New Toast </h3>
       <div className="toast-creator__content">
         <form>
           <label>
             Name:
           </label>
           <input type="text" name="name" />

           <input type="submit" value="Submit" />
         </form>
       </div>
     </div>
   );
 }
}
