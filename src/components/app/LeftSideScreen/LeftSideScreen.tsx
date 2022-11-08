import React from 'react';
import { Box, VStack, Text, Image } from '../../primitives';
import './styles.left-side-screen.css';
import type { ILeftSideScreenProps, IListItem } from './types';
import { style } from './style.left-side-screen';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { nanoid } from 'nanoid';

export const LeftSideScreen = (props: ILeftSideScreenProps) => {
  return (
    <div className="left-side-bar-info">
      <Box
        backgroundColor={'black'}
        width={{ sm: 'none', md: 512, lg: 640, xl: 787 }}
        minHeight={'100vh'}
        position="relative"
        display={{ sm: 'none', md: 'block' }}
      >
        <Box
          position={'fixed'}
          top={'1/4'}
          padding={5}
          width={{ sm: 'none', md: 512, lg: 640, xl: 787 }}
        >
          <Carousel
            showThumbs={props.showThumbs}
            autoPlay={props.autoPlay}
            showArrows={props.showArrows}
            showStatus={false}
            infiniteLoop={props.infiniteLoop}
            interval={props.interval}
          >
            {props.list?.map((object: IListItem) => {
              return (
                <VStack textAlign="left" key={nanoid()}>
                  <Text>
                    <Image
                      source={{
                        uri: object.imageUrl,
                      }}
                      alt={object.imageUrl}
                      {...style.image}
                      width={{ sm: 'none', md: 512, lg: 640, xl: 787 }}
                    />
                  </Text>
                  <Text {...style.title}>{object.title}</Text>
                  <Text {...style.subTitle}>{object.subTitle}</Text>
                </VStack>
              );
            })}
          </Carousel>
        </Box>
      </Box>
    </div>
  );
};

LeftSideScreen.defaultProps = {
  list: [],
  infiniteLoop: true,
  autoPlay: true,
  showArrows: false,
  interval: 3000,
  showThumbs: false,
};
