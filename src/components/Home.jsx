import React from 'react';
import ToastCreator from './ToastCreator';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const Home = () => (
  <div>
    <h1>React Toastfy! </h1>
    <ToastCreator />
  </div>
)


export default Home;
