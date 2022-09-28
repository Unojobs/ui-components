import React from "react";
import {
  Heading,
  StorybookHeadingArgs,
  Box,
  Icon,
  StorybookIconArgs,
  TextArea,
  StorybookTextAreaArgs,
} from "components";
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
