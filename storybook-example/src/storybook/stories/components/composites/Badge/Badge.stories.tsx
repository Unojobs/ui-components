
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Badge.args";

  import React from 'react';
import { Badge, Box } from 'components';

 function Example() {
  return (
    <Box alignItems="center">
      <Badge>NEW FEATURE</Badge>
    </Box>
  );
}


  const BadgeTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const BadgeComponent = BadgeTest.bind({});
  
  export default {
    title: "composites/Badge",
    component: BadgeComponent,
    argTypes: StorybookArgs,
  };
  