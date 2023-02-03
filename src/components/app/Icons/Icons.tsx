import Icon from '@ant-design/icons';
import React from 'react';
import { AppColors } from '../utils';
export interface AntIconProps {
  /** invoke onClick event function */
  onClick?: (event: React.MouseEvent) => void;
}

export interface NumberIconProps {
  /** invoke onClick event function */
  onClick?: (event: React.MouseEvent) => void;
  fade: boolean;
  children: any;
}

/** delete icon svg file component */
const DeleteSvg: React.FC = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="30" rx="10" fill="#EB5757" />
      <path
        d="M21.0451 10.4867C19.9718 10.38 18.8985 10.3 17.8185 10.24V10.2333L17.6718 9.36666C17.5718 8.75333 17.4251 7.83333 15.8651 7.83333H14.1185C12.5651 7.83333 12.4185 8.71333 12.3118 9.35999L12.1718 10.2133C11.5518 10.2533 10.9318 10.2933 10.3118 10.3533L8.95181 10.4867C8.67181 10.5133 8.47181 10.76 8.49848 11.0333C8.52514 11.3067 8.76514 11.5067 9.04514 11.48L10.4051 11.3467C13.8985 11 17.4185 11.1333 20.9518 11.4867C20.9718 11.4867 20.9851 11.4867 21.0051 11.4867C21.2585 11.4867 21.4785 11.2933 21.5051 11.0333C21.5251 10.76 21.3251 10.5133 21.0451 10.4867Z"
        fill="white"
      />
      <path
        d="M19.8211 12.4267C19.6611 12.26 19.4411 12.1667 19.2145 12.1667H10.7878C10.5611 12.1667 10.3345 12.26 10.1811 12.4267C10.0278 12.5933 9.94114 12.82 9.95447 13.0533L10.3678 19.8933C10.4411 20.9067 10.5345 22.1733 12.8611 22.1733H17.1411C19.4678 22.1733 19.5611 20.9133 19.6345 19.8933L20.0478 13.06C20.0611 12.82 19.9745 12.5933 19.8211 12.4267ZM16.1078 18.8333H13.8878C13.6145 18.8333 13.3878 18.6067 13.3878 18.3333C13.3878 18.06 13.6145 17.8333 13.8878 17.8333H16.1078C16.3811 17.8333 16.6078 18.06 16.6078 18.3333C16.6078 18.6067 16.3811 18.8333 16.1078 18.8333ZM16.6678 16.1667H13.3345C13.0611 16.1667 12.8345 15.94 12.8345 15.6667C12.8345 15.3933 13.0611 15.1667 13.3345 15.1667H16.6678C16.9411 15.1667 17.1678 15.3933 17.1678 15.6667C17.1678 15.94 16.9411 16.1667 16.6678 16.1667Z"
        fill="white"
      />
    </svg>
  );
};
/** Delete component where we are passing the DeleteSvg component as prop to ant design's Icon component  */
export const UnoJobsDeleteIcon: React.FC<AntIconProps> = (props) => (
  <Icon component={DeleteSvg} {...props} />
);

/** default props for DeleteIcon */
UnoJobsDeleteIcon.defaultProps = {
  onClick: undefined,
};

/** edit icon svg file component */
const EditSvg: React.FC = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="30" rx="10" fill="#00BAFB" />
      <path
        d="M20.0202 10.6492C18.7269 9.35586 17.4602 9.32253 16.1336 10.6492L15.3269 11.4559C15.2602 11.5225 15.2336 11.6292 15.2602 11.7225C15.7669 13.4892 17.1802 14.9025 18.9469 15.4092C18.9736 15.4159 19.0002 15.4225 19.0269 15.4225C19.1002 15.4225 19.1669 15.3959 19.2202 15.3425L20.0202 14.5359C20.6802 13.8825 21.0002 13.2492 21.0002 12.6092C21.0069 11.9492 20.6869 11.3092 20.0202 10.6492Z"
        fill="white"
      />
      <path
        d="M17.7454 16.0159C17.5521 15.9225 17.3654 15.8292 17.1854 15.7225C17.0388 15.6359 16.8988 15.5425 16.7588 15.4425C16.6454 15.3692 16.5121 15.2625 16.3854 15.1559C16.3721 15.1492 16.3254 15.1092 16.2721 15.0559C16.0521 14.8692 15.8054 14.6292 15.5854 14.3625C15.5654 14.3492 15.5321 14.3025 15.4854 14.2425C15.4188 14.1625 15.3054 14.0292 15.2054 13.8759C15.1254 13.7759 15.0321 13.6292 14.9454 13.4825C14.8388 13.3025 14.7454 13.1225 14.6521 12.9359C14.5297 12.6737 14.1855 12.5958 13.9809 12.8004L10.2321 16.5492C10.1454 16.6359 10.0654 16.8025 10.0454 16.9159L9.68542 19.4692C9.61875 19.9225 9.74542 20.3492 10.0254 20.6359C10.2654 20.8692 10.5988 20.9959 10.9588 20.9959C11.0388 20.9959 11.1188 20.9892 11.1988 20.9759L13.7588 20.6159C13.8788 20.5959 14.0454 20.5159 14.1254 20.4292L17.8804 16.6742C18.081 16.4737 18.0056 16.1286 17.7454 16.0159Z"
        fill="white"
      />
    </svg>
  );
};

