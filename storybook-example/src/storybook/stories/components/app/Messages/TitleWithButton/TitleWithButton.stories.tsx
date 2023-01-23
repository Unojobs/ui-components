import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TitleWithButton } from 'components';
import React from 'react';
import { Wrapper } from '../../../Wrapper';
import { StorybookArgs } from './TitleWithButton.args';

export default {
  title: 'TitleWithButton',
  component: TitleWithButton,
} as ComponentMeta<typeof TitleWithButton>;

const Template: ComponentStory<typeof TitleWithButton> = (args) => {
  return (
    <Wrapper>
      <TitleWithButton {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
