import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { StorybookArgs } from './ChatTopMenu.args';
import { ChatTopMenu, ChatTopMenuProps } from 'components';

export default {
  title: 'ChatTopMenu',
  component: ChatTopMenu,
} as ComponentMeta<typeof ChatTopMenu>;

const Template: ComponentStory<typeof ChatTopMenu> = (
  args: ChatTopMenuProps
) => {
  return (
    <Wrapper>
      <ChatTopMenu {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
