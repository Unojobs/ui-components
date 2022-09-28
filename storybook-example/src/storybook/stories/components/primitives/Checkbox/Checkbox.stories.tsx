import React from "react";
import {
  Heading,
  StorybookHeadingArgs,
  Box,
  Icon,
  StorybookIconArgs,
  Checkbox,
  StorybookCheckboxArgs,
} from "components";
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
