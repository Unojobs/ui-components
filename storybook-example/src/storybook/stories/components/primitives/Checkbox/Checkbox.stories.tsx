import React from "react";
import {
  NativeBaseProvider,
  Heading,
  StorybookHeadingArgs,
  Box,
  Icon,
  StorybookIconArgs,
  Checkbox,
  StorybookCheckboxArgs,
} from "my-com-lib";
import { Wrapper } from "../../Wrapper";

const CheckboxComponent = ({ ...args }) => {
  return (
    <Wrapper>
      <Checkbox {...args} />
    </Wrapper>
  );
};

export const Basic = CheckboxComponent.bind({});

export default {
  title: "Checkbox",
  component: Basic,
  argTypes: StorybookCheckboxArgs,
};
