
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./NumberInput.args";

  import React from 'react';
import {
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from 'components';

export const Example = () => {
  return (
    <Stack w="90%">
      <NumberInput>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Stack>
  );
};


  const NumberInputTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const NumberInputComponent = NumberInputTest.bind({});
  
  export default {
    title: "NumberInput",
    component: NumberInputComponent,
    argTypes: StorybookArgs,
  };
  