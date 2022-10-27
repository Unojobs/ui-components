import React from 'react';
import { Box, VStack, Text } from '../../primitives';
import { Skeleton } from 'antd';
import './styles.left-side-screen.css';
import type { ILeftSideScreenProps } from './types';

export const LeftSideScreen = (props: ILeftSideScreenProps) => {
  const { title, subTitle } = props;
  return (
    <div className="left-side-bar-info">
      <Box
        backgroundColor={'black'}
        width={{ sm: 'none', md: '32em', lg: '40em', xl: '787px' }}
        minHeight={'100vh'}
        position="relative"
        display={{ sm: 'none', md: 'block' }}
      >
        <VStack
          position={'fixed'}
          top={'30%'}
          padding={'20px'}
          width={{ sm: 'none', md: '32em', lg: '40em', xl: '787px' }}
        >
          {' '}
          <Skeleton
            active
            avatar
            paragraph={{ rows: 2 }}
            style={{
              maxWidth: '670px',
              maxHeight: '400px',
              padding: 30,
              backgroundColor: 'white',
              marginBottom: 20,
              borderRadius: '8px',
            }}
          />
          <Text
            color="#FFFFFF"
            margin="0"
            marginBottom="10"
            fontSize="36px"
            display="block"
          >
            {title}
          </Text>
          <Text
            color="#EEEEEE"
            margin="0"
            marginBottom="10"
            fontSize="18px"
            display="block"
            maxWidth="400px"
          >
            {subTitle}
          </Text>
        </VStack>
      </Box>
    </div>
  );
};

LeftSideScreen.defaultProps = {
  title: 'Reach even more talent, faster',
  subTitle:
    'Source faster, iterate an your outreach with that data, and see your efforts pay off.',
  imageUrl: '',
};
