import React from "react";
// import { NativeBaseProvider, Heading, Box } from "native-base";
import {
  StorybookHeadingArgs,
  NativeBaseProvider,
  Heading,
  Box,
} from "my-com-lib";
import { Wrapper } from "../../Wrapper";

const HeadingComponent = ({ ...args }) => {
  return (
    <Wrapper>
      <Heading {...args}></Heading>
    </Wrapper>
  );
};

export const Basic = HeadingComponent.bind({});

export default {
  title: "Heading",
  component: Basic,
  argTypes: StorybookHeadingArgs,
};
