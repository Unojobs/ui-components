import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Image.args';

import React from 'react';
import { Image } from 'components';

const ImageTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Image
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Alternate Text"
        size="xl"
      />
    </Wrapper>
  );
};

export const ImageComponent = ImageTest.bind({});

export default {
  title: 'primitives/Image',
  component: ImageComponent,
  argTypes: StorybookArgs,
};
