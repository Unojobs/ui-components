import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Input.args';

import React from 'react';
import { Input, Box } from 'components';

const Example = ({ ...args }) => {
  return (
    <Box alignItems="center">
      <Input {...args} mx="3" placeholder="Input" w="100%" />
    </Box>
  );
};

const InputTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Example {...args} />
    </Wrapper>
  );
};

export const InputComponent = InputTest.bind({});

export default {
  title: 'primitives/Input',
  component: InputComponent,
  argTypes: StorybookArgs,
};
