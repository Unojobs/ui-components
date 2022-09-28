
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Wrap.args";

  import React from 'react';
import { Wrap, Center } from 'components';
export const Example = () => {
  return (
    <Wrap direction="row" space={10} mx={4}>
      <Center
        size={16}
        bg="primary.400"
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 1
      </Center>
      <Center
        bg="secondary.400"
        size={16}
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 2
      </Center>
      <Center
        size={16}
        bg="emerald.400"
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 3
      </Center>
      <Center size={16} bg="rose.400" rounded="xl" _text={{ color: 'white' }}>
        Box 4
      </Center>
    </Wrap>
  );
};


  const WrapTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const WrapComponent = WrapTest.bind({});
  
  export default {
    title: "Wrap",
    component: WrapComponent,
    argTypes: StorybookArgs,
  };
  