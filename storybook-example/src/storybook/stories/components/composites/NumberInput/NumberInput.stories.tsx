import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './NumberInput.args';

import React from 'react';
import {
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from 'components';

const NumberInputTest = ({ ...args }) => {
  return (
    <Wrapper>
      <NumberInput>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Wrapper>
  );
};

export const NumberInputComponent = NumberInputTest.bind({});

export default {
  title: 'composites/NumberInput',
  component: NumberInputComponent,
  argTypes: StorybookArgs,
};
