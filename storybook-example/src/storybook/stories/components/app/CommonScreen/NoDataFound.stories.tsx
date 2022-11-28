import { Wrapper } from '../../Wrapper';
import React from 'react';
import { NoDataScreen } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'NoDataFound',
  component: NoDataScreen,
} as ComponentMeta<typeof NoDataScreen>;

const Template: ComponentStory<typeof NoDataScreen> = (args) => (
  <Wrapper>
    <NoDataScreen {...args}></NoDataScreen>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = {};
