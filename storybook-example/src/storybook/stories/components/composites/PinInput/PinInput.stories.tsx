
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./PinInput.args";

  import React from 'react';
import { PinInput } from 'components';

export const Example = () => {
  return (
    <PinInput>
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
    </PinInput>
  );
};


  const PinInputTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const PinInput = PinInputTest.bind({});
  
  export default {
    title: "PinInput",
    component: PinInput,
    argTypes: StorybookArgs,
  };
  