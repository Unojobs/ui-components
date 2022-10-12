import { StorybookArgs } from './SelectableRadioButton.args';
import React from 'react';
import { SelectableRadioButton } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'SelectableRadioButton',
  component: SelectableRadioButton,
} as ComponentMeta<typeof SelectableRadioButton>;

const Template: ComponentStory<typeof SelectableRadioButton> = (args) => (
  <SelectableRadioButton {...args} />
);
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
