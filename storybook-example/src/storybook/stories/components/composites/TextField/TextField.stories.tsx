import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './TextField.args';

import React from 'react';
import { TextField } from 'components';

const TextFieldTest = ({ ...args }) => {
  return (
    <Wrapper>
      <TextField w="90%" placeholder="Default TextField" />
    </Wrapper>
  );
};

export const TextFieldComponent = TextFieldTest.bind({});

export default {
  title: 'composites/TextField',
  component: TextFieldComponent,
  argTypes: StorybookArgs,
};
