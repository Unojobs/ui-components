import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Code.args';

import React from 'react';
import { Code } from 'components';

const CodeTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Code>Hello World!</Code>
    </Wrapper>
  );
};

export const CodeComponent = CodeTest.bind({});

export default {
  title: 'composites/Code',
  component: CodeComponent,
  argTypes: StorybookArgs,
};
