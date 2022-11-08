import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TopMatches } from 'components';
import { Wrapper } from '../../Wrapper';
export default {
  title: 'TopMatches',
  component: TopMatches,
} as ComponentMeta<typeof TopMatches>;

const Template: ComponentStory<typeof TopMatches> = (args) => (
  <Wrapper>
    {' '}
    <TopMatches {...args}></TopMatches>
  </Wrapper>
);
export const Variants = Template.bind({});
