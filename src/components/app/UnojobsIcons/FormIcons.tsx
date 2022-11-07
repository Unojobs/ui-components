import React from 'react';
import { createIcon } from '../../primitives';

type IconProps = {
  fill?: string;
  size?: string | number;
};
export const AttachFileIcon = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 20 21',
    path: (
      <>
        <path
          d="M10.1664 10.3335L8.99138 11.5085C8.34138 12.1585 8.34138 13.2169 8.99138 13.8669C9.64138 14.5169 10.6997 14.5169 11.3497 13.8669L13.1998 12.0169C14.4998 10.7169 14.4998 8.60853 13.1998 7.3002C11.8998 6.0002 9.79139 6.0002 8.48306 7.3002L6.46641 9.31685C5.34974 10.4335 5.34974 12.2419 6.46641 13.3585"
          stroke={fill ? fill : '#111111'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        />
        <path
          d="M7.5013 18.8332H12.5013C16.668 18.8332 18.3346 17.1665 18.3346 12.9998V7.99984C18.3346 3.83317 16.668 2.1665 12.5013 2.1665H7.5013C3.33464 2.1665 1.66797 3.83317 1.66797 7.99984V12.9998C1.66797 17.1665 3.33464 18.8332 7.5013 18.8332Z"
          stroke={fill ? fill : '#111111'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        />
      </>
    ),
  });
  return <CustomIcon size={size ? size : 8} cursor="pointer" />;
};

export const LocationIcon = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 20 21',
    path: (
      <>
        <path
          d="M9.99844 11.6917C11.4344 11.6917 12.5984 10.5276 12.5984 9.0917C12.5984 7.65576 11.4344 6.4917 9.99844 6.4917C8.5625 6.4917 7.39844 7.65576 7.39844 9.0917C7.39844 10.5276 8.5625 11.6917 9.99844 11.6917Z"
          stroke={fill ? fill : '#111111'}
          strokeWidth="1.5"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        />
        <path
          d="M3.0148 7.57484C4.65646 0.358173 15.3481 0.366506 16.9815 7.58317C17.9398 11.8165 15.3065 15.3998 12.9981 17.6165C11.3231 19.2332 8.67313 19.2332 6.9898 17.6165C4.6898 15.3998 2.05646 11.8082 3.0148 7.57484Z"
          stroke={fill ? fill : '#111111'}
          strokeWidth="1.5"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        />
      </>
    ),
  });
  return <CustomIcon size={size ? size : 8} cursor="pointer" />;
};

export const CameraIcon = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 70 70',
    path: (
      <>
        <circle cx="35" cy="35" r="34.5" fill="white" stroke="#E7E7E7" />
        <path
          d="M29.7602 45H40.2402C43.0002 45 44.1002 43.31 44.2302 41.25L44.7502 32.99C44.8902 30.83 43.1702 29 41.0002 29C40.3902 29 39.8302 28.65 39.5502 28.11L38.8302 26.66C38.3702 25.75 37.1702 25 36.1502 25H33.8602C32.8302 25 31.6302 25.75 31.1702 26.66L30.4502 28.11C30.1702 28.65 29.6102 29 29.0002 29C26.8302 29 25.1102 30.83 25.2502 32.99L25.7702 41.25C25.8902 43.31 27.0002 45 29.7602 45Z"
          stroke="#111111"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
        />
        <path
          d="M33.5 31H36.5"
          stroke={fill ? fill : '#111111'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
        />
        <path
          d="M35 41C36.79 41 38.25 39.54 38.25 37.75C38.25 35.96 36.79 34.5 35 34.5C33.21 34.5 31.75 35.96 31.75 37.75C31.75 39.54 33.21 41 35 41Z"
          stroke={fill ? fill : '#111111'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
        />
      </>
    ),
  });
  return <CustomIcon size={size ? size : 12} cursor="pointer" />;
};
