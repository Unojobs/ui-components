
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./factory.args";

  import React from 'react';
import { Factory } from 'components';
import { View } from 'react-native';

export const Example = () => {
  const FactoryView = Factory(View);
  return <FactoryView bg="emerald.400" borderRadius={4} size={16} />;
};


  const factoryTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const factory = factoryTest.bind({});
  
  export default {
    title: "factory",
    component: factory,
    argTypes: StorybookArgs,
  };
  