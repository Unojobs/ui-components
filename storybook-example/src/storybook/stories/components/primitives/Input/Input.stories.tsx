import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Input.args';

import React from 'react';
import { Input } from 'components';

const InputTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Input {...args} mx="3" placeholder="Input" w="100%" />
    </Wrapper>
  );
};

export const InputComponent = InputTest.bind({});

export default {
  title: 'primitives/Input',
  component: InputComponent,
  argTypes: StorybookArgs,
};
