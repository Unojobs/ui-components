import React from "react";
import { NativeBaseProvider, Link, StorybookLinkArgs, Box } from "my-com-lib";
import { Wrapper } from "../../Wrapper";

const LinkComponent = ({ ...args }) => {
  return (
    <Wrapper>
      <Link {...args}></Link>
    </Wrapper>
  );
};

export const Basic = LinkComponent.bind({});

export default {
  title: "Link",
  component: Basic,
  argTypes: StorybookLinkArgs,
};
