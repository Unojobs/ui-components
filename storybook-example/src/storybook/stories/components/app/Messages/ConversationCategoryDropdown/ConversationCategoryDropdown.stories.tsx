import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import {
  ConversationCategoryDropdown,
  ConversationCategoryDropdownProps,
} from 'components';
import { StorybookArgs } from './ConversationCategoryDropdown.args';

export default {
  title: 'ConversationCategoryDropdown',
  component: ConversationCategoryDropdown,
} as ComponentMeta<typeof ConversationCategoryDropdown>;

export const Template: ComponentStory<typeof ConversationCategoryDropdown> = (
  args: ConversationCategoryDropdownProps
) => {
  return (
    <Wrapper>
      <ConversationCategoryDropdown {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
