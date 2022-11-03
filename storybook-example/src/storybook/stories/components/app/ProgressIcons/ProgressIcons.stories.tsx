import { Wrapper } from '../../Wrapper';
import React from 'react';
import { ProgressIcon } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'ProgressIcon',
  component: ProgressIcon,
} as ComponentMeta<typeof ProgressIcon>;

const Template: ComponentStory<typeof ProgressIcon> = (args) => (
  <Wrapper>
    <ProgressIcon {...args}>Login</ProgressIcon>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = { status: 'on' };
