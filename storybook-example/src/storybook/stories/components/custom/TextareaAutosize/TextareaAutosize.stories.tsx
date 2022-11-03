import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './TextareaAutosize.args';

import React from 'react';
import { TextareaAutosize } from 'components';

const TextareaAutosizeTest = ({ ...args }) => {
  return (
    <Wrapper>
      <TextareaAutosize
        color="red"
        initialHeight={'100px'}
        placeholder="Hello world"
      />
    </Wrapper>
  );
};

export const TextareaAutosizeComponent = TextareaAutosizeTest.bind({});

export default {
  title: 'custom/TextareaAutosize',
  component: TextareaAutosize,
  argTypes: StorybookArgs,
};
