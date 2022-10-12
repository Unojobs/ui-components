import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './CustomNBButton.args';
import React from 'react';
import { CustomNBButton } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'CustomNBButton',
  component: CustomNBButton,
} as ComponentMeta<typeof CustomNBButton>;

const Template: ComponentStory<typeof CustomNBButton> = (args) => (
  <Wrapper>
    <CustomNBButton {...args}>Login</CustomNBButton>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
