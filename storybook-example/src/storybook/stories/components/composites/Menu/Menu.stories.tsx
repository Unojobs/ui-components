import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Menu.args';

import React from 'react';
import { Menu, HamburgerIcon, Box, Pressable } from 'components';

const MenuTest = ({ ...args }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export const MenuComponent = MenuTest.bind({});

export default {
  title: 'composites/Menu',
  component: MenuComponent,
  argTypes: StorybookArgs,
};
