
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./CircularProgress.args";

  import React from 'react';
import { CircularProgress, Heading, Center } from 'components';
export const Example = () => {
  return (
    <Center>
      <Heading mb={6}>Default CircularProgress</Heading>
      <CircularProgress value={60} />
    </Center>
  );
};


  const CircularProgressTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const CircularProgressComponent = CircularProgressTest.bind({});
  
  export default {
    title: "composites/CircularProgress",
    component: CircularProgressComponent,
    argTypes: StorybookArgs,
  };
  