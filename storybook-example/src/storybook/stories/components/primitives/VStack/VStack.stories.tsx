import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './VStack.args';

import React from 'react';
import { VStack, Center } from 'components';

const VStackTest = ({ ...args }) => {
  return (
    <Wrapper>
      <VStack space={4} alignItems="center">
        <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3} />
        <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
        <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
      </VStack>
    </Wrapper>
  );
};

export const VStackComponent = VStackTest.bind({});

export default {
  title: 'primitives/VStack',
  component: VStackComponent,
  argTypes: StorybookArgs,
};
