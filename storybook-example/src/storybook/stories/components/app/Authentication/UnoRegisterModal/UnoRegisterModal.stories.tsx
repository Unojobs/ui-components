import { StorybookArgs } from './UnoRegisterModal.args';
import React, { useState } from 'react';
import { Wrapper } from '../../../Wrapper';

import { UnoRegisterModal } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UnoRegisterModal',
  component: UnoRegisterModal,
} as ComponentMeta<typeof UnoRegisterModal>;

const Template: ComponentStory<typeof UnoRegisterModal> = (args) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <Wrapper>
      <button onClick={() => setIsOpened(true)}>Register</button>
      <UnoRegisterModal
        {...args}
        isOpened={isOpened}
        setIsOpened={setIsOpened}
      />
    </Wrapper>
  );
};
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
