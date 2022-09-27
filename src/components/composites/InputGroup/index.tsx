import React from "react";
import {
  Input as NBInput,
  Box,
  HStack,
  SearchIcon,
  ThreeDotsIcon,
} from "native-base";

export const InputGroup = ({
  variant,
  backgroundColor,
  iconBackground,
  ...props
}: any) => {
  return (
    <HStack
      borderWidth={1}
      justifyContent="center"
      alignItems={"center"}
      borderRadius="full"
      borderColor={"gray.300"}
      bg={backgroundColor}
    >
      <Box pl="3">
        <SearchIcon size="3" />
      </Box>
      <NBInput
        _hover={{
          bg: "red.100",
        }}
        variant={variant}
        {...props}
        placeholder="Enter Here"
      ></NBInput>
      <Box px="3" bg={iconBackground}>
        <ThreeDotsIcon size="3" />
      </Box>
    </HStack>
  );
};
