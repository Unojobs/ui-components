import React from 'react';
import { InputGroup, Box, StorybookInputGroupArgs } from 'components';
import { Wrapper } from '../../Wrapper';

const InputGroupTest = ({ ...args }) => {
  return (
    <Wrapper>
      <InputGroup
        {...args}
        onPress={() => console.log('hello world')}
      ></InputGroup>
    </Wrapper>
  );
};

export const Primary = InputGroupTest.bind({});

export default {
  title: 'composites/InputGroup',
  component: Primary,
  argTypes: StorybookInputGroupArgs,
};
