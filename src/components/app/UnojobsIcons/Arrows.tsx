import React from 'react';
import { createIcon } from 'src/components/primitives';

type IconProps = {
  fill?: string;
  size?: string | number;
};
export const UnojobsDownArrowSharpIcon = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 36 36',
    path: (
      <path
        d="M.427.427l3.396 3.396a.25.25 0 00.354 0L7.573.427A.25.25 0 007.396 0H.604a.25.25 0 00-.177.427z"
        fill={fill ? fill : 'currentColor'}
      />
    ),
  });
  return <CustomIcon size={size ? size : 10} />;
};

export const UnojobsRightArrowCurvedIcon = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 36 36',
    path: (
      <path
        d="M1.71252 7.80001L4.42919 5.08335C4.75002 4.76251 4.75002 4.23751 4.42919 3.91668L1.71252 1.20001"
        stroke={fill ? fill : 'currentColor'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  });
  return <CustomIcon size={size ? size : 10} />;
};

export const UnojobsDownArrowCurvedIcon = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 36 36',
    path: (
      <path
        d="M10.62 5.77919L6.81667 1.97585C6.3675 1.52669 5.6325 1.52669 5.18334 1.97585L1.38 5.77919"
        stroke={fill ? fill : 'currentColor'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  });
  return <CustomIcon size={size ? size : 10} />;
};
