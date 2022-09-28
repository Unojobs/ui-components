
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
  
  export const Toast = ToastTest.bind({});
  
  export default {
    title: "Toast",
    component: Toast,
    argTypes: StorybookArgs,
  };
  