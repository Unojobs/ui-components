import React from 'react';
import { createIcon } from '../../primitives';

type IconProps = {
  fill?: string;
  size?: string | number;
};

export const UnojobsUpArrowRoundIcon = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 24 25',
    path: (
      <>
        <path
          opacity="0.4"
          d="M12 22.5713C17.5228 22.5713 22 18.0941 22 12.5713C22 7.04844 17.5228 2.57129 12 2.57129C6.47715 2.57129 2 7.04844 2 12.5713C2 18.0941 6.47715 22.5713 12 22.5713Z"
          fill={fill ? fill : 'currentColor'}
        />
        <path
          d="M12.0002 15.5812C11.8102 15.5812 11.6202 15.5112 11.4702 15.3612L7.94016 11.8312C7.65016 11.5412 7.65016 11.0612 7.94016 10.7712C8.23016 10.4812 8.71016 10.4812 9.00016 10.7712L12.0002 13.7712L15.0002 10.7712C15.2902 10.4812 15.7702 10.4812 16.0602 10.7712C16.3502 11.0612 16.3502 11.5412 16.0602 11.8312L12.5302 15.3612C12.3802 15.5112 12.1902 15.5812 12.0002 15.5812Z"
          fill={fill ? fill : 'currentColor'}
        />
      </>
    ),
  });
  return <CustomIcon size={size ? size : 6} />;
};

UnojobsUpArrowRoundIcon.defaultProps = {
  fill: '#4169E0',
  size: 6,
};

export const UnojobsDownArrowRoundIcon = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 24 25',
    path: (
      <path
        d="M12 22.0713C6.49 22.0713 2 17.5813 2 12.0713C2 6.56129 6.49 2.07129 12 2.07129C17.51 2.07129 22 6.56129 22 12.0713C22 17.5813 17.51 22.0713 12 22.0713ZM16.06 12.8013L12.53 9.27129C12.38 9.12129 12.19 9.05129 12 9.05129C11.81 9.05129 11.62 9.12129 11.47 9.27129L7.94 12.8013C7.65 13.0913 7.65 13.5713 7.94 13.8613C8.23 14.1513 8.71 14.1513 9 13.8613L12 10.8613L15 13.8613C15.29 14.1513 15.77 14.1513 16.06 13.8613C16.35 13.5713 16.35 13.1013 16.06 12.8013Z"
        fill={fill ? fill : 'currentColor'}
      />
    ),
  });
  return <CustomIcon size={size ? size : 6} />;
};

UnojobsDownArrowRoundIcon.defaultProps = {
  fill: '#4169E0',
  size: 6,
};

export const UnojobsAppLogo = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: `0 0 ${size} ${size}`,
    path: (
      <>
        <rect
          width={size ? size : 50}
          height={size ? size : 50}
          fill={fill ? fill : 'currentColor'}
          rx="5"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M15 23.061a1.94 1.94 0 011.94 1.94v1.5a8.56 8.56 0 0017.121 0V25a1.94 1.94 0 013.878 0v1.5c0 6.869-5.57 12.438-12.439 12.438-6.87 0-12.439-5.57-12.439-12.439V25c0-1.07.868-1.939 1.94-1.939z"
          clipRule="evenodd"
        />
        <circle cx="14.5" cy="15.5" r="2.5" fill="#fff" />
        <circle cx="35.829" cy="15.5" r="2.5" fill="#fff" />
      </>
    ),
  });
  return <CustomIcon size={size ? size : 50} />;
};

UnojobsAppLogo.defaultProps = {
  fill: '#4169E0',
  size: 50,
};
