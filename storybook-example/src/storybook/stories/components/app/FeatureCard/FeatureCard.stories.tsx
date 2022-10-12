import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './FeatureCard.args';
import React from 'react';
import { FeatureCard } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'FeatureCard',
  component: FeatureCard,
} as ComponentMeta<typeof FeatureCard>;

const Template: ComponentStory<typeof FeatureCard> = (args) => (
  <Wrapper>
    <FeatureCard {...args}></FeatureCard>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
