
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Link.args";

  import React from 'react';
import { Link, Box } from 'components';

export const Example = () => {
  return (
    <Box alignItems="center">
      <Link href="https://nativebase.io">
        Click here to open documentation.
      </Link>
    </Box>
  );
};


  const LinkTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const LinkComponent = LinkTest.bind({});
  
  export default {
    title: "primitives/Link",
    component: LinkComponent,
    argTypes: StorybookArgs,
  };
  