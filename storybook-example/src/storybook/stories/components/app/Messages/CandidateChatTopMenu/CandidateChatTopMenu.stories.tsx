import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { StorybookArgs } from './CandidateChatTopMenu.args';
import { ChatTopMenu } from 'components';

export default {
  title: 'CandidateChatTopMenu',
  component: ChatTopMenu,
} as ComponentMeta<typeof ChatTopMenu>;

const Template: ComponentStory<typeof ChatTopMenu> = (args) => {
  return (
    <Wrapper>
      <ChatTopMenu {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
