import React from "react";
import {
  NativeBaseProvider,
  Button,
  StorybookButtonArgs,
  Box,
} from "my-com-lib";
import { Wrapper } from "../../Wrapper";

const ButtonTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Button {...args}></Button>
    </Wrapper>
  );
};

export const Primary = ButtonTest.bind({});

export default {
  title: "Button",
  component: Primary,
  argTypes: StorybookButtonArgs,
};
