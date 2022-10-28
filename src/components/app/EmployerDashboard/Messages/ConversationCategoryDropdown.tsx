/* eslint-disable react-native/no-inline-styles */
import { Select } from 'antd';
import React from 'react';
import { Box } from '../../../primitives';
const { Option } = Select;
export interface ConversationCategoryDropdownProps {
  categories: string[];
}
export const ConversationCategoryDropdown = (
  props: ConversationCategoryDropdownProps
) => {
  const { categories } = props;
  const handleChange = (value: string) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <>
      {categories?.length ? (
        <Box
          width={'327px'}
          height={'45px'}
          alignItems={'center'}
          justifyContent={'center'}
          paddingX={'13px'}
          paddingY={'20px'}
        >
          <Select
            defaultValue={categories[0]}
            style={{
              width: '100%',
              fontSize: 12,
            }}
            onChange={handleChange}
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
          width={'327px'}
          height={'45px'}
          alignItems={'center'}
          justifyContent={'center'}
          paddingX={'13px'}
          paddingY={'20px'}
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
