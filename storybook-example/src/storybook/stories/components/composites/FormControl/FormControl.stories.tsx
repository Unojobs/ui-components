
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./FormControl.args";

  import React from 'react';
import {
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Box,
} from 'components';

export const Example = () => {
  return (
    <Box alignItems="center">
      <Box w="100%" maxWidth="300px">
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              defaultValue="12345"
              placeholder="password"
            />
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
};


  const FormControlTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const FormControl = FormControlTest.bind({});
  
  export default {
    title: "FormControl",
    component: FormControl,
    argTypes: StorybookArgs,
  };
  