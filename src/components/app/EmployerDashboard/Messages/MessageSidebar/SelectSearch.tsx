/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Option } = Select;
interface SelectMenuProps {
  options: string[];
}
const SelectMenu = (props: SelectMenuProps) => {
  const { options } = props;
  return (
    <Select
      size="large"
      style={{
        width: 327,
        fontSize: 14,
      }}
      defaultValue={options[0]}
    >
      {options.length &&
        options.map((option) => <Option value={option}>{option}</Option>)}
    </Select>
  );
};

interface SearchBarProps {}
const SearchBar = (props: SearchBarProps) => {
  const {} = props;
  return (
    <Input
      placeholder="Search messages..."
      style={{
        fontSize: 14,
        width: 327,
        height: 45,
        paddingTop: 13,
        paddingRight: 20,
        paddingBottom: 13,
        paddingLeft: 20,
      }}
      suffix={<SearchOutlined />}
    />
  );
};

export interface SelectSearchProps {
  options: string[];
}
export const SelectSearch = (props: SelectSearchProps) => {
  const { options } = props;
  return (
    <div
      style={{
        width: 327,
        height: 106,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <SelectMenu options={options} />
      <SearchBar />
    </div>
  );
};
