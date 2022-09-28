import React from "react";
import { StorybookHeadingArgs, Heading, Box } from "components";
import { Wrapper } from "../../Wrapper";

const HeadingComponent = ({ ...args }) => {
  return (
    <Wrapper>
      <Heading {...args}></Heading>
    </Wrapper>
  );
};

export const Basic = HeadingComponent.bind({});

export default {
  title: "Heading",
  component: Basic,
  argTypes: StorybookHeadingArgs,
};
