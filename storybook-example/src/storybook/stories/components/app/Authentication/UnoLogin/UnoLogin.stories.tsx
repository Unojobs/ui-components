import { StorybookArgs } from './UnoLogin.args';
import React from 'react';
import { Wrapper } from '../../../Wrapper';

import { UnoLogin } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UnoLogin',
  component: UnoLogin,
} as ComponentMeta<typeof UnoLogin>;

const Template: ComponentStory<typeof UnoLogin> = (args) => (
  <Wrapper>
    <UnoLogin {...args} />
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
