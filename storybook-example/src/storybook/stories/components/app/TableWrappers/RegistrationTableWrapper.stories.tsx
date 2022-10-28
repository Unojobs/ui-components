import React from 'react';
import { RegistrationTableWrapper } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Wrapper } from '../../Wrapper';

import { Table } from 'antd';

export default {
  title: 'RegistrationTableWrapper',
  component: RegistrationTableWrapper,
} as ComponentMeta<typeof RegistrationTableWrapper>;

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

const Template: ComponentStory<typeof RegistrationTableWrapper> = (args) => (
  <Wrapper>
    <RegistrationTableWrapper {...args}>
      <Table columns={columns} dataSource={dataSource} />
    </RegistrationTableWrapper>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = {};
