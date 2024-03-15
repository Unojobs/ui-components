/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StarFilled } from '@ant-design/icons';
import { Text } from '../../../primitives';
export interface CustomStarRatingProps {
  rating: number | undefined;
}
export const CustomStarRating = (props: CustomStarRatingProps) => {
  const { rating } = props;
  return rating && rating > 0 ? (
    <Text>
      {new Array(rating).fill(0).map((_, idx) => (
        <StarFilled key={idx} style={{ color: 'gold' }} rev="" />
      ))}
    </Text>
  ) : (
    <Text>No Rating</Text>
  );
};
