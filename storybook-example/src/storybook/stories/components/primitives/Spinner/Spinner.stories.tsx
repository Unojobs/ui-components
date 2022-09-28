
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Spinner.args";

  import React from 'react';
import { Spinner, HStack, Heading } from 'components';

export const Example = () => {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
};


  const SpinnerTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const SpinnerComponent = SpinnerTest.bind({});
  
  export default {
    title: "Spinner",
    component: SpinnerComponent,
    argTypes: StorybookArgs,
  };
  