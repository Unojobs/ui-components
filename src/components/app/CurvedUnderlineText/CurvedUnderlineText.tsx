import { Text, createIcon } from '../../primitives';
import React from 'react';

type CurvedUnderlineTitleProps = {
  children?: React.ReactNode;
};

export const CurvedUnderlineText: React.FC<CurvedUnderlineTitleProps> = (
  props
) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 260 13',
    path: (
      <>
        <path
          d="M1.00019 7.39526C56.9507 3.68191 272 -5.5 257.5 11.5001"
          stroke="#0066FF"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </>
    ),
  });

  return (
    <Text position="relative">
      <Text color="primary.300">{props.children}</Text>
      <Text position="absolute" left={0} top="20%" zIndex={-1} width="full">
        <CustomIcon size="100%" />
      </Text>
    </Text>
  );
};
