import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { StorybookArgs } from './TopMenu.args';
import { TopMenu, TopMenuProps } from 'components';

export default {
  title: 'ChatTopMenu',
  component: TopMenu,
} as ComponentMeta<typeof TopMenu>;

const Template: ComponentStory<typeof TopMenu> = (args: TopMenuProps) => {
  return (
    <Wrapper>
      <TopMenu {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
