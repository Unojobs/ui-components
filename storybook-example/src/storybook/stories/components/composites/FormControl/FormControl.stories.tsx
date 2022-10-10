import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './FormControl.args';

import React from 'react';
import { FormControl, Input, Stack, WarningOutlineIcon, Box } from 'components';

const FormControlTest = ({ ...args }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export const FormControlComponent = FormControlTest.bind({});

export default {
  title: 'composites/FormControl',
  component: FormControlComponent,
  argTypes: StorybookArgs,
};
