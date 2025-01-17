import React from 'react';
import { Text, VStack } from '../../../primitives';

export const PasswordTooltip = (props: { tooltip: string[] }) => {
  return (
    <VStack>
      <Text color={'secondary.300'}>Password must contain at least</Text>
      {props?.tooltip?.map((rule: string) => {
        return <Text color={'secondary.300'}>- {rule}</Text>;
      })}
    </VStack>
  );
};
