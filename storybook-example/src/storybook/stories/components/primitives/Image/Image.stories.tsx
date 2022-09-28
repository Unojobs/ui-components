
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Image.args";

  import React from 'react';
import { Center, Image } from 'components';
export function Example() {
  return (
    <Center>
      <Image
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Alternate Text"
        size="xl"
      />
    </Center>
  );
}


  const ImageTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const ImageComponent = ImageTest.bind({});
  
  export default {
    title: "Image",
    component: ImageComponent,
    argTypes: StorybookArgs,
  };
  