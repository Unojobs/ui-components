import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { CandidateCard, CandidateCardProps } from 'components';
import { StorybookArgs } from './CandidateCard.args';

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
