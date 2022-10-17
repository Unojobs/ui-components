import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { MessageSidebar, MessageSidebarProps } from 'components';
import { StorybookArgs } from './MessageSidebar.args';

export default {
  title: 'MessageSidebar',
  component: MessageSidebar,
} as ComponentMeta<typeof MessageSidebar>;

const Template: ComponentStory<typeof MessageSidebar> = (
  args: MessageSidebarProps
) => {
  return (
    <Wrapper>
      <MessageSidebar {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
