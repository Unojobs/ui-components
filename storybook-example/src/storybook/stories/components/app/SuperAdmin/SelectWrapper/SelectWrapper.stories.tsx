import React from 'react';
import { DownArrowCurvedIcon, SelectWrapper, Text } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';

import { Select } from 'antd';

const { Option } = Select;

export default {
  title: 'SelectWrapper',
  component: SelectWrapper,
} as ComponentMeta<typeof SelectWrapper>;

const Template: ComponentStory<typeof SelectWrapper> = (args) => (
  <Wrapper>
    <SelectWrapper {...args}>
      <Select
        defaultValue={'Approved'}
        style={{
          height: 48,
          width: 270,
        }}
        suffixIcon={
          <DownArrowCurvedIcon
            style={{ color: '#111', transform: 'rotate(180deg)' }}
          />
        }
      >
        <Option key={'approved'} value="Approved">
          <Text fontWeight={400}>Approved</Text>
        </Option>
        <Option key={'rejected'} value="Rejected">
          <Text fontWeight={400}>Rejected</Text>
        </Option>
      </Select>
    </SelectWrapper>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = {};
