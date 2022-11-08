import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Checkbox.args';

import React from 'react';
import { Checkbox } from 'components';

const CheckboxTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Checkbox.Group>
        <Checkbox
          {...args}
          value="test"
          accessibilityLabel="This is a dummy checkbox"
          defaultIsChecked
        >
          CheckBox
        </Checkbox>
      </Checkbox.Group>
    </Wrapper>
  );
};

export const CheckboxComponent = CheckboxTest.bind({});

export default {
  title: 'primitives/Checkbox',
  component: CheckboxComponent,
  argTypes: StorybookArgs,
};
