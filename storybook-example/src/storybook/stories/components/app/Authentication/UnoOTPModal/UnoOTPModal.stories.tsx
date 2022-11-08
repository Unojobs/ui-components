import { StorybookArgs } from './UnoOTPModal.args';
import React, { useState } from 'react';
import { Wrapper } from '../../../Wrapper';

import { UnoOTPModal } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UnoOTPModal',
  component: UnoOTPModal,
} as ComponentMeta<typeof UnoOTPModal>;

const Template: ComponentStory<typeof UnoOTPModal> = (args) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <Wrapper>
      <button onClick={() => setIsOpened(true)}>OTP verify</button>
      <UnoOTPModal {...args} isOpened={isOpened} setIsOpened={setIsOpened} />
    </Wrapper>
  );
};
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
