
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Drawer.args";

  import React from 'react';
import { Box, Button, Drawer } from 'components';
import { useState } from 'react';
import { Dimensions } from 'react-native';

const Basic = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onPress={() => setShowModal(true)}>Button</Button>
      <Drawer
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        placement="right"
      >
        <Box
          display="flex"
          h="100%"
          bg="yellow.200"
          minW={Dimensions.get('window').width / 2}
        ></Box>
      </Drawer>
    </>
  );
};




  const DrawerTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const Drawer = DrawerTest.bind({});
  
  export default {
    title: "Drawer",
    component: Drawer,
    argTypes: StorybookArgs,
  };
  