
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./ButtonGroup.args";

  import React from 'react';
import { Button } from 'components';

export const Example = () => {
  return (
    <Button.Group
      isAttached
      colorScheme="blue"
      mx={{ base: 'auto', md: 0 }}
      size="sm"
    >
      <Button>Edit</Button>
      <Button variant="outline">Save</Button>
    </Button.Group>
  );
};


  const ButtonGroupTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const ButtonGroupComponent = ButtonGroupTest.bind({});
  
  export default {
    title: "ButtonGroup",
    component: ButtonGroupComponent,
    argTypes: StorybookArgs,
  };
  