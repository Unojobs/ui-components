import { StorybookArgs } from './UnoForgetPasswordModal.args';
import React, { useState } from 'react';
import { Wrapper } from '../../../Wrapper';

import { UnoForgetPasswordModal } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UnoForgetPasswordModal',
  component: UnoForgetPasswordModal,
} as ComponentMeta<typeof UnoForgetPasswordModal>;

const Template: ComponentStory<typeof UnoForgetPasswordModal> = (args) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const handleOnClose = () => {
    setIsOpened(false);
  };
  return (
    <Wrapper>
      <button onClick={() => setIsOpened(true)}>Forgot Password</button>
      <UnoForgetPasswordModal
        {...args}
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        onClose={handleOnClose}
        showBackArrow={true}
      />
    </Wrapper>
  );
};
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
