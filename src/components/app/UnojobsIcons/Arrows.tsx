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

export const CircularRightArrowIcon = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 16 17',
    path: (
      <>
        <path
          d="M7.99967 15.6668C4.04634 15.6668 0.833008 12.4535 0.833008 8.50016C0.833008 4.54683 4.04634 1.3335 7.99967 1.3335C11.953 1.3335 15.1663 4.54683 15.1663 8.50016C15.1663 12.4535 11.953 15.6668 7.99967 15.6668ZM7.99967 2.3335C4.59967 2.3335 1.83301 5.10016 1.83301 8.50016C1.83301 11.9002 4.59967 14.6668 7.99967 14.6668C11.3997 14.6668 14.1663 11.9002 14.1663 8.50016C14.1663 5.10016 11.3997 2.3335 7.99967 2.3335Z"
          fill={fill ? fill : '#4169E0'}
          width="16"
          height="17"
        />
        <path
          d="M9.66699 9H5.66699C5.39366 9 5.16699 8.77333 5.16699 8.5C5.16699 8.22667 5.39366 8 5.66699 8H9.66699C9.94033 8 10.167 8.22667 10.167 8.5C10.167 8.77333 9.94033 9 9.66699 9Z"
          fill={fill ? fill : '#4169E0'}
          width="16"
          height="17"
        />
        <path
          d="M8.33329 10.9998C8.20663 10.9998 8.07996 10.9531 7.97996 10.8531C7.78663 10.6598 7.78663 10.3398 7.97996 10.1465L9.62663 8.4998L7.97996 6.85313C7.78663 6.6598 7.78663 6.3398 7.97996 6.14646C8.17329 5.95313 8.49329 5.95313 8.68663 6.14646L10.6866 8.14646C10.88 8.3398 10.88 8.6598 10.6866 8.85313L8.68663 10.8531C8.58663 10.9531 8.45996 10.9998 8.33329 10.9998Z"
          fill={fill ? fill : '#4169E0'}
          width="16"
          height="17"
        />
      </>
    ),
  });
  return <CustomIcon size={size ? size : 8} />;
};

export const CircularWrongIcon = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 16 17',
    path: (
      <>
        <path
          d="M8.00016 15.6668C4.04683 15.6668 0.833496 12.4535 0.833496 8.50016C0.833496 4.54683 4.04683 1.3335 8.00016 1.3335C11.9535 1.3335 15.1668 4.54683 15.1668 8.50016C15.1668 12.4535 11.9535 15.6668 8.00016 15.6668ZM8.00016 2.3335C4.60016 2.3335 1.8335 5.10016 1.8335 8.50016C1.8335 11.9002 4.60016 14.6668 8.00016 14.6668C11.4002 14.6668 14.1668 11.9002 14.1668 8.50016C14.1668 5.10016 11.4002 2.3335 8.00016 2.3335Z"
          fill={fill ? fill : '#DB3756'}
          width="16"
          height="17"
        />
        <path
          d="M6.11357 10.8869C5.9869 10.8869 5.86023 10.8402 5.76023 10.7402C5.5669 10.5469 5.5669 10.2269 5.76023 10.0336L9.53357 6.26023C9.7269 6.0669 10.0469 6.0669 10.2402 6.26023C10.4336 6.45357 10.4336 6.77357 10.2402 6.9669L6.4669 10.7402C6.37357 10.8402 6.24023 10.8869 6.11357 10.8869Z"
          fill={fill ? fill : '#DB3756'}
          width="16"
          height="17"
        />
        <path
          d="M9.8869 10.8869C9.76023 10.8869 9.63357 10.8402 9.53357 10.7402L5.76023 6.9669C5.5669 6.77357 5.5669 6.45357 5.76023 6.26023C5.95357 6.0669 6.27357 6.0669 6.4669 6.26023L10.2402 10.0336C10.4336 10.2269 10.4336 10.5469 10.2402 10.7402C10.1402 10.8402 10.0136 10.8869 9.8869 10.8869Z"
          fill={fill ? fill : '#DB3756'}
          width="16"
          height="17"
        />
      </>
    ),
  });
  return <CustomIcon size={size ? size : 8} />;
};

export const CircularCorrectIcon = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 16 17',
    path: (
      <>
        <path
          d="M7.99967 15.6668C4.04634 15.6668 0.833008 12.4535 0.833008 8.50016C0.833008 4.54683 4.04634 1.3335 7.99967 1.3335C11.953 1.3335 15.1663 4.54683 15.1663 8.50016C15.1663 12.4535 11.953 15.6668 7.99967 15.6668ZM7.99967 2.3335C4.59967 2.3335 1.83301 5.10016 1.83301 8.50016C1.83301 11.9002 4.59967 14.6668 7.99967 14.6668C11.3997 14.6668 14.1663 11.9002 14.1663 8.50016C14.1663 5.10016 11.3997 2.3335 7.99967 2.3335Z"
          fill={fill ? fill : '#3BA285'}
          width="16"
          height="17"
        />
        <path
          d="M7.05297 10.8867C6.91964 10.8867 6.79297 10.8334 6.69964 10.7401L4.81297 8.8534C4.61964 8.66007 4.61964 8.34007 4.81297 8.14673C5.0063 7.9534 5.3263 7.9534 5.51964 8.14673L7.05297 9.68007L10.4796 6.2534C10.673 6.06007 10.993 6.06007 11.1863 6.2534C11.3796 6.44673 11.3796 6.76673 11.1863 6.96006L7.4063 10.7401C7.31297 10.8334 7.1863 10.8867 7.05297 10.8867Z"
          fill={fill ? fill : '#3BA285'}
          width="16"
          height="17"
        />
      </>
    ),
  });
  return <CustomIcon size={size ? size : 8} />;
};
export const UnojobsLeftArrowCurvedIcon = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 24 24',
    path: (
      <path
        d="M14.5 6L8.5 12L14.5 18"
        stroke={fill ? fill : 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  });
  return <CustomIcon size={size ? size : 4} />;
};
