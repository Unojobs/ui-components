
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./TextArea.args";

  import React from 'react';
import { TextArea, Box } from 'components';

export const Example = () => {
  return (
    <Box alignItems="center" w="100%">
      <TextArea h={20} placeholder="Text Area Placeholder" w="75%" maxW="300" />
    </Box>
  );
};


  const TextAreaTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const TextAreaComponent = TextAreaTest.bind({});
  
  export default {
    title: "primitives/TextArea",
    component: TextAreaComponent,
    argTypes: StorybookArgs,
  };
  