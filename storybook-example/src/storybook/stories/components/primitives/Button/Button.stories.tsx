import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Button.args';

import React from 'react';
import { Button, Box } from 'components';

const Example = () => {
  return (
    <Box alignItems="center">
      <Button onPress={() => console.log('hello world')}>Click Me</Button>
    </Box>
  );
};

const ButtonTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Example {...args} />
    </Wrapper>
  );
};

export const ButtonComponent = ButtonTest.bind({});

export default {
  title: 'primitives/Button',
  component: ButtonComponent,
  argTypes: StorybookArgs,
};
