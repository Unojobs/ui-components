import React from "react";
import {
  NativeBaseProvider,
  InputGroup,
  Box,
  StorybookInputGroupArgs,
} from "my-com-lib";
import { Wrapper } from "../../Wrapper";

const InputGroupTest = ({ ...args }) => {
  return (
    <Wrapper>
      <InputGroup
        {...args}
        onPress={() => console.log("hello world")}
      ></InputGroup>
    </Wrapper>
  );
};

export const Primary = InputGroupTest.bind({});

export default {
  title: "InputGroup",
  component: Primary,
  argTypes: StorybookInputGroupArgs,
};
