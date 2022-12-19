import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChatBubbleContainer } from 'components';
import React from 'react';
import { Wrapper } from '../../../Wrapper';
import { StorybookArgs } from './ChatBubbleContainer';

export default {
  title: 'ChatBubbleContainer',
  component: ChatBubbleContainer,
} as ComponentMeta<typeof ChatBubbleContainer>;

const Template: ComponentStory<typeof ChatBubbleContainer> = (args) => {
  return (
    <Wrapper>
      <ChatBubbleContainer {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
