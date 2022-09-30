import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Icon.args';

import React from 'react';
import { CheckIcon, HStack, Text } from 'components';

const IconTest = ({ ...args }) => {
  return (
    <Wrapper>
      <HStack space={2}>
        <CheckIcon {...args} mt="0.5" color="emerald.500" />
        <Text color="emerald.500" fontSize="md">
          Order Placed Successfully
        </Text>
      </HStack>
    </Wrapper>
  );
};

export const IconComponent = IconTest.bind({});

export default {
  title: 'primitives/Icon',
  component: IconComponent,
  argTypes: StorybookArgs,
};
