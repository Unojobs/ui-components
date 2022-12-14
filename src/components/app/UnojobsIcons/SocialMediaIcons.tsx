import React from 'react';
import { createIcon } from '../../primitives';

type IconProps = {
  fill?: string;
  size?: string | number;
};

export const FacebookSMLogo = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 24 24',
    path: (
      <>
        <g clipPath="url(#clip0_2810_98554)">
          <path
            d="M22.6754 24.0001C23.4068 24.0001 24 23.407 24 22.6755V1.32459C24 0.592969 23.4068 0 22.6754 0H1.32459C0.592875 0 0 0.592969 0 1.32459V22.6755C0 23.407 0.592875 24.0001 1.32459 24.0001H22.6754Z"
            fill={fill ? fill : '#395185'}
            width="24"
            height="24"
          />
          <path
            d="M16.5594 24.0003V14.7062H19.6792L20.1462 11.0841H16.5594V8.7715C16.5594 7.72281 16.8507 7.00816 18.3546 7.00816L20.2726 7.00731V3.76778C19.9407 3.72362 18.8022 3.625 17.4777 3.625C14.7123 3.625 12.8191 5.31297 12.8191 8.41291V11.0841H9.69141V14.7062H12.8191V24.0003H16.5594Z"
            fill="white"
            width="24"
            height="24"
          />
        </g>
        <defs>
          <clipPath id="clip0_2810_98554">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </>
    ),
  });
  return <CustomIcon size={size ? size : 8} />;
};

export const LinkedInSMLogo = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 24 24',
    path: (
      <>
        <path
          d="M20.4482 20.449H16.8921V14.8799C16.8921 13.552 16.8684 11.8424 15.0426 11.8424C13.1905 11.8424 12.9071 13.2894 12.9071 14.7833V20.4486H9.35115V8.99648H12.7649V10.5615H12.8127C13.1543 9.97739 13.648 9.49683 14.2411 9.17105C14.8343 8.84528 15.5047 8.68648 16.1809 8.71157C19.7852 8.71157 20.4497 11.0823 20.4497 14.1665L20.4482 20.449ZM5.33865 7.43113C4.19893 7.43132 3.27484 6.50751 3.27465 5.36779C3.27446 4.22807 4.19818 3.30398 5.3379 3.30379C6.47762 3.30351 7.40171 4.22732 7.4019 5.36704C7.402 5.91436 7.18468 6.4393 6.79775 6.82639C6.41082 7.21348 5.88596 7.43101 5.33865 7.43113ZM7.11671 20.4491H3.55693V8.99648H7.11662V20.449L7.11671 20.4491ZM22.221 0.00125846H1.77005C0.803492 -0.00961654 0.0108359 0.764665 -0.000976562 1.73123V22.2674C0.0104609 23.2345 0.803023 24.0095 1.76996 23.9994H22.221C23.19 24.0114 23.9856 23.2364 23.999 22.2674V1.72963C23.9852 0.761196 23.1895 -0.0129915 22.221 -0.000335291"
          fill={fill ? fill : '#0A66C2'}
          width="24"
          height="24"
        />
      </>
    ),
  });
  return <CustomIcon size={size ? size : 8} />;
};

export const GoogleSMLogo = ({ size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 20 20',
    path: (
      <>
        <g clipPath="url(#clip0_2810_98545)">
          <path
            d="M4.43242 12.0865L3.73625 14.6854L1.19176 14.7393C0.431328 13.3288 0 11.7151 0 10.0003C0 8.34203 0.403281 6.77828 1.11812 5.40137H1.11867L3.38398 5.81668L4.37633 8.0684C4.16863 8.67391 4.05543 9.32391 4.05543 10.0003C4.05551 10.7343 4.18848 11.4377 4.43242 12.0865Z"
            fill="#FBBB00"
            width="20"
            height="20"
          />
          <path
            d="M19.8242 8.13184C19.939 8.73676 19.9989 9.36148 19.9989 9.99996C19.9989 10.7159 19.9236 11.4143 19.7802 12.0879C19.2934 14.3802 18.0214 16.3818 16.2594 17.7983L16.2588 17.7978L13.4055 17.6522L13.0017 15.1313C14.1709 14.4456 15.0847 13.3725 15.566 12.0879H10.2188V8.13184H15.644H19.8242Z"
            fill="#518EF8"
            width="20"
            height="20"
          />
          <path
            d="M16.259 17.7975L16.2596 17.798C14.5459 19.1755 12.3689 19.9996 9.99916 19.9996C6.19092 19.9996 2.87994 17.8711 1.19092 14.7387L4.43158 12.0859C5.27607 14.3398 7.45025 15.9442 9.99916 15.9442C11.0947 15.9442 12.1212 15.648 13.0019 15.131L16.259 17.7975Z"
            fill="#28B446"
            width="20"
            height="20"
          />
          <path
            d="M16.384 2.30219L13.1444 4.95437C12.2329 4.38461 11.1554 4.05547 10.001 4.05547C7.39441 4.05547 5.17957 5.73348 4.37738 8.06812L1.11969 5.40109H1.11914C2.78344 2.1923 6.13617 0 10.001 0C12.4274 0 14.6521 0.864297 16.384 2.30219Z"
            fill="#F14336"
            width="20"
            height="20"
          />
        </g>
        <defs>
          <clipPath id="clip0_2810_98545">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </>
    ),
  });
  return <CustomIcon size={size ? size : 8} />;
};
