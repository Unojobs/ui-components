import React from 'react';
import { createIcon } from '../../primitives';

type IconProps = {
  fill?: string;
  size?: string | number;
};
export const UnojobsDownArrowSharpIcon = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 8 4',
    path: (
      <path
        d="M.427.427l3.396 3.396a.25.25 0 00.354 0L7.573.427A.25.25 0 007.396 0H.604a.25.25 0 00-.177.427z"
        fill={fill ? fill : 'currentColor'}
      />
    ),
  });
  return <CustomIcon size={size ? size : 2.5} />;
};

export const UnojobsRightArrowCurvedIcon = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 6 9',
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
  return <CustomIcon size={size ? size : 2.5} />;
};

export const UnojobsDownArrowCurvedIcon = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 11 7',
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
  return <CustomIcon size={size ? size : 3} />;
};

export const LeftArrowIcon = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 24 24',
    path: (
      <>
        <path
          d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
          stroke={fill ? fill : '#111111'}
          strokeWidth="2.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
          fill="none"
        />
        <path
          d="M40.5019 12H3.67188"
          stroke={fill ? fill : '#111111'}
          strokeWidth="2.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
          fill="none"
        />
      </>
    ),
  });
  return <CustomIcon size={size ? size : 8} />;
};
