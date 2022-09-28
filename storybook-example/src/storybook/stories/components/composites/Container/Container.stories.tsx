
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Container.args";

  import React from 'react';
import { Container, Text, Heading, Center } from 'components';
export function Example() {
  return (
    <Center>
      <Container>
        <Heading>
          A component library for the
          <Text color="emerald.500"> React Ecosystem</Text>
        </Heading>
        <Text mt="3" fontWeight="medium">
          NativeBase is a simple, modular and accessible component library that
          gives you building blocks to build you React applications.
        </Text>
      </Container>
    </Center>
  );
}


  const ContainerTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const Container = ContainerTest.bind({});
  
  export default {
    title: "Container",
    component: Container,
    argTypes: StorybookArgs,
  };
  