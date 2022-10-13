import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CardList, CardListProps } from 'components';
import { Wrapper } from '../../../Wrapper';
import { StorybookArgs } from './CardList.args';

export default {
  title: 'CardList',
  component: CardList,
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args: CardListProps) => {
  return (
    <Wrapper>
      <CardList {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
