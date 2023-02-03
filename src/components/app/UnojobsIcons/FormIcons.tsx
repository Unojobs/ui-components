import React from 'react';
import { createIcon } from '../../primitives';
import { Path } from 'react-native-svg';
import { Icon } from 'native-base';
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

export const UnoEmailIcon = ({ fill, size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 20 21',
    path: (
      <>
        <path
          d="M14.1666 17.5827H5.83329C3.33329 17.5827 1.66663 16.3327 1.66663 13.416V7.58268C1.66663 4.66602 3.33329 3.41602 5.83329 3.41602H14.1666C16.6666 3.41602 18.3333 4.66602 18.3333 7.58268V13.416C18.3333 16.3327 16.6666 17.5827 14.1666 17.5827Z"
          stroke={fill ? fill : '#111111'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="20"
          height="21"
          fill="none"
        />
        <path
          d="M14.1667 8L11.5584 10.0833C10.7 10.7667 9.2917 10.7667 8.43337 10.0833L5.83337 8"
          stroke={fill ? fill : '#111111'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="20"
          height="21"
          fill="none"
        />
      </>
    ),
  });
  return <CustomIcon size={size ? size : 5} cursor="pointer" />;
};

export const UploadIcon = (props: any) => {
  return (
    <Icon color="transparent" fill="none" {...props} viewBox="0 0 17 16">
      <Path
        d="M6.5013 11.3335V7.3335L5.16797 8.66683"
        stroke="#1974FC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.5 7.3335L7.83333 8.66683"
        stroke="#1974FC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.1654 6.66683V10.0002C15.1654 13.3335 13.832 14.6668 10.4987 14.6668H6.4987C3.16536 14.6668 1.83203 13.3335 1.83203 10.0002V6.00016C1.83203 2.66683 3.16536 1.3335 6.4987 1.3335H9.83203"
        stroke="#1974FC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.1654 6.66683H12.4987C10.4987 6.66683 9.83203 6.00016 9.83203 4.00016V1.3335L15.1654 6.66683Z"
        stroke="#1974FC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export const EditOutlinedIcon = (props: any) => {
  return (
    <Icon color="transparent" fill="none" {...props} viewBox="0 0 24 24">
      <Path
        d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
        stroke="#1974FC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.0399 3.02025L8.15988 10.9003C7.85988 11.2003 7.55988 11.7903 7.49988 12.2203L7.06988 15.2303C6.90988 16.3203 7.67988 17.0803 8.76988 16.9303L11.7799 16.5003C12.1999 16.4403 12.7899 16.1403 13.0999 15.8403L20.9799 7.96025C22.3399 6.60025 22.9799 5.02025 20.9799 3.02025C18.9799 1.02025 17.3999 1.66025 16.0399 3.02025Z"
        stroke="#1974FC"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.9102 4.15039C15.5802 6.54039 17.4502 8.41039 19.8502 9.09039"
        stroke="#1974FC"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export const DeleteOutlinedIcon = (props: any) => {
  return (
    <Icon color="transparent" fill="none" {...props} viewBox="0 0 24 24">
      <Path
        d="M21 5.98047C17.67 5.65047 14.32 5.48047 10.98 5.48047C9 5.48047 7.02 5.58047 5.04 5.78047L3 5.98047"
        stroke="#EB5757"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
        stroke="#EB5757"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.8504 9.13965L18.2004 19.2096C18.0904 20.7796 18.0004 21.9996 15.2104 21.9996H8.79039C6.00039 21.9996 5.91039 20.7796 5.80039 19.2096L5.15039 9.13965"
        stroke="#EB5757"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.3301 16.5H13.6601"
        stroke="#EB5757"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.5 12.5H14.5"
        stroke="#EB5757"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export const AddOutlinedIcon = (props: any) => {
  return (
    <Icon color="transparent" fill="none" {...props} viewBox="0 0 16 17">
      <Path
        d="M8.50065 14.6663C12.1673 14.6663 15.1673 11.6663 15.1673 7.99967C15.1673 4.33301 12.1673 1.33301 8.50065 1.33301C4.83398 1.33301 1.83398 4.33301 1.83398 7.99967C1.83398 11.6663 4.83398 14.6663 8.50065 14.6663Z"
        stroke="#1974FC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.83398 8H11.1673"
        stroke="#1974FC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 10.6663V5.33301"
        stroke="#1974FC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export const UnoStepCompleteIcon = (props: any) => {
  return (
    <Icon color="transparent" fill="none" {...props} viewBox="0 0 40 40">
      <rect width="40" height="40" rx="20" fill="#89D860" />
      <path
        d="M20.0007 10.8335C14.9498 10.8335 10.834 14.9493 10.834 20.0002C10.834 25.051 14.9498 29.1668 20.0007 29.1668C25.0515 29.1668 29.1673 25.051 29.1673 20.0002C29.1673 14.9493 25.0515 10.8335 20.0007 10.8335ZM24.3823 17.8918L19.1848 23.0893C19.0565 23.2177 18.8823 23.291 18.699 23.291C18.5157 23.291 18.3415 23.2177 18.2132 23.0893L15.619 20.4952C15.3532 20.2293 15.3532 19.7893 15.619 19.5235C15.8848 19.2577 16.3248 19.2577 16.5907 19.5235L18.699 21.6318L23.4107 16.9202C23.6765 16.6543 24.1165 16.6543 24.3823 16.9202C24.6482 17.186 24.6482 17.6168 24.3823 17.8918Z"
        fill="white"
      />
    </Icon>
  );
};

export const UnoEyeViewIcon = (props: any) => {
  return (
    <Icon color="transparent" fill="none" {...props} viewBox="0 0 13 13">
      <svg>
        <Path
          d="M8.29094 6.24996C8.29094 7.23996 7.49094 8.03996 6.50094 8.03996C5.51094 8.03996 4.71094 7.23996 4.71094 6.24996C4.71094 5.25996 5.51094 4.45996 6.50094 4.45996C7.49094 4.45996 8.29094 5.25996 8.29094 6.24996Z"
          stroke="#B7B7B7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6.50187 10.3849C8.26687 10.3849 9.91188 9.34486 11.0569 7.54486C11.5069 6.83986 11.5069 5.65486 11.0569 4.94986C9.91188 3.14986 8.26687 2.10986 6.50187 2.10986C4.73687 2.10986 3.09187 3.14986 1.94687 4.94986C1.49687 5.65486 1.49687 6.83986 1.94687 7.54486C3.09187 9.34486 4.73687 10.3849 6.50187 10.3849Z"
          stroke="#B7B7B7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};
