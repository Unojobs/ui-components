import React from 'react';
import { SuperAdminTableWrapper } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';

import { Table } from 'antd';

export default {
  title: 'SuperAdminTableWrapper',
  component: SuperAdminTableWrapper,
} as ComponentMeta<typeof SuperAdminTableWrapper>;

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const Template: ComponentStory<typeof SuperAdminTableWrapper> = (args) => (
  <Wrapper>
    <SuperAdminTableWrapper {...args}>
      <Table columns={columns} dataSource={dataSource} />
    </SuperAdminTableWrapper>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = {};
