import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const UserSvg = () => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 3.33331C3 4.98731 4.346 6.33331 6 6.33331C7.654 6.33331 9 4.98731 9 3.33331C9 1.67931 7.654 0.333313 6 0.333313C4.346 0.333313 3 1.67931 3 3.33331ZM11.3333 13H12V12.3333C12 9.76065 9.906 7.66665 7.33333 7.66665H4.66667C2.09333 7.66665 0 9.76065 0 12.3333V13H11.3333Z"
      fill="currentColor"
    />
  </svg>
);

export const UserIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={UserSvg} {...props} />
);

const UserBoxSvg = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3333 1.33334H5.33333C4.97971 1.33334 4.64057 1.47382 4.39052 1.72387C4.14048 1.97392 4 2.31305 4 2.66668V10.6667C4 11.0203 4.14048 11.3594 4.39052 11.6095C4.64057 11.8595 4.97971 12 5.33333 12H13.3333C13.687 12 14.0261 11.8595 14.2761 11.6095C14.5262 11.3594 14.6667 11.0203 14.6667 10.6667V2.66668C14.6667 2.31305 14.5262 1.97392 14.2761 1.72387C14.0261 1.47382 13.687 1.33334 13.3333 1.33334ZM9.33333 3.00001C9.77536 3.00001 10.1993 3.1756 10.5118 3.48817C10.8244 3.80073 11 4.22465 11 4.66668C11 5.1087 10.8244 5.53263 10.5118 5.84519C10.1993 6.15775 9.77536 6.33334 9.33333 6.33334C8.89131 6.33334 8.46738 6.15775 8.15482 5.84519C7.84226 5.53263 7.66667 5.1087 7.66667 4.66668C7.66667 4.22465 7.84226 3.80073 8.15482 3.48817C8.46738 3.1756 8.89131 3.00001 9.33333 3.00001ZM12.6667 10H6V9.83334C6 8.60068 7.50267 7.33334 9.33333 7.33334C11.164 7.33334 12.6667 8.60068 12.6667 9.83334V10Z"
      fill="currentColor"
    />
    <path
      d="M2.66665 5.33334H1.33331V13.3333C1.33331 14.0687 1.93131 14.6667 2.66665 14.6667H10.6666V13.3333H2.66665V5.33334Z"
      fill="currentColor"
    />
  </svg>
);

export const UserBoxIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={UserBoxSvg} {...props} />
);

const UserGroupSvg = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6867 5.18004C11.64 5.17337 11.5934 5.17337 11.5467 5.18004C10.5134 5.14671 9.69336 4.30004 9.69336 3.26004C9.69336 2.20004 10.5534 1.33337 11.62 1.33337C12.68 1.33337 13.5467 2.19337 13.5467 3.26004C13.54 4.30004 12.72 5.14671 11.6867 5.18004Z"
      fill="currentColor"
    />
    <path
      d="M13.86 9.80002C13.1134 10.3 12.0667 10.4867 11.1 10.36C11.3534 9.81336 11.4867 9.20669 11.4934 8.56669C11.4934 7.90003 11.3467 7.26669 11.0667 6.71336C12.0534 6.58002 13.1 6.76669 13.8534 7.26669C14.9067 7.96002 14.9067 9.10002 13.86 9.80002Z"
      fill="currentColor"
    />
    <path
      d="M4.29327 5.18004C4.33994 5.17337 4.38661 5.17337 4.43327 5.18004C5.46661 5.14671 6.28661 4.30004 6.28661 3.26004C6.28661 2.19337 5.42661 1.33337 4.35994 1.33337C3.29994 1.33337 2.43994 2.19337 2.43994 3.26004C2.43994 4.30004 3.25994 5.14671 4.29327 5.18004Z"
      fill="currentColor"
    />
    <path
      d="M4.36674 8.5667C4.36674 9.21336 4.50674 9.8267 4.76008 10.38C3.82008 10.48 2.84008 10.28 2.12008 9.8067C1.06674 9.1067 1.06674 7.96669 2.12008 7.26669C2.83341 6.78669 3.84008 6.59336 4.78674 6.70003C4.51341 7.26003 4.36674 7.89336 4.36674 8.5667Z"
      fill="currentColor"
    />
    <path
      d="M8.08001 10.58C8.02668 10.5733 7.96668 10.5733 7.90668 10.58C6.68001 10.54 5.70001 9.53333 5.70001 8.29333C5.70668 7.02667 6.72668 6 8.00001 6C9.26668 6 10.2933 7.02667 10.2933 8.29333C10.2867 9.53333 9.31335 10.54 8.08001 10.58Z"
      fill="currentColor"
    />
    <path
      d="M5.91339 11.96C4.90672 12.6333 4.90672 13.74 5.91339 14.4067C7.06005 15.1733 8.94005 15.1733 10.0867 14.4067C11.0934 13.7333 11.0934 12.6267 10.0867 11.96C8.94672 11.1933 7.06672 11.1933 5.91339 11.96Z"
      fill="currentColor"
    />
  </svg>
);

export const UserGroupIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={UserGroupSvg} {...props} />
);
