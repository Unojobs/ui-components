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
          top={'30%'}
          padding={5}
          width={{ sm: 'none', md: 512, lg: 640, xl: 787 }}
        >
          <Carousel
            showThumbs={true}
            autoPlay={props.autoPlay}
            showArrows={props.showArrows}
            showStatus={false}
            infiniteLoop={props.infiniteLoop}
            interval={props.interval}
          >
            {props.list.map((object: IListItem) => {
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
  list: [
    {
      title: 'Reach even more talent, faster',
      subTitle:
        'Source faster, iterate an your outreach with that data, and see your efforts pay off.',
      imageUrl:
        'https://imgs.search.brave.com/PJYkFE3_wFpx2GrmYdDb8nav9tfctO9zsAI53ryttJI/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/WU01M21HMTBIX1Uy/NWlQam9wODNRSGFF/byZwaWQ9QXBp',
    },
    {
      title: 'Reach even more talent, faster',
      subTitle:
        'Source faster, iterate an your outreach with that data, and see your efforts pay off.',
      imageUrl:
        'https://imgs.search.brave.com/PJYkFE3_wFpx2GrmYdDb8nav9tfctO9zsAI53ryttJI/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/WU01M21HMTBIX1Uy/NWlQam9wODNRSGFF/byZwaWQ9QXBp',
    },
  ],
  infiniteLoop: true,
  autoPlay: true,
  showArrows: false,
  interval: 3000,
};
