import React from 'react';
import { createIcon } from '../../primitives';

type IconProps = {
  fill?: string;
  size?: string | number;
};
export const CallIcon = ({ size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 20 20',
    path: (
      <path
        d="M18.3096 15.2763C18.3096 15.5763 18.243 15.8846 18.1013 16.1846C17.9596 16.4846 17.7763 16.768 17.5346 17.0346C17.1263 17.4846 16.6763 17.8096 16.168 18.018C15.668 18.2263 15.1263 18.3346 14.543 18.3346C13.693 18.3346 12.7846 18.1346 11.8263 17.7263C10.868 17.318 9.90964 16.768 8.95964 16.0763C8.0013 15.3763 7.09297 14.6013 6.2263 13.743C5.36797 12.8763 4.59297 11.968 3.9013 11.018C3.21797 10.068 2.66797 9.11797 2.26797 8.1763C1.86797 7.2263 1.66797 6.31797 1.66797 5.4513C1.66797 4.88464 1.76797 4.34297 1.96797 3.84297C2.16797 3.33464 2.48464 2.86797 2.9263 2.4513C3.45964 1.9263 4.04297 1.66797 4.65964 1.66797C4.89297 1.66797 5.1263 1.71797 5.33464 1.81797C5.5513 1.91797 5.74297 2.06797 5.89297 2.28464L7.8263 5.00964C7.9763 5.21797 8.08464 5.40964 8.15964 5.59297C8.23464 5.76797 8.2763 5.94297 8.2763 6.1013C8.2763 6.3013 8.21797 6.5013 8.1013 6.69297C7.99297 6.88464 7.83464 7.08464 7.63464 7.28464L7.0013 7.94297C6.90964 8.03464 6.86797 8.14297 6.86797 8.2763C6.86797 8.34297 6.8763 8.4013 6.89297 8.46797C6.91797 8.53464 6.94297 8.58464 6.95964 8.63464C7.10964 8.90964 7.36797 9.26797 7.73464 9.7013C8.10964 10.1346 8.50964 10.5763 8.94297 11.018C9.39297 11.4596 9.8263 11.868 10.268 12.243C10.7013 12.6096 11.0596 12.8596 11.343 13.0096C11.3846 13.0263 11.4346 13.0513 11.493 13.0763C11.5596 13.1013 11.6263 13.1096 11.7013 13.1096C11.843 13.1096 11.9513 13.0596 12.043 12.968L12.6763 12.343C12.8846 12.1346 13.0846 11.9763 13.2763 11.8763C13.468 11.7596 13.6596 11.7013 13.868 11.7013C14.0263 11.7013 14.193 11.7346 14.3763 11.8096C14.5596 11.8846 14.7513 11.993 14.9596 12.1346L17.718 14.093C17.9346 14.243 18.0846 14.418 18.1763 14.6263C18.2596 14.8346 18.3096 15.043 18.3096 15.2763Z"
        stroke="#66B949"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        fill="none"
      />
    ),
  });
  return <CustomIcon size={size ? size : 4} />;
};

export const SMSIcon = ({ size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 20 20',

    path: (
      <>
        <path
          d="M7.08464 15.8346H6.66797C3.33464 15.8346 1.66797 15.0013 1.66797 10.8346V6.66797C1.66797 3.33464 3.33464 1.66797 6.66797 1.66797H13.3346C16.668 1.66797 18.3346 3.33464 18.3346 6.66797V10.8346C18.3346 14.168 16.668 15.8346 13.3346 15.8346H12.918C12.6596 15.8346 12.4096 15.9596 12.2513 16.168L11.0013 17.8346C10.4513 18.568 9.5513 18.568 9.0013 17.8346L7.7513 16.168C7.61797 15.9846 7.30964 15.8346 7.08464 15.8346Z"
          stroke="#4169E0"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M13.3301 9.16667H13.3375"
          stroke="#4169E0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M9.99803 9.16667H10.0055"
          stroke="#4169E0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M6.66209 9.16667H6.66957"
          stroke="#4169E0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </>
    ),
  });
  return <CustomIcon size={size ? size : 4} />;
};

export const EmailIcon = ({ size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 20 20',
    path: (
      <>
        <path
          d="M14.168 17.0846H5.83464C3.33464 17.0846 1.66797 15.8346 1.66797 12.918V7.08464C1.66797 4.16797 3.33464 2.91797 5.83464 2.91797H14.168C16.668 2.91797 18.3346 4.16797 18.3346 7.08464V12.918C18.3346 15.8346 16.668 17.0846 14.168 17.0846Z"
          stroke="#EB5757"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M14.1654 7.5L11.557 9.58333C10.6987 10.2667 9.29036 10.2667 8.43203 9.58333L5.83203 7.5"
          stroke="#EB5757"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </>
    ),
  });
  return <CustomIcon size={size ? size : 4} />;
};

export const PrintIcon = ({ size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 16 16',
    path: (
      <>
        <path
          d="M4.83203 4.66536H11.1654V3.33203C11.1654 1.9987 10.6654 1.33203 9.16536 1.33203H6.83203C5.33203 1.33203 4.83203 1.9987 4.83203 3.33203V4.66536Z"
          stroke="#707070"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M10.6654 10V12.6667C10.6654 14 9.9987 14.6667 8.66536 14.6667H7.33203C5.9987 14.6667 5.33203 14 5.33203 12.6667V10H10.6654Z"
          stroke="#707070"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M14 6.66797V10.0013C14 11.3346 13.3333 12.0013 12 12.0013H10.6667V10.0013H5.33333V12.0013H4C2.66667 12.0013 2 11.3346 2 10.0013V6.66797C2 5.33464 2.66667 4.66797 4 4.66797H12C13.3333 4.66797 14 5.33464 14 6.66797Z"
          stroke="#707070"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M11.3346 10H10.528H4.66797"
          stroke="#707070"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M4.66797 7.33203H6.66797"
          stroke="#111111"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </>
    ),
  });
  return <CustomIcon size={size ? size : 4} />;
};

export const DownLoadIcon = ({ size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 16 16',
    path: (
      <>
        <path
          d="M6 7.33203V11.332L7.33333 9.9987"
          stroke="#707070"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M6.0013 11.3333L4.66797 10"
          stroke="#707070"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M14.6654 6.66536V9.9987C14.6654 13.332 13.332 14.6654 9.9987 14.6654H5.9987C2.66536 14.6654 1.33203 13.332 1.33203 9.9987V5.9987C1.33203 2.66536 2.66536 1.33203 5.9987 1.33203H9.33203"
          stroke="#707070"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M14.6654 6.66536H11.9987C9.9987 6.66536 9.33203 5.9987 9.33203 3.9987V1.33203L14.6654 6.66536Z"
          stroke="#707070"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </>
    ),
  });
  return <CustomIcon size={size ? size : 4} />;
};
