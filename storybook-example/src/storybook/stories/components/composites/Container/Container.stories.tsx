import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Container.args';

import React from 'react';
import { Container, Text, Heading, Center } from 'components';

const ContainerTest = ({ ...args }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export const ContainerComponent = ContainerTest.bind({});

export default {
  title: 'composites/Container',
  component: ContainerComponent,
  argTypes: StorybookArgs,
};
