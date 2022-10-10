import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Flex.args';

import React from 'react';
import { Flex, Center, Heading, VStack, Divider, Box } from 'components';

const FlexTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Box flex="1" safeAreaTop>
        <VStack space={2.5} w="100%" px="3">
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
      </Box>
    </Wrapper>
  );
};

export const FlexComponent = FlexTest.bind({});

export default {
  title: 'primitives/Flex',
  component: FlexComponent,
  argTypes: StorybookArgs,
};
