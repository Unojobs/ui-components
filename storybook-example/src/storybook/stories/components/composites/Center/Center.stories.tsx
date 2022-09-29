
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Center.args";

  import React from 'react';
import { Center } from 'components';
 function Example() {
  return (
    <Center>
      <Center
        bg="primary.400"
        _text={{ color: 'white', fontWeight: 'bold' }}
        height={200}
        width={{ base: 200, lg: 250 }}
      >
        This is the Center
      </Center>
    </Center>
  );
}


  const CenterTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const CenterComponent = CenterTest.bind({});
  
  export default {
    title: "composites/Center",
    component: CenterComponent,
    argTypes: StorybookArgs,
  };
  