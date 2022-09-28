
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Checkbox.args";

  import React from 'react';
import { HStack, Checkbox } from 'components';

export const Example = () => {
  return (
    <HStack space={6}>
      <Checkbox
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
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const CheckboxComponent = CheckboxTest.bind({});
  
  export default {
    title: "Checkbox",
    component: CheckboxComponent,
    argTypes: StorybookArgs,
  };
  