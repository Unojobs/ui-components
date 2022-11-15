import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { CustomAvatarGroup, CustomAvatarGroupProps } from 'components';
import { StorybookArgs } from './CustomAvatarGroup.args';

export default {
  title: 'CustomAvatarGroup',
  component: CustomAvatarGroup,
} as ComponentMeta<typeof CustomAvatarGroup>;

const Template: ComponentStory<typeof CustomAvatarGroup> = (
  args: CustomAvatarGroupProps
) => {
  return (
    <Wrapper>
      <CustomAvatarGroup {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
