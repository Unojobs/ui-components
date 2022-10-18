import { Wrapper } from '../../Wrapper';
import React from 'react';
import { NumberIcon } from '../../../../../../../src/components/app';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'NumberIcon',
  component: NumberIcon,
} as ComponentMeta<typeof NumberIcon>;

const Template: ComponentStory<typeof NumberIcon> = (args) => (
  <Wrapper>
    <NumberIcon {...args}></NumberIcon>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = {
  onClick: (event) => {
    console.log('Manually clicked', event);
  },
  children: 10,
};
