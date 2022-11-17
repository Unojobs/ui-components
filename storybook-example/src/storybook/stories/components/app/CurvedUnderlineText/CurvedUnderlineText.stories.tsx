import { Wrapper } from '../../Wrapper';
import React from 'react';
import { CurvedUnderlineText, Heading } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'CurvedUnderlineText',
  component: CurvedUnderlineText,
} as ComponentMeta<typeof CurvedUnderlineText>;

const Template: ComponentStory<typeof CurvedUnderlineText> = (args) => (
  <Wrapper>
    <Heading color="textColors.primary" fontSize="7xl" lineHeight="md">
      <CurvedUnderlineText {...args}></CurvedUnderlineText>
    </Heading>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = {
  children: 'Modren',
};
