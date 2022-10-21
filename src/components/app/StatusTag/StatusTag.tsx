import { HStack } from '../../primitives';
import React from 'react';
import { Badge } from '../../composites';

export interface IStatusTagProps {
  backgroundColor?: string;
  textColor?: string;
  children?: React.ReactNode;
}
export const StatusTag: React.FC<IStatusTagProps> = (props) => {
  const { backgroundColor, textColor, children } = props;
  return (
    <HStack>
      <Badge
        backgroundColor={backgroundColor || '#ECF8FD'}
        _text={{
          color: textColor || '#00BAFB',
          fontWeight: 500,
          fontSize: 'sm',
        }}
        borderRadius="10px"
        paddingX="10px"
        paddingY="5px"
      >
        {children}
      </Badge>
    </HStack>
  );
};
