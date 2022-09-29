import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Checkbox.args';

import React from 'react';
import { HStack, Checkbox } from 'components';

const Example = ({ ...args }) => {
  return (
    <HStack space={6}>
      <Checkbox
        {...args}
        value="test"
        accessibilityLabel="This is a dummy checkbox"
        defaultIsChecked
      />
    </HStack>
  );
};

const CheckboxTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Example {...args} />
    </Wrapper>
  );
};

export const CheckboxComponent = CheckboxTest.bind({});

export default {
  title: 'primitives/Checkbox',
  component: CheckboxComponent,
  argTypes: StorybookArgs,
};
