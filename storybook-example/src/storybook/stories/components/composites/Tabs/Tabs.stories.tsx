
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Tabs.args";

  import React from 'react';
import { Tabs } from 'components';

export const Example = () => {
  return (
    <Tabs>
      <Tabs.Bar>
        <Tabs.Tab>TAB ONE</Tabs.Tab>
        <Tabs.Tab>TAB TWO</Tabs.Tab>
      </Tabs.Bar>
      <Tabs.Views>
        <Tabs.View>One</Tabs.View>
        <Tabs.View>Two</Tabs.View>
      </Tabs.Views>
    </Tabs>
  );
};


  const TabsTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const TabsComponent = TabsTest.bind({});
  
  export default {
    title: "composites/Tabs",
    component: TabsComponent,
    argTypes: StorybookArgs,
  };
  