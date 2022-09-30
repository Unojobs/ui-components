import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Checkbox.args';

import React from 'react';
import { Checkbox } from 'components';

const CheckboxTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Checkbox
        {...args}
        value="test"
        accessibilityLabel="This is a dummy checkbox"
        defaultIsChecked
      />
    </Wrapper>
  );
};

export const CheckboxComponent = CheckboxTest.bind({});

export default {
  title: 'primitives/Checkbox',
  component: CheckboxComponent,
  argTypes: StorybookArgs,
};
