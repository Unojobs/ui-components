import React from 'react';
import { AppColors } from 'src/components/utils/colors';

export const UnojobsLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="none"
      viewBox="0 0 50 50"
    >
      <rect width="50" height="50" fill={AppColors.primaryColor} rx="5" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M15 23.061a1.94 1.94 0 011.94 1.94v1.5a8.56 8.56 0 0017.121 0V25a1.94 1.94 0 013.878 0v1.5c0 6.869-5.57 12.438-12.439 12.438-6.87 0-12.439-5.57-12.439-12.439V25c0-1.07.868-1.939 1.94-1.939z"
        clipRule="evenodd"
      />
      <circle cx="14.5" cy="15.5" r="2.5" fill="#fff" />
      <circle cx="35.829" cy="15.5" r="2.5" fill="#fff" />
    </svg>
  );
};
