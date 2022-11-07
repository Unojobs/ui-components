import { StorybookArgs } from './UnoNewPasswordModal.args';
import React, { useState } from 'react';
import { Wrapper } from '../../../Wrapper';

import { UnoNewPasswordModal } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UnoNewPasswordModal',
  component: UnoNewPasswordModal,
} as ComponentMeta<typeof UnoNewPasswordModal>;

const Template: ComponentStory<typeof UnoNewPasswordModal> = (args) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <Wrapper>
      <button onClick={() => setIsOpened(true)}>Forgot Password</button>
      <UnoNewPasswordModal
        {...args}
        isOpened={isOpened}
        setIsOpened={setIsOpened}
      />
    </Wrapper>
  );
};
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
