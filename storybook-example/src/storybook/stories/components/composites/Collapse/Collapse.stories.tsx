
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Collapse.args";

  import React from 'react';
import { Collapse, Stack, Heading, Button, Text } from 'components';
export const Example = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Stack space={4} mx={8}>
      <Heading>Default Collapse</Heading>
      <Collapse isOpen={show}>
        Candy canes macaroon croissant carrot cake soufflé toffee topping
        pastry. Brownie lollipop brownie sesame snaps. Pastry gingerbread
        biscuit sweet I love macaroon bear claw fruitcake oat cake. Jelly sweet
        roll I love. Pastry pastry powder pie lemon drops chocolate topping
        dessert.
      </Collapse>
      <Button size="sm" colorScheme="emerald" onPress={handleToggle}>
        <Text color="white">Show {show ? 'Less' : 'More'}</Text>
      </Button>
    </Stack>
  );
};


  const CollapseTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const CollapseComponent = CollapseTest.bind({});
  
  export default {
    title: "composites/Collapse",
    component: CollapseComponent,
    argTypes: StorybookArgs,
  };
  