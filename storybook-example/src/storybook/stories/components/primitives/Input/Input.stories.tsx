import React from "react";
import {
  Heading,
  StorybookHeadingArgs,
  Box,
  Icon,
  StorybookIconArgs,
  Input,
  StorybookInputArgs,
} from "components";
import { Wrapper } from "../../Wrapper";

const InputComponent = ({ ...args }) => {
  return (
    <Wrapper>
      <Input {...args} w="40%" />
    </Wrapper>
  );
};

export const Basic = InputComponent.bind({});

export default {
  title: "Input",
  component: Basic,
  argTypes: StorybookInputArgs,
};
