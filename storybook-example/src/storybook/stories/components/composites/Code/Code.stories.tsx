
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Code.args";

  import React from 'react';
import { Code } from 'components';
 const Example = () => {
  return <Code>Hello World!</Code>;
};


  const CodeTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const CodeComponent = CodeTest.bind({});
  
  export default {
    title: "composites/Code",
    component: CodeComponent,
    argTypes: StorybookArgs,
  };
  