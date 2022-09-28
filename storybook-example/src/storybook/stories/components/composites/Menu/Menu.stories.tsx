
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Menu.args";

  import React from 'react';
import { Menu, HamburgerIcon, Box, Pressable } from 'components';

export function Example() {
  return (
    <Box w="90%" alignItems="center">
      <Menu
        w="190"
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon />
            </Pressable>
          );
        }}
      >
        <Menu.Item>Arial</Menu.Item>
        <Menu.Item>Nunito Sans</Menu.Item>
        <Menu.Item>Roboto</Menu.Item>
        <Menu.Item>Poppins</Menu.Item>
        <Menu.Item>SF Pro</Menu.Item>
        <Menu.Item>Helvetica</Menu.Item>
        <Menu.Item isDisabled>Sofia</Menu.Item>
        <Menu.Item>Cookie</Menu.Item>
      </Menu>
    </Box>
  );
}


  const MenuTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const MenuComponent = MenuTest.bind({});
  
  export default {
    title: "composites/Menu",
    component: MenuComponent,
    argTypes: StorybookArgs,
  };
  