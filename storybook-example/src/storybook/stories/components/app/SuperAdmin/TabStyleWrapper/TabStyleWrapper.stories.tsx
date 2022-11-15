import React from 'react';
import { TabStyleWrapper } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { Tabs } from 'antd';

export default {
  title: 'TabStyleWrapper',
  component: TabStyleWrapper,
} as ComponentMeta<typeof TabStyleWrapper>;

const Template: ComponentStory<typeof TabStyleWrapper> = (args) => (
  <Wrapper>
    <TabStyleWrapper {...args}>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: `Tab 1`,
            key: '1',
            children: `Content of Tab Pane 1`,
          },
          {
            label: `Tab 2`,
            key: '2',
            children: `Content of Tab Pane 2`,
          },
          {
            label: `Tab 3`,
            key: '3',
            children: `Content of Tab Pane 3`,
          },
        ]}
      />
    </TabStyleWrapper>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = {};
