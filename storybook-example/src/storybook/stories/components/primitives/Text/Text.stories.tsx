import React from "react";
import { Text, StorybookTextArgs, Box } from "components";
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
