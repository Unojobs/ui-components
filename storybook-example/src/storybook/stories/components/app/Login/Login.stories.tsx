import React from 'react';
import { Login } from 'components';

const LoginTest = () => {
  return <Login />;
};
export const LoginComponent = LoginTest.bind({});
export default {
  title: 'Login',
  component: LoginComponent,
};
