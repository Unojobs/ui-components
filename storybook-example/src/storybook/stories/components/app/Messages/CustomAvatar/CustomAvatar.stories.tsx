import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { CustomAvatar, CustomAvatarProps } from 'components';
import { StorybookArgs } from './CustomAvatar.args';

export default {
  title: 'CustomAvatar',
  component: CustomAvatar,
} as ComponentMeta<typeof CustomAvatar>;

const Template: ComponentStory<typeof CustomAvatar> = (
  args: CustomAvatarProps
) => {
  return (
    <Wrapper>
      <CustomAvatar {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = StorybookArgs;
