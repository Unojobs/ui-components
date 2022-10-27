import { StorybookArgs } from './UnoAuthModal.args';
import React from 'react';
import { Wrapper } from '../../../Wrapper';

import { UnoAuthModal } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UnoAuthModal',
  component: UnoAuthModal,
} as ComponentMeta<typeof UnoAuthModal>;

const Template: ComponentStory<typeof UnoAuthModal> = (args) => (
  <Wrapper>
    <UnoAuthModal />
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
