import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const DownSharpSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="4"
    fill="none"
    viewBox="0 0 8 4"
  >
    <path
      fill="#111"
      d="M.427.427l3.396 3.396a.25.25 0 00.354 0L7.573.427A.25.25 0 007.396 0H.604a.25.25 0 00-.177.427z"
    />
  </svg>
);

export const DownArrowSharpIcon = (
  props: Partial<CustomIconComponentProps>
) => <Icon component={DownSharpSvg} {...props} />;

const RightCurvedSvg = () => (
  <svg
    width="6"
    height="9"
    viewBox="0 0 6 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.71252 7.80001L4.42919 5.08335C4.75002 4.76251 4.75002 4.23751 4.42919 3.91668L1.71252 1.20001"
      stroke="#B7B7B7"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RightArrowCurvedIcon = (
  props: Partial<CustomIconComponentProps>
) => <Icon component={RightCurvedSvg} {...props} />;

/** DownArrow for sidemenu to expand items */
const DownCurvedSvg = () => (
  <svg
    width="18"
    height="8"
    viewBox="0 0 11 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.62 5.77919L6.81667 1.97585C6.3675 1.52669 5.6325 1.52669 5.18334 1.97585L1.38 5.77919"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DownArrowCurvedIcon = (
  props: Partial<CustomIconComponentProps>
) => <Icon component={DownCurvedSvg} {...props} />;

/** BackArrowSVG for sidemenu to expand items */
const BackArrowSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
      stroke="#000000"
      strokeWidth="2.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40.5019 12H3.67188"
      stroke="#000000"
      strokeWidth="2.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BackArrowIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={BackArrowSVG} {...props} />
);
