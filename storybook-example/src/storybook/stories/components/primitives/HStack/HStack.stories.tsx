import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './HStack.args';

import React from 'react';
import { HStack, Center } from 'components';

const HStackTest = ({ ...args }) => {
  return (
    <Wrapper>
      <HStack space={10} justifyContent="center">
        <Center h="80" w="20" bg="primary.300" rounded="md" shadow={3} />
        <Center h="80" w="20" bg="primary.500" rounded="md" shadow={3} />
        <Center h="80" w="20" bg="primary.700" rounded="md" shadow={3} />
      </HStack>
    </Wrapper>
  );
};

export const HStackComponent = HStackTest.bind({});

export default {
  title: 'primitives/HStack',
  component: HStackComponent,
  argTypes: StorybookArgs,
};
