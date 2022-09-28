
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./View.args";

  import React from 'react';
import { Box, Heading, Text } from 'components';

export const Example = () => {
  return (
    <Box>
      <Heading>
        A component library for the
        <Heading color="emerald.500"> React Ecosystem</Heading>
      </Heading>
      <Text mt="3" fontWeight="medium">
        NativeBase is a simple, modular and accessible component library that
        gives you building blocks to build you React applications.
      </Text>
    </Box>
  );
};


  const ViewTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const ViewComponent = ViewTest.bind({});
  
  export default {
    title: "primitives/View",
    component: ViewComponent,
    argTypes: StorybookArgs,
  };
  