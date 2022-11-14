import { StorybookArgs } from './NotificationAlert.args';
import React, { useState } from 'react';
import { Wrapper } from '../../Wrapper';

import { NotificationAlert } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'NotificationAlert',
  component: NotificationAlert,
} as ComponentMeta<typeof NotificationAlert>;

const Template: ComponentStory<typeof NotificationAlert> = (args) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <Wrapper>
      <NotificationAlert {...args} show={isShow} setShow={setIsShow} />

      <button
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        Show Notification
      </button>
    </Wrapper>
  );
};
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
