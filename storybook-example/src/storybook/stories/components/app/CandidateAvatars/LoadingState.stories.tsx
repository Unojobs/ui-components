import { Wrapper } from '../../Wrapper';
import React from 'react';
import { LoadingState } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'LoadingState',
  component: LoadingState,
} as ComponentMeta<typeof LoadingState>;

const Template: ComponentStory<typeof LoadingState> = (args) => (
  <Wrapper>
    <LoadingState></LoadingState>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = {};