/** Edit component where we are passing the EditSvg component as prop to ant design's Icon component  */
export const EditIcon: React.FC<AntIconProps> = (props) => (
  <Icon component={EditSvg} {...props} />
);

/** default props for EditIcon */
EditIcon.defaultProps = {
  onClick: undefined,
};

/** view icon svg file component */
const ViewSvg: React.FC = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="30" rx="10" fill={AppColors.primaryColor} />
      <path
        d="M21.1663 13.1C19.6263 10.68 17.373 9.28665 14.9997 9.28665C13.813 9.28665 12.6597 9.63332 11.6063 10.28C10.553 10.9333 9.60634 11.8867 8.83301 13.1C8.16634 14.1467 8.16634 15.8467 8.83301 16.8933C10.373 19.32 12.6263 20.7067 14.9997 20.7067C16.1863 20.7067 17.3397 20.36 18.393 19.7133C19.4463 19.06 20.393 18.1067 21.1663 16.8933C21.833 15.8533 21.833 14.1467 21.1663 13.1ZM14.9997 17.6933C13.5063 17.6933 12.3063 16.4867 12.3063 15C12.3063 13.5133 13.5063 12.3067 14.9997 12.3067C16.493 12.3067 17.693 13.5133 17.693 15C17.693 16.4867 16.493 17.6933 14.9997 17.6933Z"
        fill="white"
      />
      <path
        d="M14.9996 13.0933C13.9529 13.0933 13.0996 13.9467 13.0996 15C13.0996 16.0467 13.9529 16.9 14.9996 16.9C16.0463 16.9 16.9063 16.0467 16.9063 15C16.9063 13.9533 16.0463 13.0933 14.9996 13.0933Z"
        fill="white"
      />
    </svg>
  );
};
/** View component where we are passing the ViewSvg component as prop to ant design's Icon component  */
export const ViewIcon: React.FC<AntIconProps> = (props) => (
  <Icon component={ViewSvg} {...props} />
);

/** default props for ViewIcon */
ViewIcon.defaultProps = {
  onClick: undefined,
};

/** confirm icon svg file component */
const ConfirmSvg: React.FC = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="30" rx="10" fill="#66B949" />
      <path
        d="M14.9999 8.33325C11.3266 8.33325 8.33325 11.3266 8.33325 14.9999C8.33325 18.6733 11.3266 21.6666 14.9999 21.6666C18.6733 21.6666 21.6666 18.6733 21.6666 14.9999C21.6666 11.3266 18.6733 8.33325 14.9999 8.33325ZM18.1866 13.4666L14.4066 17.2466C14.3133 17.3399 14.1866 17.3933 14.0533 17.3933C13.9199 17.3933 13.7933 17.3399 13.6999 17.2466L11.8133 15.3599C11.6199 15.1666 11.6199 14.8466 11.8133 14.6533C12.0066 14.4599 12.3266 14.4599 12.5199 14.6533L14.0533 16.1866L17.4799 12.7599C17.6733 12.5666 17.9933 12.5666 18.1866 12.7599C18.3799 12.9533 18.3799 13.2666 18.1866 13.4666Z"
        fill="white"
      />
    </svg>
  );
};

/** Confirm component where we are passing the ConfirmSvg component as prop to ant design's Icon component  */
export const ConfirmIcon: React.FC<AntIconProps> = (props) => (
  <Icon component={ConfirmSvg} {...props} />
);

/** default props for ConfirmIcon */
ConfirmIcon.defaultProps = {
  onClick: undefined,
};

