import React from 'react';
import { Radio, StorybookRadioArgs } from 'components';
import { Wrapper } from '../../Wrapper';

const RadioComponent = ({ ...args }) => {
  return (
    <Wrapper>
      <Radio.Group
        name="exampleGroup"
        accessibilityLabel="Pick your favorite number"
      >
        <Radio {...args} value="test" my={1}>
          Radio
        </Radio>
      </Radio.Group>
    </Wrapper>
  );
};

export const Basic = RadioComponent.bind({});

export default {
  title: 'primitives/Radio',
  component: Basic,
  argTypes: StorybookRadioArgs,
};

const RadioGroupComponent = (args: any) => {
  return (
    <Wrapper>
      <Radio.Group
        name="exampleGroup"
        {...args}
        accessibilityLabel="Pick your favorite number"
      >
        <Radio value="test" my={1}>
          Radio
        </Radio>
      </Radio.Group>
    </Wrapper>
  );
};

export const RadioGroup = RadioGroupComponent.bind({
  args: {
    StorybookRadioArgs,
  },
});
