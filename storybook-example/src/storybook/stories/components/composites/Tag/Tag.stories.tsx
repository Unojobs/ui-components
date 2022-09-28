
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Tag.args";

  import React from 'react';
import { Tag } from 'components';

export const Example = () => {
  return <Tag>NativeBase</Tag>;
};


  const TagTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const Tag = TagTest.bind({});
  
  export default {
    title: "Tag",
    component: Tag,
    argTypes: StorybookArgs,
  };
  