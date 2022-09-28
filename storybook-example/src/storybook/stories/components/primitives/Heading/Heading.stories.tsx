
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Heading.args";

  import React from 'react';
import { Heading } from 'components';

export function Example() {
  return <Heading>I'm a Heading</Heading>;
}


  const HeadingTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const HeadingComponent = HeadingTest.bind({});
  
  export default {
    title: "Heading",
    component: HeadingComponent,
    argTypes: StorybookArgs,
  };
  