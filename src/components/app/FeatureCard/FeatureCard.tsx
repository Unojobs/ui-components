import React from 'react';
import type { FeatureCardProps } from './types';
import { Box, Heading, Image, Text, VStack } from 'src/components/primitives';
import { Badge } from 'src/components/composites';

export const FeatureCard = (props: FeatureCardProps): JSX.Element => {
  const { badgeText, title, description, imgSrc, imgAltText, direction } =
    props;
  return (
    <Box
      display="flex"
      flexDirection={['column', direction ? direction : 'row']}
      justifyContent="space-between"
      alignItems="center"
      maxWidth="100%"
      width={1200}
    >
      <VStack space={2} alignItems="flex-start" maxW={406}>
        <Badge variant="subtle" borderRadius="full">
          <Text fontSize="xs" bold>
            {badgeText}
          </Text>
        </Badge>
        <VStack space={3}>
          <Heading lineHeight="120%">{title}</Heading>
          <Text color="gray.400" lineHeight="140%">
            {description}
          </Text>
        </VStack>
      </VStack>
      <Box mt={[6, 0]}>
        <Image
          source={{
            uri: imgSrc,
          }}
          alt={imgAltText}
          size="2xl"
        />
      </Box>
    </Box>
  );
};

FeatureCard.defaultProps = {
  badgeText: 'VIDEO RESUME',
  title: 'Video Resume That Can Be Your Consideration',
  description:
    'Unojob has 4 main features to make it easier for you to find workers that match your company. Easy, Friendly. Impactly Employers are able to fil positions fast with high quality candidates.',
  imgSrc:
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  imgAltText: 'Productivity',
};
