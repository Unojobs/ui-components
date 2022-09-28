
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
  
  export const CloseButtonComponent = CloseButtonTest.bind({});
  
  export default {
    title: "composites/CloseButton",
    component: CloseButtonComponent,
    argTypes: StorybookArgs,
  };
  