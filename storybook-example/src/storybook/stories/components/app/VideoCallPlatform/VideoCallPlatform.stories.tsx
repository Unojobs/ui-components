import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VideoCallPlatform } from 'components';
import { Wrapper } from '../../Wrapper';
export default {
  title: 'VideoCallPlatform',
  component: VideoCallPlatform,
} as ComponentMeta<typeof VideoCallPlatform>;

const Template: ComponentStory<typeof VideoCallPlatform> = (args) => (
  <Wrapper>
    {' '}
    <VideoCallPlatform {...args}></VideoCallPlatform>
  </Wrapper>
);
export const Variants = Template.bind({});
