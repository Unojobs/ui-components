import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Login } from 'components';
import { Wrapper } from '../../Wrapper';
export default {
  title: 'Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => (
 <Wrapper> <Login {...args}></Login></Wrapper>
);
export const Variants = Template.bind({});
