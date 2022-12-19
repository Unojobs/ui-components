import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChatCard } from 'components';
import React from 'react';
import { Wrapper } from '../../../Wrapper';
import { StorybookArgs } from './CandidateCard.args';

export default {
  title: 'CandidateCard',
  component: ChatCard,
} as ComponentMeta<typeof ChatCard>;

const Template: ComponentStory<typeof ChatCard> = (args) => {
  return (
    <Wrapper>
      <ChatCard {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
