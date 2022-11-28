import { Spinner } from 'native-base';
import React from 'react';
import { Center } from 'src/components/composites';
import { Heading, HStack } from 'src/components/primitives';

export const LoadingState = () => {
  return (
    <Center height="100%" justifyContent="center" alignItems="center">
      <HStack space={2}>
        <Spinner accessibilityLabel="Loading posts" color="primary.500" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
      </HStack>
    </Center>
  );
};
