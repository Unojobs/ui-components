
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Switch.args";

  import React from 'react';
import { Switch, HStack, Text } from 'components';

export const Example = () => {
  return (
    <HStack alignItems="center" space={4}>
      <Text>Bluetooth</Text>
      <Switch size="sm" />
    </HStack>
  );
};


  const SwitchTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const SwitchComponent = SwitchTest.bind({});
  
  export default {
    title: "Switch",
    component: SwitchComponent,
    argTypes: StorybookArgs,
  };
  