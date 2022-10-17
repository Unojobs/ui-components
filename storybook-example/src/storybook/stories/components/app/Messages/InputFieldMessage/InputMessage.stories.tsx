import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { StorybookArgs } from './InputMessage.args';
import { InputMessage, InputMessageProps } from 'components';

export default {
  title: 'InputFieldMessage',
  component: InputMessage,
} as ComponentMeta<typeof InputMessage>;

const Template: ComponentStory<typeof InputMessage> = (
  args: InputMessageProps
) => {
  return (
    <Wrapper>
      <InputMessage {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
