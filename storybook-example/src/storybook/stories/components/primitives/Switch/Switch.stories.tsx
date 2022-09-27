import React from "react";
import {
  NativeBaseProvider,
  Switch,
  StorybookSwitchArgs,
  Box,
} from "my-com-lib";
import { Wrapper } from "../../Wrapper";

const SwitchComponent = ({ ...args }) => {
  return (
    <Wrapper>
      <Switch {...args}></Switch>
    </Wrapper>
  );
};

export const Basic = SwitchComponent.bind({});

export default {
  title: "Switch",
  component: Basic,
  argTypes: StorybookSwitchArgs,
};
