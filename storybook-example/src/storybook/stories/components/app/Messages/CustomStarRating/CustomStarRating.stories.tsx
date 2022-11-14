import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { CustomStarRating, CustomStarRatingProps } from 'components';
import { StorybookArgs } from './CustomStarRating.args';

export default {
  title: 'CustomStarRating',
  component: CustomStarRating,
} as ComponentMeta<typeof CustomStarRating>;

const Template: ComponentStory<typeof CustomStarRating> = (
  args: CustomStarRatingProps
) => {
  return (
    <Wrapper>
      <CustomStarRating {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
