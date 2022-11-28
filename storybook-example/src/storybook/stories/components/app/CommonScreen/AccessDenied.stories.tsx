import { Wrapper } from '../../Wrapper';
import React from 'react';
import { AccessDenied } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'AccessDenied',
  component: AccessDenied,
} as ComponentMeta<typeof AccessDenied>;

const Template: ComponentStory<typeof AccessDenied> = (args) => (
  <Wrapper>
    <AccessDenied {...args}></AccessDenied>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = {};
