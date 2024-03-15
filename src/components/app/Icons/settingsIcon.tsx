import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const SettingsSvg = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.33331 8.58667V7.41333C1.33331 6.72 1.89998 6.14667 2.59998 6.14667C3.80665 6.14667 4.29998 5.29333 3.69331 4.24667C3.34665 3.64667 3.55331 2.86667 4.15998 2.52L5.31331 1.86C5.83998 1.54666 6.51998 1.73333 6.83331 2.26L6.90665 2.38666C7.50665 3.43333 8.49331 3.43333 9.09998 2.38666L9.17331 2.26C9.48665 1.73333 10.1666 1.54666 10.6933 1.86L11.8466 2.52C12.4533 2.86667 12.66 3.64667 12.3133 4.24667C11.7066 5.29333 12.2 6.14667 13.4066 6.14667C14.1 6.14667 14.6733 6.71333 14.6733 7.41333V8.58667C14.6733 9.28 14.1066 9.85333 13.4066 9.85333C12.2 9.85333 11.7066 10.7067 12.3133 11.7533C12.66 12.36 12.4533 13.1333 11.8466 13.48L10.6933 14.14C10.1666 14.4533 9.48665 14.2667 9.17331 13.74L9.09998 13.6133C8.49998 12.5667 7.51331 12.5667 6.90665 13.6133L6.83331 13.74C6.51998 14.2667 5.83998 14.4533 5.31331 14.14L4.15998 13.48C3.55331 13.1333 3.34665 12.3533 3.69331 11.7533C4.29998 10.7067 3.80665 9.85333 2.59998 9.85333C1.89998 9.85333 1.33331 9.28 1.33331 8.58667Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SettingsIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={SettingsSvg} {...props} rev="" />
);

const MoreIconSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="#707070" d="M4 14a1.999 1.999 0 110-4 1.999 1.999 0 110 4z" />
    <path
      fill="#707070"
      stroke="#707070"
      d="M12 13.5a1.499 1.499 0 110-3 1.499 1.499 0 110 3z"
    />
    <path fill="#707070" d="M20 14a1.999 1.999 0 110-4 1.999 1.999 0 110 4z" />
  </svg>
);

interface IconProps {
  /** invoke onClick event function */
  onClick?: (event: React.MouseEvent) => void;
}
export const MoreIcon = (
  props: Partial<CustomIconComponentProps & IconProps>
) => <Icon component={MoreIconSvg} {...props} rev="" />;
