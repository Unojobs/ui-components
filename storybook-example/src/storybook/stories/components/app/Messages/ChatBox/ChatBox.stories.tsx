import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { StorybookArgs } from './ChatBox.args';
import { ChatBox, ChatBoxProps } from 'components';

export default {
  title: 'ChatBox',
  component: ChatBox,
} as ComponentMeta<typeof ChatBox>;

const Template: ComponentStory<typeof ChatBox> = (args: ChatBoxProps) => {
  return (
    <Wrapper>
      <ChatBox {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
