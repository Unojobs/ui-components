import { Wrapper } from '../../Wrapper';
import React from 'react';
import { SideMenu } from 'components';
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
      icon: <p>&#9705;</p>,
      route: '/job',
      //   suffixIcon: <CheckCircleIcon />,
    },
    {
      title: 'Profiles',
      icon: <p>&#9705;</p>,
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
        },
        {
          title: 'secrets',
          route: '/sec',
        },
      ],
    },
    {
      title: 'Settings',
      icon: <p>&#9705;</p>,
      route: '/small',
    },
    {
      title: 'Fruits',
      icon: <p>&#9705;</p>,
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
};
