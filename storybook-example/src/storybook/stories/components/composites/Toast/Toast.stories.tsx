import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Toast.args';

import React from 'react';
import { Button, useToast, Center } from 'components';

const ToastTest = ({ ...args }) => {
  const toast = useToast();

  return (
    <Wrapper>
      <Button
        onPress={() =>
          toast.show({
            description: 'Hello world',
          })
        }
      >
        Show Toast
      </Button>
    </Wrapper>
  );
};

export const ToastComponent = ToastTest.bind({});

export default {
  title: 'composites/Toast',
  component: ToastComponent,
  argTypes: StorybookArgs,
};
