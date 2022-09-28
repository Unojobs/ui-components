
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Tooltip.args";

  import React from 'react';
import { Tooltip, Button, Center } from 'components';

export function Example() {
  return (
    <Center>
      <Tooltip label="Click here to read more" openDelay={500}>
        <Button>More</Button>
      </Tooltip>
    </Center>
  );
}


  const TooltipTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const TooltipComponent = TooltipTest.bind({});
  
  export default {
    title: "composites/Tooltip",
    component: TooltipComponent,
    argTypes: StorybookArgs,
  };
  