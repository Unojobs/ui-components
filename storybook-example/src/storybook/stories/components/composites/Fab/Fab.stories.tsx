
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Fab.args";

  import { Fab, Icon, Box, NativeBaseProvider } from 'components';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export const Example = () => {
  return (
    <NativeBaseProvider>
      <Box position="relative" h={100} w={100}>
        <Fab
          position="absolute"
          size="sm"
          icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        />
      </Box>
    </NativeBaseProvider>
  );
};


  const FabTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const Fab = FabTest.bind({});
  
  export default {
    title: "Fab",
    component: Fab,
    argTypes: StorybookArgs,
  };
  