
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./HStack.args";

  import React from 'react';
import { HStack, Center } from 'components';

export function Example() {
  return (
    <HStack space={10} justifyContent="center">
      <Center h="80" w="20" bg="primary.300" rounded="md" shadow={3} />
      <Center h="80" w="20" bg="primary.500" rounded="md" shadow={3} />
      <Center h="80" w="20" bg="primary.700" rounded="md" shadow={3} />
    </HStack>
  );
}


  const HStackTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const HStackComponent = HStackTest.bind({});
  
  export default {
    title: "HStack",
    component: HStackComponent,
    argTypes: StorybookArgs,
  };
  