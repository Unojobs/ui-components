
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Kbd.args";

  import React from 'react';
import { VStack, HStack, Kbd, Text } from 'components';

export const Example = () => {
  return (
    <VStack space={8}>
      <HStack>
        <Kbd>shift</Kbd>
        <Text> + </Text>
        <Kbd>C</Kbd>
      </HStack>
      <HStack>
        <Kbd>shift</Kbd>
        <Text> then </Text>
        <Kbd>H</Kbd>
      </HStack>
      <HStack>
        <Kbd>alt</Kbd>
        <Text> or </Text>
        <Kbd>option</Kbd>
      </HStack>
    </VStack>
  );
};


  const KbdTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const KbdComponent = KbdTest.bind({});
  
  export default {
    title: "composites/Kbd",
    component: KbdComponent,
    argTypes: StorybookArgs,
  };
  