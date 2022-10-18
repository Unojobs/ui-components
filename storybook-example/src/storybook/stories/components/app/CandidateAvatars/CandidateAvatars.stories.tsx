import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './CandidateAvatars.args';
import React from 'react';
import { CandidateAvatars } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'CandidateAvatars',
  component: CandidateAvatars,
} as ComponentMeta<typeof CandidateAvatars>;

const Template: ComponentStory<typeof CandidateAvatars> = (args) => (
  <Wrapper>
    <CandidateAvatars {...args}></CandidateAvatars>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
