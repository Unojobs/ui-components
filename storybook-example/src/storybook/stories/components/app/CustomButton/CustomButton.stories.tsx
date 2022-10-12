import { StorybookArgs } from './CustomButton.args';
import React from 'react';
import { CustomButton } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'CustomButton',
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => (
  <CustomButton {...args}>Login</CustomButton>
);
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
