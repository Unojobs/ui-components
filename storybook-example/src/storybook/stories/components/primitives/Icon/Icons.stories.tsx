import React from "react";
import { NativeBaseProvider, Icon, StorybookIconArgs, Box } from "my-com-lib";
import { Wrapper } from "../../Wrapper";

const IconComponent = ({ ...args }) => {
  return (
    <Wrapper>
      <Icon {...args} color="coolGray.800" />
    </Wrapper>
  );
};

export const Basic = IconComponent.bind({});

export default {
  title: "Icon",
  component: Basic,
  argTypes: StorybookIconArgs,
};
