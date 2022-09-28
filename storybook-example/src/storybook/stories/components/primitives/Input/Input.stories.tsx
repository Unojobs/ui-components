
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Input.args";

  import React from 'react';
import { Input, Box } from 'components';

export const Example = () => {
  return (
    <Box alignItems="center">
      <Input mx="3" placeholder="Input" w="100%" />
    </Box>
  );
};


  const InputTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const InputComponent = InputTest.bind({});
  
  export default {
    title: "Input",
    component: InputComponent,
    argTypes: StorybookArgs,
  };
  