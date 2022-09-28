
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Column.args";

  import React from 'react';
import { Column, Box } from 'components';

export const Example = () => {
  return (
    <Column>
      <Box h="100px" w="100px" bg="green.500" />
      <Box h="100px" w="100px" bg="blue.300" />
      <Box h="100px" w="100px" bg="tomato" />
    </Column>
  );
};


  const ColumnTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const ColumnComponent = ColumnTest.bind({});
  
  export default {
    title: "primitives/Column",
    component: ColumnComponent,
    argTypes: StorybookArgs,
  };
  