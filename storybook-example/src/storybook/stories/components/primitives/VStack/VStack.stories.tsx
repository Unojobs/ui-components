
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./VStack.args";

  import React from 'react';
import { VStack, Center } from 'components';

export function Example() {
  return (
    <VStack space={4} alignItems="center">
      <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
    </VStack>
  );
}


  const VStackTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const VStackComponent = VStackTest.bind({});
  
  export default {
    title: "VStack",
    component: VStackComponent,
    argTypes: StorybookArgs,
  };
  