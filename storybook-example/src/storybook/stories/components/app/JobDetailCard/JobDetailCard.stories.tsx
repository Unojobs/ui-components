import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './JobDetailCard.args';
import React from 'react';
import { JobDetailCard } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
  title: 'JobDetailCard',
  component: JobDetailCard,
} as ComponentMeta<typeof JobDetailCard>;
const Template: ComponentStory<typeof JobDetailCard> = (args) => (
  <Wrapper>
    <JobDetailCard {...args}></JobDetailCard>
  </Wrapper>
);
export const Variants = Template.bind({});
Variants.args = StorybookArgs;
