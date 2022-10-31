import React from 'react';
import { Text } from '../../primitives';
import { Badge, Center } from '../../composites';

export const LandingBadge = (props: { children: string; isCaps?: boolean }) => {
  return (
    <Center>
      <Badge bgColor="landingBackground.500" borderRadius="full" px="6" py="2">
        <Text fontSize="xs" fontWeight="bold">
          {props.isCaps ? props.children.toUpperCase() : props.children}
        </Text>
      </Badge>
    </Center>
  );
};

LandingBadge.defaultProps = {
  children: 'Badge',
  isCaps: true,
};
