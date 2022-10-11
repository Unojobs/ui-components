import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './RadioButtonGroup.args';
import React from 'react';
import { RadioButtonGroup } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'RadioButtonGroup',
  component: RadioButtonGroup,
} as ComponentMeta<typeof RadioButtonGroup>;

const Template: ComponentStory<typeof RadioButtonGroup> = (args) => (
  <Wrapper>
    <RadioButtonGroup {...args}>Employer</RadioButtonGroup>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
