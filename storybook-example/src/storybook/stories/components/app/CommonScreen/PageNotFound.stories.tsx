import { Wrapper } from '../../Wrapper';
import React from 'react';
import { PageNotFound } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'PageNotFound',
  component: PageNotFound,
} as ComponentMeta<typeof PageNotFound>;

const Template: ComponentStory<typeof PageNotFound> = (args) => (
  <Wrapper>
    <PageNotFound {...args}></PageNotFound>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = {};
