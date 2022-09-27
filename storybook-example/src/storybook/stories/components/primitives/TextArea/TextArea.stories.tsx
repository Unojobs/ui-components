import React from "react";
import {
  NativeBaseProvider,
  Heading,
  StorybookHeadingArgs,
  Box,
  Icon,
  StorybookIconArgs,
  TextArea,
  StorybookTextAreaArgs,
} from "my-com-lib";
import { Wrapper } from "../../Wrapper";

const TextAreaComponent = ({ ...args }) => {
  return (
    <Wrapper>
      <TextArea {...args} w="40%" />
    </Wrapper>
  );
};

export const Basic = TextAreaComponent.bind({});

export default {
  title: "TextArea",
  component: Basic,
  argTypes: StorybookTextAreaArgs,
};
