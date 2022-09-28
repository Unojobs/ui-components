
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Flex.args";

  import React from 'react';
import {
  Flex,
  Center,
  Heading,
  ScrollView,
  VStack,
  Divider,
  Box,
} from 'components';

export function Example() {
  return (
    <Box flex="1" safeAreaTop>
      <ScrollView>
        <VStack space={2.5} w="100%" px="3">
          {/* flexDirection -> row */}
          <Heading size="md">row</Heading>
          <Flex direction="row" mb="2.5" mt="1.5">
            <Center
              size="16"
              bg="primary.100"
              _text={{
                color: 'coolGray.800',
              }}
            >
              100
            </Center>
            <Center
              size="16"
              bg="primary.200"
              _text={{
                color: 'coolGray.800',
              }}
            >
              200
            </Center>
            <Center
              bg="primary.300"
              size="16"
              _text={{
                color: 'coolGray.800',
              }}
            >
              300
            </Center>
            <Center
              size="16"
              bg="primary.400"
              _text={{
                color: 'coolGray.800',
              }}
            >
              400
            </Center>
          </Flex>
          <Divider />
          {/* flexDirection -> column */}
          <Heading size="md">column</Heading>

          <Flex direction="column" mb="2.5" mt="1.5">
            <Center
              size="16"
              bg="primary.100"
              _text={{
                color: 'coolGray.800',
              }}
            >
              100
            </Center>
            <Center
              size="16"
              bg="primary.200"
              _text={{
                color: 'coolGray.800',
              }}
            >
              200
            </Center>
            <Center
              bg="primary.300"
              size="16"
              _text={{
                color: 'coolGray.800',
              }}
            >
              300
            </Center>
            <Center
              size="16"
              bg="primary.400"
              _text={{
                color: 'coolGray.800',
              }}
            >
              400
            </Center>
          </Flex>
          <Divider />
          {/* flexDirection -> row-reverse */}
          <Heading size="md">row-reverse</Heading>
          <Flex direction="row-reverse" mb="2.5" mt="1.5">
            <Center
              size="16"
              bg="primary.100"
              _text={{
                color: 'coolGray.800',
              }}
            >
              100
            </Center>
            <Center
              size="16"
              bg="primary.200"
              _text={{
                color: 'coolGray.800',
              }}
            >
              200
            </Center>
            <Center
              bg="primary.300"
              size="16"
              _text={{
                color: 'coolGray.800',
              }}
            >
              300
            </Center>
            <Center
              size="16"
              bg="primary.400"
              _text={{
                color: 'coolGray.800',
              }}
            >
              400
            </Center>
          </Flex>
          <Divider />
          {/* flexDirection -> column-reverse */}
          <Heading size="md">column-reverse</Heading>
          <Flex direction="column-reverse" mb="2.5" mt="1.5">
            <Center
              size="16"
              bg="primary.100"
              _text={{
                color: 'coolGray.800',
              }}
            >
              100
            </Center>
            <Center
              size="16"
              bg="primary.200"
              _text={{
                color: 'coolGray.800',
              }}
            >
              200
            </Center>
            <Center
              bg="primary.300"
              size="16"
              _text={{
                color: 'coolGray.800',
              }}
            >
              300
            </Center>
            <Center
              size="16"
              bg="primary.400"
              _text={{
                color: 'coolGray.800',
              }}
            >
              400
            </Center>
          </Flex>
          <Divider />
        </VStack>
      </ScrollView>
    </Box>
  );
}


  const FlexTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const FlexComponent = FlexTest.bind({});
  
  export default {
    title: "Flex",
    component: FlexComponent,
    argTypes: StorybookArgs,
  };
  