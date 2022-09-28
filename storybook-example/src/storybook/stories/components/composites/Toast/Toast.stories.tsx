
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Toast.args";

  import React from 'react';
import { Button, useToast, Center } from 'components';

export const Example = () => {
  const toast = useToast();

  return (
    <Center>
      <Button
        onPress={() =>
          toast.show({
            description: 'Hello world',
          })
        }
      >
        Show Toast
      </Button>
    </Center>
  );
};


  const ToastTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const ToastComponent = ToastTest.bind({});
  
  export default {
    title: "composites/Toast",
    component: ToastComponent,
    argTypes: StorybookArgs,
  };
  