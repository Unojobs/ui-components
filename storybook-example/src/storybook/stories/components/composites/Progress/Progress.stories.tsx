
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Progress.args";

  import React from 'react';
import { Box, Progress, Center } from 'components';

 const Example = () => {
  return (
    <Center w="100%">
      <Box w="90%" maxW="400">
        <Progress value={45} mx="4" />
      </Box>
    </Center>
  );
};


  const ProgressTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const ProgressComponent = ProgressTest.bind({});
  
  export default {
    title: "composites/Progress",
    component: ProgressComponent,
    argTypes: StorybookArgs,
  };
  