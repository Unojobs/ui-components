
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./TextField.args";

  import React from 'react';
import { TextField } from 'components';

export const Example = () => {
  return <TextField w="90%" placeholder="Default TextField" />;
};


  const TextFieldTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const TextField = TextFieldTest.bind({});
  
  export default {
    title: "TextField",
    component: TextField,
    argTypes: StorybookArgs,
  };
  