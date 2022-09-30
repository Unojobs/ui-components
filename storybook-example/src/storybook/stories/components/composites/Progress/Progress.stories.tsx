import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Progress.args';

import React from 'react';
import { Box, Progress, Center } from 'components';

const ProgressTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Box w="90%" maxW="400">
        <Progress value={45} mx="4" />
      </Box>
    </Wrapper>
  );
};

export const ProgressComponent = ProgressTest.bind({});

export default {
  title: 'composites/Progress',
  component: ProgressComponent,
  argTypes: StorybookArgs,
};
