import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './TextArea.args';

import React from 'react';
import { TextArea } from 'components';

const TextAreaTest = ({ ...args }) => {
  return (
    <Wrapper>
      <TextArea
        {...args}
        h={20}
        placeholder="Text Area Placeholder"
        w="75%"
        maxW="300"
      />
    </Wrapper>
  );
};

export const TextAreaComponent = TextAreaTest.bind({});

export default {
  title: 'primitives/TextArea',
  component: TextAreaComponent,
  argTypes: StorybookArgs,
};
