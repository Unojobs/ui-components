import React from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const WindowFilledSvg = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.666667 6.66667H4.66667C5.03333 6.66667 5.33333 6.36667 5.33333 6V0.666667C5.33333 0.3 5.03333 0 4.66667 0H0.666667C0.3 0 0 0.3 0 0.666667V6C0 6.36667 0.3 6.66667 0.666667 6.66667ZM0.666667 12H4.66667C5.03333 12 5.33333 11.7 5.33333 11.3333V8.66667C5.33333 8.3 5.03333 8 4.66667 8H0.666667C0.3 8 0 8.3 0 8.66667V11.3333C0 11.7 0.3 12 0.666667 12ZM7.33333 12H11.3333C11.7 12 12 11.7 12 11.3333V6C12 5.63333 11.7 5.33333 11.3333 5.33333H7.33333C6.96667 5.33333 6.66667 5.63333 6.66667 6V11.3333C6.66667 11.7 6.96667 12 7.33333 12ZM6.66667 0.666667V3.33333C6.66667 3.7 6.96667 4 7.33333 4H11.3333C11.7 4 12 3.7 12 3.33333V0.666667C12 0.3 11.7 0 11.3333 0H7.33333C6.96667 0 6.66667 0.3 6.66667 0.666667Z"
      fill="currentColor"
    />
  </svg>
);

export const WindowFilledIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={WindowFilledSvg} {...props} rev="" />
);
