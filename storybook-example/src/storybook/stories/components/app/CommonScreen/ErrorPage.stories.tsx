import { Wrapper } from '../../Wrapper';
import React from 'react';
import { ErrorPage } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'ErrorPage',
  component: ErrorPage,
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => (
  <Wrapper>
    <ErrorPage {...args}></ErrorPage>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = {};
