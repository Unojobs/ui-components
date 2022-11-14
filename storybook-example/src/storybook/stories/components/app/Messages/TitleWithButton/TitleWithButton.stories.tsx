import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { TitleWithButton, TitleWithButtonProps } from 'components';
import { StorybookArgs } from './TitleWithButton.args';

export default {
  title: 'TitleWithButton',
  component: TitleWithButton,
} as ComponentMeta<typeof TitleWithButton>;

const Template: ComponentStory<typeof TitleWithButton> = (
  args: TitleWithButtonProps
) => {
  return (
    <Wrapper>
      <TitleWithButton {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
