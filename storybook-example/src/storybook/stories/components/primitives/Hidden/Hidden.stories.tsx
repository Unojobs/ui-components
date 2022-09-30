import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Hidden.args';

import React from 'react';
import { Hidden, Text, Stack, Box } from 'components';

const HiddenTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Stack>
        <Box bg="orange.300" p={2}>
          <Text>This text will be always visible.</Text>
        </Box>
        <Hidden {...args}>
          <Box bg="red.400" p={2}>
            <Text>This text will be always hidden.</Text>
          </Box>
        </Hidden>
      </Stack>
    </Wrapper>
  );
};

export const HiddenComponent = HiddenTest.bind({});

export default {
  title: 'primitives/Hidden',
  component: HiddenComponent,
  argTypes: StorybookArgs,
};
