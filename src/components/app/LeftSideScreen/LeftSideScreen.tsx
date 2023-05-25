import React from 'react';
import { Box, VStack, Text } from '../../primitives';
import type { ILeftSideScreenProps, IListItem } from './types';
import { style } from './style.left-side-screen';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { nanoid } from 'nanoid';
import { Image as AntdImage } from 'antd';

export const LeftSideScreen = (props: ILeftSideScreenProps) => {
  return (
    <Box
      backgroundColor={'secondary.950'}
      width={props.boxWidth}
      minHeight={'100vh'}
      position="relative"
      display={{ base: 'none', sm: 'none', md: 'block' }}
    >
      <Box
        position={'fixed'}
        top={props.carouselTopMargin}
        pl={props.boxPaddingLeft}
        pr={props.boxPaddingRight}
        width={props.boxWidth}
      >
        <Carousel
          showThumbs={props.showThumbs}
          autoPlay={props.autoPlay}
          showArrows={props.showArrows}
          showStatus={false}
          infiniteLoop={props.infiniteLoop}
          interval={props.interval}
          showIndicators={props.showIndicators}
        >
          {props.list?.map((object: IListItem) => {
            return (
              <VStack textAlign="left" key={nanoid()}>
                <Box
                  borderRadius={props.imageBorderRadius}
                  height={props.imageHeight}
                  width={props.boxWidth}
                >
                  <AntdImage
                    preview={false}
                    src={object.imageUrl}
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      objectFit: 'fill',
                      borderRadius: props.imageBorderRadius,
                    }}
                    height={'100%'}
                    width={'100%'}
                  />
                </Box>
                <Box pl={props.textPaddingLeft} pr={props.textPaddingRight}>
                  <Text {...style.title} maxWidth={props.boxWidth}>
                    {object.title}
                  </Text>
                  <Text
                    {...style.subTitle}
                    textAlign="justify"
                    maxWidth={props.boxWidth}
                  >
                    {object.subTitle}
                  </Text>
                </Box>
              </VStack>
            );
          })}
        </Carousel>
      </Box>
    </Box>
  );
};

LeftSideScreen.defaultProps = {
  list: [],
  infiniteLoop: true,
  autoPlay: true,
  showArrows: false,
  interval: 3000,
  showThumbs: false,
  carouselTopMargin: 220,
  boxWidth: {
    'base': 'none',
    'sm': 'none',
    'md': 512,
    'lg': 570,
    'xl': 767,
    '2xl': 900,
  },
  imageBorderRadius: 10,
  imageHeight: {
    'base': 'none',
    'sm': 'none',
    'md': 400,
    'lg': 400,
    'xl': 400,
    '2xl': 400,
  },
  textPaddingLeft: 4,
  textPaddingRight: 4,
  boxPaddingLeft: 0,
  boxPaddingRight: 0,
  showIndicators: false,
};
