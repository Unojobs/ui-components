import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { InputMessageField, InputMessageFieldProps } from 'components';
import { StorybookArgs } from './InputMessageField.args';

export default {
  title: 'InputMessageField',
  component: InputMessageField,
} as ComponentMeta<typeof InputMessageField>;

const Template: ComponentStory<typeof InputMessageField> = (
  args: InputMessageFieldProps
) => {
  return (
    <Wrapper>
      <InputMessageField {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
