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
      route: '/dashboard',
      // suffixIcon: <NumberIcon children={12} fade={false} />,
    },
    {
      title: 'Profiles',
      icon: <UserBoxIcon />,
      route: '/profiles',
      childItems: [
        {
          title: 'Job departments',
          route: '/profies/departments',
        },
        {
          title: 'Job Skills',
          route: '/profiles/videos',
          //   suffixIcon: <CheckCircleIcon />,
          suffixIcon: <NumberIcon children={12} fade={false} />,
        },
        {
          title: 'Job Roles',
          route: '/profiles/roles',
        },
      ],
    },
    {
      title: 'Settings',
      icon: <SettingsIcon />,
      route: '/settings',
    },
    {
      title: 'Candidate',
      icon: <VideoCardStackIcon />,
      route: '/candidate',
      childItems: [
        {
          title: 'New Uploads',
          route: '/candidate/newupload',
        },
        {
          title: 'Requests',
          route: '/candidate/requests',
        },
        {
          title: 'videos',
          route: '/candidate/videos',
        },
      ],
    },
  ],
  bodyStyles: {
    boxShadow: '0px 0px 32px rgb(0, 0, 0, 0.1)',
  },
  separatorAfterKeys: ['/settings'],
};
