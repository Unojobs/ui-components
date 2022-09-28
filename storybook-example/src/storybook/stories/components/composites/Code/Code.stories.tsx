
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Code.args";

  import React from 'react';
import { Code } from 'components';
export const Example = () => {
  return <Code>Hello World!</Code>;
};


  const CodeTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const Code = CodeTest.bind({});
  
  export default {
    title: "Code",
    component: Code,
    argTypes: StorybookArgs,
  };
  