/** reject icon svg file component */
const RejectSvg: React.FC = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="30" rx="10" fill="#EB5757" />
      <path
        d="M14.9999 8.33325C11.3266 8.33325 8.33325 11.3266 8.33325 14.9999C8.33325 18.6733 11.3266 21.6666 14.9999 21.6666C18.6733 21.6666 21.6666 18.6733 21.6666 14.9999C21.6666 11.3266 18.6733 8.33325 14.9999 8.33325ZM17.2399 16.5333C17.4333 16.7266 17.4333 17.0466 17.2399 17.2399C17.1399 17.3399 17.0133 17.3866 16.8866 17.3866C16.7599 17.3866 16.6333 17.3399 16.5333 17.2399L14.9999 15.7066L13.4666 17.2399C13.3666 17.3399 13.2399 17.3866 13.1133 17.3866C12.9866 17.3866 12.8599 17.3399 12.7599 17.2399C12.5666 17.0466 12.5666 16.7266 12.7599 16.5333L14.2933 14.9999L12.7599 13.4666C12.5666 13.2733 12.5666 12.9533 12.7599 12.7599C12.9533 12.5666 13.2733 12.5666 13.4666 12.7599L14.9999 14.2933L16.5333 12.7599C16.7266 12.5666 17.0466 12.5666 17.2399 12.7599C17.4333 12.9533 17.4333 13.2733 17.2399 13.4666L15.7066 14.9999L17.2399 16.5333Z"
        fill="white"
      />
    </svg>
  );
};

/** Reject component where we are passing the RejectSvg component as prop to ant design's Icon component */
export const RejectIcon: React.FC<AntIconProps> = (props) => (
  <Icon component={RejectSvg} {...props} />
);

/** default props for RejectIcon */
RejectIcon.defaultProps = {
  onClick: undefined,
};

export const NumberIcon: React.FC<NumberIconProps> = (props) => {
  return (
    <div
      style={{
        width: '24px',
        height: '24px',
        borderRadius: '4px',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12px',
        fontWeight: '600',
        cursor: 'pointer',
        backgroundColor: `${
          props.fade === false ? AppColors.primaryColor : '#B4CBFB'
        }`,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

NumberIcon.defaultProps = {
  onClick: undefined,
  fade: false,
  children: 5,
};

/** upArrowRound icon svg file component */
const UpArrowRoundSvg: React.FC = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M12 22.5713C17.5228 22.5713 22 18.0941 22 12.5713C22 7.04844 17.5228 2.57129 12 2.57129C6.47715 2.57129 2 7.04844 2 12.5713C2 18.0941 6.47715 22.5713 12 22.5713Z"
        fill={AppColors.primaryColor}
      />
      <path
        d="M12.0002 15.5812C11.8102 15.5812 11.6202 15.5112 11.4702 15.3612L7.94016 11.8312C7.65016 11.5412 7.65016 11.0612 7.94016 10.7712C8.23016 10.4812 8.71016 10.4812 9.00016 10.7712L12.0002 13.7712L15.0002 10.7712C15.2902 10.4812 15.7702 10.4812 16.0602 10.7712C16.3502 11.0612 16.3502 11.5412 16.0602 11.8312L12.5302 15.3612C12.3802 15.5112 12.1902 15.5812 12.0002 15.5812Z"
        fill={AppColors.primaryColor}
      />
    </svg>
  );
};

/** UpArrowRound component where we are passing the UpArrowRoundSvg component as prop to ant design's Icon component */
export const UpArrowRoundIcon: React.FC<AntIconProps> = (props) => (
  <Icon component={UpArrowRoundSvg} {...props} />
);

/** default props for UpArrowRoundIcon */
UpArrowRoundIcon.defaultProps = {
  onClick: undefined,
};

/** downArrowRound icon svg file component */
const DownArrowRoundSvg: React.FC = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22.0713C6.49 22.0713 2 17.5813 2 12.0713C2 6.56129 6.49 2.07129 12 2.07129C17.51 2.07129 22 6.56129 22 12.0713C22 17.5813 17.51 22.0713 12 22.0713ZM16.06 12.8013L12.53 9.27129C12.38 9.12129 12.19 9.05129 12 9.05129C11.81 9.05129 11.62 9.12129 11.47 9.27129L7.94 12.8013C7.65 13.0913 7.65 13.5713 7.94 13.8613C8.23 14.1513 8.71 14.1513 9 13.8613L12 10.8613L15 13.8613C15.29 14.1513 15.77 14.1513 16.06 13.8613C16.35 13.5713 16.35 13.1013 16.06 12.8013Z"
        fill={AppColors.primaryColor}
      />
    </svg>
  );
};

/** DownArrowRound component where we are passing the DownArrowRoundSvg component as prop to ant design's Icon component */
export const DownArrowRoundIcon: React.FC<AntIconProps> = (props) => (
  <Icon component={DownArrowRoundSvg} {...props} />
);

/** default props for DownArrowRoundIcon */
DownArrowRoundIcon.defaultProps = {
  onClick: undefined,
};
