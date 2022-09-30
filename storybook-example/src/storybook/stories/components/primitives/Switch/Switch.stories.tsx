import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Switch.args';

import React from 'react';
import { Switch, HStack, Text } from 'components';

const SwitchTest = ({ ...args }) => {
  return (
    <Wrapper>
      <HStack alignItems="center" space={4}>
        <Text>Bluetooth</Text>
        <Switch {...args} size="sm" />
      </HStack>
    </Wrapper>
  );
};

export const SwitchComponent = SwitchTest.bind({});

export default {
  title: 'primitives/Switch',
  component: SwitchComponent,
  argTypes: StorybookArgs,
};
