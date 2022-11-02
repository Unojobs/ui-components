import { Wrapper } from '../../Wrapper';
import React from 'react';
import {
  NumberIcon,
  SettingsIcon,
  SideMenu,
  UserBoxIcon,
  VideoCardStackIcon,
  WindowFilledIcon,
} from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'SideMenu',
  component: SideMenu,
} as ComponentMeta<typeof SideMenu>;

const Template: ComponentStory<typeof SideMenu> = (args) => (
  <Wrapper>
    <SideMenu {...args}></SideMenu>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = {
  width: 300,
  menuData: [
    {
      title: 'Dashboard',
      icon: <WindowFilledIcon />,
      route: '/job',
      // suffixIcon: <NumberIcon children={12} fade={false} />,
    },
    {
      title: 'Profiles',
      icon: <UserBoxIcon />,
      route: '/adib',
      childItems: [
        {
          title: 'Job departments',
          route: '/prof',
        },
        {
          title: 'videos',
          route: '/vid',
          //   suffixIcon: <CheckCircleIcon />,
          suffixIcon: <NumberIcon children={12} fade={false} />,
        },
        {
          title: 'secrets',
          route: '/sec',
        },
      ],
    },
    {
      title: 'Settings',
      icon: <SettingsIcon />,
      route: '/small',
    },
    {
      title: 'Fruits',
      icon: <VideoCardStackIcon />,
      route: '/sddd',
      childItems: [
        {
          title: 'Apple',
          route: '/apple',
        },
        {
          title: 'Watermelon',
          route: '/water',
        },
        {
          title: 'Sugar',
          route: '/sugar',
        },
      ],
    },
  ],
  bodyStyles: {
    boxShadow: '0px 0px 32px rgb(0, 0, 0, 0.1)',
  },
  separatorAfterKeys: ['/small'],
};
