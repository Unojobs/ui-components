
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Card.args";

  import React from 'react';
import { Card, HStack, Heading, Text, Spacer, Flex } from 'components';

export function Example() {
  return (
    <Card bg="cyan.700" w="296">
      <HStack alignItems="flex-start">
        <Text fontSize="xs" color="cyan.50" fontWeight="medium">
          Open Source
        </Text>
        <Spacer />
        <Text fontSize="2xs" color="cyan.100">
          1 month ago
        </Text>
      </HStack>
      <Heading color="cyan.50" mt="2" fontWeight="medium" fontSize="lg">
        NativeBase
      </Heading>
      <Text mt="1" fontSize="sm" color="white">
        NativeBase is a component library that enables devs to build universal
        design systems.
      </Text>
      <Flex>
        <Text mt="2" fontSize="xs" fontWeight="medium" color="cyan.400">
          Read More
        </Text>
      </Flex>
    </Card>
  );
}


  const CardTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const CardComponent = CardTest.bind({});
  
  export default {
    title: "composites/Card",
    component: CardComponent,
    argTypes: StorybookArgs,
  };
  