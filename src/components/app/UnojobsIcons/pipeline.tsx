import React from 'react';
import { createIcon } from '../../primitives';

type IconProps = {
  fill?: string;
  size?: string | number;
};
export const MessagesRoundIcon = ({ size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 16 16',
    path: (
      <>
        <path
          d="M11.9854 7.19334V9.86001C11.9854 10.0333 11.9787 10.2 11.9587 10.36C11.8054 12.16 10.7454 13.0533 8.79203 13.0533H8.52537C8.3587 13.0533 8.19869 13.1333 8.09869 13.2667L7.29871 14.3333C6.94537 14.8067 6.37203 14.8067 6.0187 14.3333L5.21869 13.2667C5.13202 13.1533 4.9387 13.0533 4.79203 13.0533H4.52537C2.3987 13.0533 1.33203 12.5267 1.33203 9.86001V7.19334C1.33203 5.24001 2.23204 4.18001 4.02537 4.02667C4.18537 4.00667 4.35204 4 4.52537 4H8.79203C10.9187 4 11.9854 5.06667 11.9854 7.19334Z"
          stroke="#B7B7B7"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M14.654 4.52537V7.19204C14.654 9.15204 13.754 10.2054 11.9607 10.3587C11.9807 10.1987 11.9873 10.032 11.9873 9.8587V7.19204C11.9873 5.06537 10.9207 3.9987 8.79401 3.9987H4.52734C4.35401 3.9987 4.18734 4.00537 4.02734 4.02537C4.18068 2.23204 5.24068 1.33203 7.19401 1.33203H11.4607C13.5873 1.33203 14.654 2.3987 14.654 4.52537Z"
          stroke="#B7B7B7"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M8.9983 8.83333H9.0043"
          stroke="#B7B7B7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M6.66236 8.83333H6.66836"
          stroke="#B7B7B7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M4.33033 8.83333H4.33633"
          stroke="#B7B7B7"
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

export const ViewProfileRoundIcon = ({ size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 16 16',
    path: (
      <>
        <path
          d="M8.07917 8.51901C8.0325 8.51234 7.9725 8.51234 7.91917 8.51901C6.74583 8.47901 5.8125 7.51901 5.8125 6.33901C5.8125 5.13234 6.78583 4.15234 7.99917 4.15234C9.20583 4.15234 10.1858 5.13234 10.1858 6.33901C10.1792 7.51901 9.2525 8.47901 8.07917 8.51901Z"
          stroke="#B7B7B7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M12.4945 12.9191C11.3078 14.0057 9.73448 14.6657 8.00115 14.6657C6.26781 14.6657 4.69448 14.0057 3.50781 12.9191C3.57448 12.2924 3.97448 11.6791 4.68781 11.1991C6.51448 9.98573 9.50114 9.98573 11.3145 11.1991C12.0278 11.6791 12.4278 12.2924 12.4945 12.9191Z"
          stroke="#B7B7B7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M7.9987 14.6654C11.6806 14.6654 14.6654 11.6806 14.6654 7.9987C14.6654 4.3168 11.6806 1.33203 7.9987 1.33203C4.3168 1.33203 1.33203 4.3168 1.33203 7.9987C1.33203 11.6806 4.3168 14.6654 7.9987 14.6654Z"
          stroke="#B7B7B7"
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

export const TickCircleIcon = ({ size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 16 16',
    path: (
      <>
        <path
          d="M7.9987 14.6654C11.6654 14.6654 14.6654 11.6654 14.6654 7.9987C14.6654 4.33203 11.6654 1.33203 7.9987 1.33203C4.33203 1.33203 1.33203 4.33203 1.33203 7.9987C1.33203 11.6654 4.33203 14.6654 7.9987 14.6654Z"
          stroke="#B7B7B7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M5.16797 7.99995L7.05464 9.88661L10.8346 6.11328"
          stroke="#B7B7B7"
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

export const CloseCircleIcon = ({ size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 16 16',
    path: (
      <>
        <path
          d="M7.9987 14.6654C11.6654 14.6654 14.6654 11.6654 14.6654 7.9987C14.6654 4.33203 11.6654 1.33203 7.9987 1.33203C4.33203 1.33203 1.33203 4.33203 1.33203 7.9987C1.33203 11.6654 4.33203 14.6654 7.9987 14.6654Z"
          stroke="#B7B7B7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M6.11328 9.88661L9.88661 6.11328"
          stroke="#B7B7B7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M9.88661 9.88661L6.11328 6.11328"
          stroke="#B7B7B7"
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

export const AppliedIcon = ({ size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 16 16',
    path: (
      <>
        <path
          d="M6.20703 9.79948L7.20703 10.7995L9.8737 8.13281"
          stroke="#B7B7B7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M6.66536 3.9987H9.33203C10.6654 3.9987 10.6654 3.33203 10.6654 2.66536C10.6654 1.33203 9.9987 1.33203 9.33203 1.33203H6.66536C5.9987 1.33203 5.33203 1.33203 5.33203 2.66536C5.33203 3.9987 5.9987 3.9987 6.66536 3.9987Z"
          stroke="#B7B7B7"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M10.6667 2.67969C12.8867 2.79969 14 3.61969 14 6.66635V10.6664C14 13.333 13.3333 14.6664 10 14.6664H6C2.66667 14.6664 2 13.333 2 10.6664V6.66635C2 3.62635 3.11333 2.79969 5.33333 2.67969"
          stroke="#B7B7B7"
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

export const InterviewPeopleIcon = ({ size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 16 16',
    path: (
      <>
        <path
          d="M11.9987 4.77203C11.9587 4.76537 11.9121 4.76537 11.8721 4.77203C10.9521 4.7387 10.2188 3.98537 10.2188 3.05203C10.2188 2.0987 10.9854 1.33203 11.9387 1.33203C12.8921 1.33203 13.6587 2.10537 13.6587 3.05203C13.6521 3.98537 12.9187 4.7387 11.9987 4.77203Z"
          stroke="#B7B7B7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M11.313 9.62547C12.2263 9.77881 13.233 9.6188 13.9396 9.14547C14.8796 8.5188 14.8796 7.49214 13.9396 6.86547C13.2263 6.39214 12.2063 6.23214 11.293 6.39214"
          stroke="#B7B7B7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M3.98031 4.77203C4.02031 4.76537 4.06698 4.76537 4.10698 4.77203C5.02698 4.7387 5.76031 3.98537 5.76031 3.05203C5.76031 2.0987 4.99365 1.33203 4.04031 1.33203C3.08698 1.33203 2.32031 2.10537 2.32031 3.05203C2.32698 3.98537 3.06031 4.7387 3.98031 4.77203Z"
          stroke="#B7B7B7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M4.6676 9.62547C3.75427 9.77881 2.7476 9.6188 2.04094 9.14547C1.10094 8.5188 1.10094 7.49214 2.04094 6.86547C2.75427 6.39214 3.77427 6.23214 4.6876 6.39214"
          stroke="#B7B7B7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M7.99875 9.7525C7.95875 9.74584 7.91208 9.74584 7.87208 9.7525C6.95208 9.71917 6.21875 8.96583 6.21875 8.0325C6.21875 7.07917 6.98542 6.3125 7.93875 6.3125C8.89208 6.3125 9.65875 7.08583 9.65875 8.0325C9.65208 8.96583 8.91875 9.72584 7.99875 9.7525Z"
          stroke="#B7B7B7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M6.06047 11.8542C5.12047 12.4809 5.12047 13.5076 6.06047 14.1342C7.12714 14.8476 8.8738 14.8476 9.94047 14.1342C10.8805 13.5076 10.8805 12.4809 9.94047 11.8542C8.88047 11.1476 7.12714 11.1476 6.06047 11.8542Z"
          stroke="#B7B7B7"
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

export const DiscussionMessageIcon = ({ size }: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 16 16',
    path: (
      <>
        <path
          d="M10.6654 1.33203H5.33203C2.66536 1.33203 1.33203 2.66536 1.33203 5.33203V13.9987C1.33203 14.3654 1.63203 14.6654 1.9987 14.6654H10.6654C13.332 14.6654 14.6654 13.332 14.6654 10.6654V5.33203C14.6654 2.66536 13.332 1.33203 10.6654 1.33203Z"
          stroke="#B7B7B7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M4.66797 6.33203H11.3346"
          stroke="#B7B7B7"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M4.66797 9.66406H9.33464"
          stroke="#B7B7B7"
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
