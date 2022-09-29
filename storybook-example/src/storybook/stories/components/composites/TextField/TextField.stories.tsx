
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./TextField.args";

  import React from 'react';
import { TextField } from 'components';

 const Example = () => {
  return <TextField w="90%" placeholder="Default TextField" />;
};


  const TextFieldTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const TextFieldComponent = TextFieldTest.bind({});
  
  export default {
    title: "composites/TextField",
    component: TextFieldComponent,
    argTypes: StorybookArgs,
  };
  