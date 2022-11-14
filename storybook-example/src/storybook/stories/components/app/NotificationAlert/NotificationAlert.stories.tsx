import { StorybookArgs } from './NotificationAlert.args';
import React from 'react';
import { Wrapper } from '../../Wrapper';

import { NotificationAlert } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'NotificationAlert',
  component: NotificationAlert,
} as ComponentMeta<typeof NotificationAlert>;

const Template: ComponentStory<typeof NotificationAlert> = (args) => {
  return (
    <Wrapper>
      <NotificationAlert {...args} />
    </Wrapper>
  );
};
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
