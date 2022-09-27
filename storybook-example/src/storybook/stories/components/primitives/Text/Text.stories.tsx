import React from "react";
import { NativeBaseProvider, Text, StorybookTextArgs, Box } from "my-com-lib";
import { Wrapper } from "../../Wrapper";

const TextComponent = ({ ...args }) => {
  return (
    <Wrapper>
      <Text {...args}></Text>
    </Wrapper>
  );
};

export const Basic = TextComponent.bind({});

export default {
  title: "Text",
  component: Basic,
  argTypes: StorybookTextArgs,
};
