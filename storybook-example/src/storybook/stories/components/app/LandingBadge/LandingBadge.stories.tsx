import { Wrapper } from '../../Wrapper';
import React from 'react';
import { LandingBadge } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'LandingBadge',
  component: LandingBadge,
} as ComponentMeta<typeof LandingBadge>;

const Template: ComponentStory<typeof LandingBadge> = (args) => (
  <Wrapper>
    <LandingBadge {...args} />
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = {
  children: 'Our Services',
  isCaps: true,
};
