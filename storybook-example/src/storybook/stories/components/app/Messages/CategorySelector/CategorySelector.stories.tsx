import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { CategorySelector, CategorySelectorProps } from 'components';
import { StorybookArgs } from './CategorySelector.args';

export default {
  title: 'CategorySelector',
  component: CategorySelector,
} as ComponentMeta<typeof CategorySelector>;

export const Template: ComponentStory<typeof CategorySelector> = (
  args: CategorySelectorProps
) => {
  return (
    <Wrapper>
      <CategorySelector {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
