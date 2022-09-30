import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Skeleton.args';

import React from 'react';
import { Skeleton, VStack, Center } from 'components';

const SkeletonTest = ({ ...args }) => {
  return (
    <Wrapper>
      <VStack
        w="90%"
        maxW="400"
        borderWidth="1"
        space={8}
        overflow="hidden"
        rounded="md"
        _dark={{ borderColor: 'coolGray.500' }}
        _light={{ borderColor: 'coolGray.200' }}
      >
        <Skeleton h="40" />
        <Skeleton.Text px="4" />
        <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
      </VStack>
    </Wrapper>
  );
};

export const SkeletonComponent = SkeletonTest.bind({});

export default {
  title: 'composites/Skeleton',
  component: SkeletonComponent,
  argTypes: StorybookArgs,
};
