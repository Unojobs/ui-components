/* eslint-disable react-native/no-inline-styles */
import { Select } from 'antd';
import React from 'react';
import { Box } from '../../../primitives';
const { Option } = Select;
export interface ConversationCategoryDropdownProps {
  categories: string[];
  handleOptionChange: (event?: any) => void;
}
export const ConversationCategoryDropdown = (
  props: ConversationCategoryDropdownProps
) => {
  const { categories, handleOptionChange } = props;
  return (
    <>
      {categories?.length ? (
        <Box
          width={327}
          height={45}
          alignItems={'center'}
          justifyContent={'center'}
          paddingX={3.5}
          paddingY={5}
        >
          <Select
            defaultValue={categories[0]}
            style={{
              width: '100%',
              fontSize: 12,
            }}
            onChange={handleOptionChange}
            bordered={false}
          >
            {categories.length &&
              categories.map((category) => (
                <Option style={{ fontSize: 12 }} value={category}>
                  {category}
                </Option>
              ))}
          </Select>
        </Box>
      ) : (
        <Box
          width={327}
          height={45}
          alignItems={'center'}
          justifyContent={'center'}
          paddingX={3.5}
          paddingY={5}
        >
          <Select
            disabled
            defaultValue={'No categories'}
            style={{ width: '100%', fontSize: 12 }}
            bordered={false}
          >
            <Option style={{ fontSize: 12 }} value="No categories">
              No categories
            </Option>
          </Select>
        </Box>
      )}
    </>
  );
};
