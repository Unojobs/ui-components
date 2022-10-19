import { Wrapper } from '../../Wrapper';
import React from 'react';
import { FaqCard } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'FaqCard',
  component: FaqCard,
} as ComponentMeta<typeof FaqCard>;

const Template: ComponentStory<typeof FaqCard> = (args) => (
  <Wrapper>
    <FaqCard {...args}></FaqCard>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = {
  title: 'How do I sign up ?',
  description: 'You can sign up by clicking the sign up button',
};
