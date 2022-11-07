import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { TitleWithBtn, TitleWithBtnProps } from 'components';
import { StorybookArgs } from './TitleWithBtn.args';

export default {
  title: 'TitleWithButton',
  component: TitleWithBtn,
} as ComponentMeta<typeof TitleWithBtn>;

const Template: ComponentStory<typeof TitleWithBtn> = (
  args: TitleWithBtnProps
) => {
  return (
    <Wrapper>
      <TitleWithBtn {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
