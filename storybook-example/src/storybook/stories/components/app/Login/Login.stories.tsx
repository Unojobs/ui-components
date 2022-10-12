import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Login } from 'components';
export default {
  title: 'Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => (
  <Login {...args}></Login>
);
export const Variants = Template.bind({});
