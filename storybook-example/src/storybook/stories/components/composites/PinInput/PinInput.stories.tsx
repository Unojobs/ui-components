
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./PinInput.args";

  import React from 'react';
import { PinInput } from 'components';

 const Example = () => {
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
  
  export const PinInputComponent = PinInputTest.bind({});
  
  export default {
    title: "composites/PinInput",
    component: PinInputComponent,
    argTypes: StorybookArgs,
  };
  