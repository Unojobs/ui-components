import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { StorybookArgs } from './CandidateChatTopMenu.args';
import { CandidateChatTopMenu, CandidateChatTopMenuProps } from 'components';

export default {
  title: 'CandidateChatTopMenu',
  component: CandidateChatTopMenu,
} as ComponentMeta<typeof CandidateChatTopMenu>;

const Template: ComponentStory<typeof CandidateChatTopMenu> = (
  args: CandidateChatTopMenuProps
) => {
  return (
    <Wrapper>
      <CandidateChatTopMenu {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
