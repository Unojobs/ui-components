import { StorybookArgs } from './UnoResetPassword.args';
import React from 'react';
import { Wrapper } from '../../../Wrapper';

import { UnoResetPassword } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UnoResetPassword',
  component: UnoResetPassword,
} as ComponentMeta<typeof UnoResetPassword>;

const Template: ComponentStory<typeof UnoResetPassword> = (args) => (
  <Wrapper>
    <UnoResetPassword {...args} />
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
