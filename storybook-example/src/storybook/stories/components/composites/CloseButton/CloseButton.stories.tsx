
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./CloseButton.args";

  import React from 'react';
import { CloseButton } from 'components';
export const Example = () => {
  return <CloseButton />;
};


  const CloseButtonTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const CloseButton = CloseButtonTest.bind({});
  
  export default {
    title: "CloseButton",
    component: CloseButton,
    argTypes: StorybookArgs,
  };
  