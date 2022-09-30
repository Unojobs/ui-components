import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './PinInput.args';

import React from 'react';
import { PinInput } from 'components';

const PinInputTest = ({ ...args }) => {
  return (
    <Wrapper>
      <PinInput>
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
    </Wrapper>
  );
};

export const PinInputComponent = PinInputTest.bind({});

export default {
  title: 'composites/PinInput',
  component: PinInputComponent,
  argTypes: StorybookArgs,
};
