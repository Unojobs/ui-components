import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './LeftSideScreen.args';
import React from 'react';
import { LeftSideScreen } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'LeftSideScreen',
  component: LeftSideScreen,
} as ComponentMeta<typeof LeftSideScreen>;

const Template: ComponentStory<typeof LeftSideScreen> = (args) => (
  <Wrapper>
    <LeftSideScreen />
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
