import React from 'react';
import { Box, Input } from '../../../primitives';
import { SearchOutlined } from '@ant-design/icons';
export interface SearchBarProps {
  searchString: string;
  handleChange: (event?: any) => void;
}
export const SearchBar = (props: SearchBarProps) => {
  const { searchString, handleChange } = props;

  return (
    <Box
      width={327}
      height={45}
      paddingX={13}
      paddingY={5}
      justifyContent="center"
    >
      <Input
        placeholder="Search Message"
        onChange={handleChange}
        value={searchString}
        width={'full'}
        fontSize={12}
        InputRightElement={<SearchOutlined />}
        variant={'unstyled'}
      />
    </Box>
  );
};
