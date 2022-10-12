import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CandidateCard, CandidateCardProps } from 'components';
import { StorybookArgs } from './CandidateCard.args';
import { Wrapper } from '../../../Wrapper';

export default {
  title: 'CandidateCard',
  component: CandidateCard,
} as ComponentMeta<typeof CandidateCard>;

const Template: ComponentStory<typeof CandidateCard> = (
  args: CandidateCardProps
) => {
  return (
    <Wrapper>
      <CandidateCard {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
