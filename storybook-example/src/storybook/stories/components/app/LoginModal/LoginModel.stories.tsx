import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Login ,LoginModal} from 'components';
import { Wrapper } from '../../Wrapper';
export default {
  title: 'Login Modal',
  component: LoginModal,
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof Login> = (args) => (
  <Wrapper><LoginModal/></Wrapper>
);
export const Variants = Template.bind({});
