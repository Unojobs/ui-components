/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Box, Input } from '../../../primitives';
import { SearchOutlined } from '@ant-design/icons';
export interface SearchBarProps {}
export const SearchBar = (props: SearchBarProps) => {
  const {} = props;
  const handleChange = (event: any) => {
    // eslint-disable-next-line no-console
    console.log(event.target.value);
  };
  return (
    <Box
      width={'327px'}
      height={'45px'}
      alignItems={'center'}
      justifyContent={'center'}
      paddingX={'13px'}
      paddingY={'20px'}
    >
      <Input
        placeholder="Search Message"
        onChange={handleChange}
        // value={searchVal}
        style={{ width: '100%', fontSize: 12 }}
        InputRightElement={<SearchOutlined />}
        variant={'unstyled'}
      />
    </Box>
  );
};
