import { StorybookArgs } from './UnoPopUpModal.args';
import React, { useState } from 'react';
import { Wrapper } from '../../../Wrapper';

import { UnoPopUpModal } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UnoPopUpModal',
  component: UnoPopUpModal,
} as ComponentMeta<typeof UnoPopUpModal>;

const Template: ComponentStory<typeof UnoPopUpModal> = (args) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <Wrapper>
      <button onClick={() => setIsOpened(true)}>PopUp Modal</button>
      <UnoPopUpModal {...args} isOpened={isOpened} setIsOpened={setIsOpened} />
    </Wrapper>
  );
};
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
