import React from 'react';
import { createIcon } from '../../primitives';

type IconProps = {
  fill?: string;
  size?: string | number;
};

export const UnojobsUpArrowRoundIcon = ({
  fill = 'currentColor',
  size = 6,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 24 25',
    path: (
      <>
        <path
          opacity="0.4"
          d="M12 22.5713C17.5228 22.5713 22 18.0941 22 12.5713C22 7.04844 17.5228 2.57129 12 2.57129C6.47715 2.57129 2 7.04844 2 12.5713C2 18.0941 6.47715 22.5713 12 22.5713Z"
          fill={fill}
        />
        <path
          d="M12.0002 15.5812C11.8102 15.5812 11.6202 15.5112 11.4702 15.3612L7.94016 11.8312C7.65016 11.5412 7.65016 11.0612 7.94016 10.7712C8.23016 10.4812 8.71016 10.4812 9.00016 10.7712L12.0002 13.7712L15.0002 10.7712C15.2902 10.4812 15.7702 10.4812 16.0602 10.7712C16.3502 11.0612 16.3502 11.5412 16.0602 11.8312L12.5302 15.3612C12.3802 15.5112 12.1902 15.5812 12.0002 15.5812Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnojobsUpArrowRoundIcon.defaultProps = {
  fill: '#4169E0',
  size: 6,
};

export const UnojobsDownArrowRoundIcon = ({
  fill = 'currentColor',
  size = 6,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 24 25',
    path: (
      <path
        d="M12 22.0713C6.49 22.0713 2 17.5813 2 12.0713C2 6.56129 6.49 2.07129 12 2.07129C17.51 2.07129 22 6.56129 22 12.0713C22 17.5813 17.51 22.0713 12 22.0713ZM16.06 12.8013L12.53 9.27129C12.38 9.12129 12.19 9.05129 12 9.05129C11.81 9.05129 11.62 9.12129 11.47 9.27129L7.94 12.8013C7.65 13.0913 7.65 13.5713 7.94 13.8613C8.23 14.1513 8.71 14.1513 9 13.8613L12 10.8613L15 13.8613C15.29 14.1513 15.77 14.1513 16.06 13.8613C16.35 13.5713 16.35 13.1013 16.06 12.8013Z"
        fill={fill}
      />
    ),
  });
  return <CustomIcon size={size} />;
};

UnojobsDownArrowRoundIcon.defaultProps = {
  fill: '#4169E0',
  size: 6,
};

export const UnoJobsTechDepartment = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <>
        <path
          d="M21.25 28.4375H8.75C8.2375 28.4375 7.8125 28.0125 7.8125 27.5C7.8125 26.9875 8.2375 26.5625 8.75 26.5625H21.25C21.7625 26.5625 22.1875 26.9875 22.1875 27.5C22.1875 28.0125 21.7625 28.4375 21.25 28.4375Z"
          fill={fill}
        />
        <path
          d="M22.5 2.5H7.5C4.7375 2.5 2.5 4.7375 2.5 7.5V18.75C2.5 21.5125 4.7375 23.75 7.5 23.75H22.5C25.2625 23.75 27.5 21.5125 27.5 18.75V7.5C27.5 4.7375 25.2625 2.5 22.5 2.5ZM12.4875 9.15C13.1875 9.15 13.75 9.7125 13.75 10.4C13.75 11.0875 13.1875 11.65 12.5 11.65C11.8125 11.65 11.25 11.0875 11.25 10.4C11.25 9.7125 11.8 9.15 12.4875 9.15ZM8.55 9.15C9.25 9.15 9.8125 9.7125 9.8125 10.4C9.8125 11.0875 9.25 11.65 8.5625 11.65C7.875 11.65 7.3125 11.0875 7.3125 10.4C7.3125 9.7125 7.85 9.15 8.55 9.15ZM21.575 18.575H8.45C7.925 18.575 7.5 18.15 7.5 17.6375C7.5 17.125 7.9125 16.7 8.425 16.7H21.5875C22.1 16.7 22.525 17.125 22.525 17.6375C22.525 18.15 22.1 18.575 21.575 18.575ZM21.575 11.3375H16.975C16.4625 11.3375 16.0375 10.9125 16.0375 10.4C16.0375 9.8875 16.4625 9.4625 16.975 9.4625H21.575C22.0875 9.4625 22.5125 9.8875 22.5125 10.4C22.5125 10.9125 22.1 11.3375 21.575 11.3375Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsTechDepartment.defaultProps = {
  fill: '#4169E0',
  size: 8,
};
export const UnoJobsDataAnalysis = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <>
        <path
          d="M20.2375 2.5H9.7625C5.2125 2.5 2.5 5.2125 2.5 9.7625V20.225C2.5 24.7875 5.2125 27.5 9.7625 27.5H20.225C24.775 27.5 27.4875 24.7875 27.4875 20.2375V9.7625C27.5 5.2125 24.7875 2.5 20.2375 2.5ZM12.3875 20.2375C12.3875 21.0375 11.7375 21.6875 10.925 21.6875C10.125 21.6875 9.475 21.0375 9.475 20.2375V16.1625C9.475 15.3625 10.125 14.7125 10.925 14.7125C11.7375 14.7125 12.3875 15.3625 12.3875 16.1625V20.2375ZM20.525 20.2375C20.525 21.0375 19.875 21.6875 19.075 21.6875C18.2625 21.6875 17.6125 21.0375 17.6125 20.2375V9.7625C17.6125 8.9625 18.2625 8.3125 19.075 8.3125C19.875 8.3125 20.525 8.9625 20.525 9.7625V20.2375Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsDataAnalysis.defaultProps = {
  fill: '#4169E0',
  size: 8,
};
export const UnoJobsDesign = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <>
        <path
          d="M27.2623 4.92462C25.6248 9.01212 21.8873 14.3496 18.3248 17.8371C17.8123 14.6121 15.2373 12.0871 11.9873 11.6371C15.4873 8.06212 20.8623 4.27462 24.9623 2.62462C25.6873 2.34962 26.4123 2.56212 26.8623 3.01212C27.3373 3.48712 27.5623 4.19962 27.2623 4.92462Z"
          fill={fill}
        />
        <path
          d="M17.2254 18.8617C16.9754 19.0742 16.7254 19.2867 16.4754 19.4867L14.2379 21.2742C14.2379 21.2367 14.2254 21.1867 14.2254 21.1367C14.0504 19.7992 13.4254 18.5617 12.4129 17.5492C11.3879 16.5242 10.1129 15.8992 8.71289 15.7242C8.67539 15.7242 8.62539 15.7117 8.58789 15.7117L10.4004 13.4242C10.5754 13.1992 10.7629 12.9867 10.9629 12.7617L11.8129 12.8742C14.5004 13.2492 16.6629 15.3617 17.0879 18.0367L17.2254 18.8617Z"
          fill={fill}
        />
        <path
          d="M13.0372 22.024C13.0372 23.399 12.5122 24.7115 11.5122 25.699C10.7497 26.474 9.72471 26.999 8.47471 27.149L5.41221 27.4865C3.73721 27.674 2.29971 26.2365 2.48721 24.549L2.82471 21.474C3.12471 18.7365 5.41221 16.9865 7.83721 16.9365C8.07471 16.924 8.33721 16.9365 8.58721 16.9615C9.64971 17.099 10.6747 17.5865 11.5372 18.4365C12.3747 19.274 12.8497 20.2615 12.9872 21.299C13.0122 21.549 13.0372 21.7865 13.0372 22.024Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsDesign.defaultProps = {
  fill: '#4169E0',
  size: 8,
};
export const UnoJobsOperationsDepartment = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <>
        <path
          d="M20.2375 2.5H9.7625C5.2125 2.5 2.5 5.2125 2.5 9.7625V20.225C2.5 24.7875 5.2125 27.5 9.7625 27.5H20.225C24.775 27.5 27.4875 24.7875 27.4875 20.2375V9.7625C27.5 5.2125 24.7875 2.5 20.2375 2.5ZM9.5375 22.6875C9.5375 23.2 9.1125 23.625 8.6 23.625C8.0875 23.625 7.6625 23.2 7.6625 22.6875V20.1C7.6625 19.5875 8.0875 19.1625 8.6 19.1625C9.1125 19.1625 9.5375 19.5875 9.5375 20.1V22.6875ZM15.9375 22.6875C15.9375 23.2 15.5125 23.625 15 23.625C14.4875 23.625 14.0625 23.2 14.0625 22.6875V17.5C14.0625 16.9875 14.4875 16.5625 15 16.5625C15.5125 16.5625 15.9375 16.9875 15.9375 17.5V22.6875ZM22.3375 22.6875C22.3375 23.2 21.9125 23.625 21.4 23.625C20.8875 23.625 20.4625 23.2 20.4625 22.6875V14.9125C20.4625 14.4 20.8875 13.975 21.4 13.975C21.9125 13.975 22.3375 14.4 22.3375 14.9125V22.6875ZM22.3375 10.9625C22.3375 11.475 21.9125 11.9 21.4 11.9C20.8875 11.9 20.4625 11.475 20.4625 10.9625V9.75C17.275 13.025 13.2875 15.3375 8.825 16.45C8.75 16.475 8.675 16.475 8.6 16.475C8.175 16.475 7.8 16.1875 7.6875 15.7625C7.5625 15.2625 7.8625 14.75 8.375 14.625C12.5875 13.575 16.3375 11.3625 19.3125 8.2375H17.75C17.2375 8.2375 16.8125 7.8125 16.8125 7.3C16.8125 6.7875 17.2375 6.3625 17.75 6.3625H21.4125C21.4625 6.3625 21.5 6.3875 21.55 6.3875C21.6125 6.4 21.675 6.4 21.7375 6.425C21.8 6.45 21.85 6.4875 21.9125 6.525C21.95 6.55 21.9875 6.5625 22.025 6.5875C22.0375 6.6 22.0375 6.6125 22.05 6.6125C22.1 6.6625 22.1375 6.7125 22.175 6.7625C22.2125 6.8125 22.25 6.85 22.2625 6.9C22.2875 6.95 22.2875 7 22.3 7.0625C22.3125 7.125 22.3375 7.1875 22.3375 7.2625C22.3375 7.275 22.35 7.2875 22.35 7.3V10.9625H22.3375Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsOperationsDepartment.defaultProps = {
  fill: '#4169E0',
  size: 8,
};
export const UnoJobsSalesDepartment = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <>
        <path
          d="M24.3879 7.3125L16.9629 3.025C15.7504 2.325 14.2504 2.325 13.0254 3.025L5.61289 7.3125C4.40039 8.0125 3.65039 9.3125 3.65039 10.725V19.275C3.65039 20.675 4.40039 21.975 5.61289 22.6875L13.0379 26.975C14.2504 27.675 15.7504 27.675 16.9754 26.975L24.4004 22.6875C25.6129 21.9875 26.3629 20.6875 26.3629 19.275V10.725C26.3504 9.3125 25.6004 8.025 24.3879 7.3125ZM15.0004 9.175C16.6129 9.175 17.9129 10.475 17.9129 12.0875C17.9129 13.7 16.6129 15 15.0004 15C13.3879 15 12.0879 13.7 12.0879 12.0875C12.0879 10.4875 13.3879 9.175 15.0004 9.175ZM18.3504 20.825H11.6504C10.6379 20.825 10.0504 19.7 10.6129 18.8625C11.4629 17.6 13.1129 16.75 15.0004 16.75C16.8879 16.75 18.5379 17.6 19.3879 18.8625C19.9504 19.6875 19.3504 20.825 18.3504 20.825Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsSalesDepartment.defaultProps = {
  fill: '#4169E0',
  size: 8,
};
export const UnoJobsMarketingDepartment = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <>
        <g clipPath="url(#clip0_7789_1982)">
          <path
            d="M26.7188 3.9384C26.3964 3.72987 26.0278 3.60371 25.6453 3.57101C25.2627 3.53832 24.8781 3.60009 24.525 3.7509L12.9562 8.30715C12.6824 8.41862 12.3895 8.47593 12.0938 8.4759H4.6875C4.0659 8.4759 3.46976 8.72283 3.03022 9.16237C2.59068 9.60191 2.34375 10.1981 2.34375 10.8197V11.0072H0V16.6322H2.34375V16.8759C2.35844 17.4877 2.61184 18.0695 3.04979 18.4969C3.48775 18.9244 4.07552 19.1636 4.6875 19.1634L7.5 25.1259C7.69044 25.5274 7.99027 25.8671 8.36505 26.1059C8.73983 26.3447 9.17437 26.4729 9.61875 26.4759H10.8C11.4183 26.471 12.0097 26.2218 12.4452 25.7828C12.8807 25.3438 13.125 24.7505 13.125 24.1322V19.3884L24.525 23.9447C24.8054 24.0562 25.1045 24.1135 25.4062 24.1134C25.8745 24.1059 26.3304 23.9626 26.7188 23.7009C27.0271 23.4927 27.2815 23.214 27.4609 22.888C27.6402 22.5619 27.7393 22.1979 27.75 21.8259V5.86965C27.7483 5.48812 27.6534 5.11277 27.4737 4.77621C27.294 4.43965 27.0349 4.15206 26.7188 3.9384ZM10.7812 10.8197V16.8759H4.6875V10.8197H10.7812ZM10.7812 24.1322H9.6L7.29375 19.1634H10.7812V24.1322ZM13.8187 17.1572C13.5961 17.0434 13.364 16.9493 13.125 16.8759V10.6884C13.3617 10.6396 13.5938 10.5706 13.8187 10.4822L25.4062 5.86965V21.7697L13.8187 17.1572ZM27.8062 11.4759V16.1634C28.4279 16.1634 29.024 15.9165 29.4635 15.4769C29.9031 15.0374 30.15 14.4413 30.15 13.8197C30.15 13.1981 29.9031 12.6019 29.4635 12.1624C29.024 11.7228 28.4279 11.4759 27.8062 11.4759Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_7789_1982">
            <rect width="30" height="30" fill="white" />
          </clipPath>
        </defs>
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsMarketingDepartment.defaultProps = {
  fill: '#4169E0',
  size: 8,
};
export const UnoJobsSupplyChainDepartment = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <>
        <path
          d="M20.2375 2.5H9.7625C5.2125 2.5 2.5 5.2125 2.5 9.7625V20.225C2.5 24.7875 5.2125 27.5 9.7625 27.5H20.225C24.775 27.5 27.4875 24.7875 27.4875 20.2375V9.7625C27.5 5.2125 24.7875 2.5 20.2375 2.5ZM10.225 20.9625C10.2 20.9625 10.1625 20.9625 10.1375 20.9625C8.925 20.85 7.7875 20.2875 6.9375 19.3875C4.9375 17.2875 4.9375 13.875 6.9375 11.775L9.675 8.9C10.65 7.875 11.9625 7.3 13.3625 7.3C14.7625 7.3 16.075 7.8625 17.05 8.9C19.05 11 19.05 14.4125 17.05 16.5125L15.6875 17.95C15.325 18.325 14.7375 18.3375 14.3625 17.9875C13.9875 17.625 13.975 17.0375 14.325 16.6625L15.6875 15.225C17.0125 13.8375 17.0125 11.575 15.6875 10.2C14.45 8.9 12.275 8.9 11.025 10.2L8.2875 13.075C6.9625 14.4625 6.9625 16.725 8.2875 18.1C8.825 18.675 9.55 19.025 10.3125 19.1C10.825 19.15 11.2 19.6125 11.15 20.125C11.1125 20.6 10.7 20.9625 10.225 20.9625ZM23.0625 18.2375L20.325 21.1125C19.35 22.1375 18.0375 22.7125 16.6375 22.7125C15.2375 22.7125 13.925 22.15 12.95 21.1125C10.95 19.0125 10.95 15.6 12.95 13.5L14.3125 12.0625C14.675 11.6875 15.2625 11.675 15.6375 12.025C16.0125 12.3875 16.025 12.975 15.675 13.35L14.3125 14.7875C12.9875 16.175 12.9875 18.4375 14.3125 19.8125C15.55 21.1125 17.725 21.125 18.975 19.8125L21.7125 16.9375C23.0375 15.55 23.0375 13.2875 21.7125 11.9125C21.175 11.3375 20.45 10.9875 19.6875 10.9125C19.175 10.8625 18.8 10.4 18.85 9.8875C18.9 9.375 19.35 8.9875 19.875 9.05C21.0875 9.175 22.225 9.725 23.075 10.625C25.0625 12.7125 25.0625 16.1375 23.0625 18.2375Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsSupplyChainDepartment.defaultProps = {
  fill: '#4169E0',
  size: 8,
};
export const UnoJobsFinanceDepartment = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <>
        <path
          d="M20.2375 2.5H9.7625C5.2125 2.5 2.5 5.2125 2.5 9.7625V20.225C2.5 24.7875 5.2125 27.5 9.7625 27.5H20.225C24.775 27.5 27.4875 24.7875 27.4875 20.2375V9.7625C27.5 5.2125 24.7875 2.5 20.2375 2.5ZM21.1 14.4125C21.1 14.9 20.7125 15.2875 20.225 15.2875C19.7375 15.2875 19.35 14.9 19.35 14.4125V14.1875L15.95 17.5875C15.7625 17.775 15.5125 17.8625 15.25 17.8375C14.9875 17.8125 14.75 17.675 14.6125 17.45L13.3375 15.55L10.3625 18.525C10.1875 18.7 9.975 18.775 9.75 18.775C9.525 18.775 9.3 18.6875 9.1375 18.525C8.8 18.1875 8.8 17.6375 9.1375 17.2875L12.8625 13.5625C13.05 13.375 13.3 13.2875 13.5625 13.3125C13.825 13.3375 14.0625 13.475 14.2 13.7L15.475 15.6L18.1125 12.9625H17.8875C17.4 12.9625 17.0125 12.575 17.0125 12.0875C17.0125 11.6 17.4 11.2125 17.8875 11.2125H20.2125C20.325 11.2125 20.4375 11.2375 20.55 11.275C20.7625 11.3625 20.9375 11.5375 21.025 11.75C21.075 11.8625 21.0875 11.975 21.0875 12.0875V14.4125H21.1Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsFinanceDepartment.defaultProps = {
  fill: '#4169E0',
  size: 8,
};
export const UnoJobsSecurityDepartment = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <>
        <path
          d="M20.2375 2.5H9.7625C5.2125 2.5 2.5 5.2125 2.5 9.7625V20.225C2.5 24.7875 5.2125 27.5 9.7625 27.5H20.225C24.775 27.5 27.4875 24.7875 27.4875 20.2375V9.7625C27.5 5.2125 24.7875 2.5 20.2375 2.5ZM12.6625 18.125C13.025 18.4875 13.025 19.0875 12.6625 19.45C12.475 19.6375 12.2375 19.725 12 19.725C11.7625 19.725 11.525 19.6375 11.3375 19.45L8.225 16.3375C7.4875 15.6 7.4875 14.4125 8.225 13.675L11.3375 10.5625C11.7 10.2 12.3 10.2 12.6625 10.5625C13.025 10.925 13.025 11.525 12.6625 11.8875L9.55 15L12.6625 18.125ZM21.775 16.325L18.6625 19.4375C18.475 19.625 18.2375 19.7125 18 19.7125C17.7625 19.7125 17.525 19.625 17.3375 19.4375C16.975 19.075 16.975 18.475 17.3375 18.1125L20.45 15L17.3375 11.875C16.975 11.5125 16.975 10.9125 17.3375 10.55C17.7 10.1875 18.3 10.1875 18.6625 10.55L21.775 13.6625C22.5125 14.4 22.5125 15.6 21.775 16.325Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsSecurityDepartment.defaultProps = {
  fill: '#4169E0',
  size: 8,
};
export const UnoJobsAdministrationDepartment = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <>
        <path
          d="M20.2375 2.5H9.7625C5.2125 2.5 2.5 5.2125 2.5 9.7625V20.2375C2.5 24.7875 5.2125 27.5 9.7625 27.5H20.2375C24.7875 27.5 27.5 24.7875 27.5 20.2375V9.7625C27.5 5.2125 24.7875 2.5 20.2375 2.5ZM12.4625 18.625L9.65 21.4375C9.4625 21.625 9.225 21.7125 8.9875 21.7125C8.75 21.7125 8.5 21.625 8.325 21.4375L7.3875 20.5C7.0125 20.1375 7.0125 19.5375 7.3875 19.175C7.75 18.8125 8.3375 18.8125 8.7125 19.175L8.9875 19.45L11.1375 17.3C11.5 16.9375 12.0875 16.9375 12.4625 17.3C12.825 17.6625 12.825 18.2625 12.4625 18.625ZM12.4625 9.875L9.65 12.6875C9.4625 12.875 9.225 12.9625 8.9875 12.9625C8.75 12.9625 8.5 12.875 8.325 12.6875L7.3875 11.75C7.0125 11.3875 7.0125 10.7875 7.3875 10.425C7.75 10.0625 8.3375 10.0625 8.7125 10.425L8.9875 10.7L11.1375 8.55C11.5 8.1875 12.0875 8.1875 12.4625 8.55C12.825 8.9125 12.825 9.5125 12.4625 9.875ZM21.95 20.775H15.3875C14.875 20.775 14.45 20.35 14.45 19.8375C14.45 19.325 14.875 18.9 15.3875 18.9H21.95C22.475 18.9 22.8875 19.325 22.8875 19.8375C22.8875 20.35 22.475 20.775 21.95 20.775ZM21.95 12.025H15.3875C14.875 12.025 14.45 11.6 14.45 11.0875C14.45 10.575 14.875 10.15 15.3875 10.15H21.95C22.475 10.15 22.8875 10.575 22.8875 11.0875C22.8875 11.6 22.475 12.025 21.95 12.025Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsAdministrationDepartment.defaultProps = {
  fill: '#4169E0',
  size: 8,
};
export const UnoJobsConsultationDepartment = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <>
        <path
          d="M17.9377 2.5H12.0627C10.7627 2.5 9.7002 3.55 9.7002 4.85V6.025C9.7002 7.325 10.7502 8.375 12.0502 8.375H17.9377C19.2377 8.375 20.2877 7.325 20.2877 6.025V4.85C20.3002 3.55 19.2377 2.5 17.9377 2.5Z"
          fill={fill}
        />
        <path
          d="M21.5498 6.02534C21.5498 8.01284 19.9248 9.63784 17.9373 9.63784H12.0623C10.0748 9.63784 8.44981 8.01284 8.44981 6.02534C8.44981 5.32534 7.6998 4.88784 7.0748 5.21284C5.3123 6.15034 4.1123 8.01284 4.1123 10.1503V21.9128C4.1123 24.9878 6.6248 27.5003 9.69981 27.5003H20.2998C23.3748 27.5003 25.8873 24.9878 25.8873 21.9128V10.1503C25.8873 8.01284 24.6873 6.15034 22.9248 5.21284C22.2998 4.88784 21.5498 5.32534 21.5498 6.02534ZM19.1748 15.9128L14.1748 20.9128C13.9873 21.1003 13.7498 21.1878 13.5123 21.1878C13.2748 21.1878 13.0373 21.1003 12.8498 20.9128L10.9748 19.0378C10.6123 18.6753 10.6123 18.0753 10.9748 17.7128C11.3373 17.3503 11.9373 17.3503 12.2998 17.7128L13.5123 18.9253L17.8498 14.5878C18.2123 14.2253 18.8123 14.2253 19.1748 14.5878C19.5373 14.9503 19.5373 15.5503 19.1748 15.9128Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsConsultationDepartment.defaultProps = {
  fill: '#4169E0',
  size: 8,
};
export const UnoJobsEducationDepartment = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <>
        <path
          d="M27.5 6.06211V20.9246C27.5 22.1371 26.5125 23.2496 25.3 23.3996L24.9125 23.4496C22.8625 23.7246 19.975 24.5746 17.65 25.5496C16.8375 25.8871 15.9375 25.2746 15.9375 24.3871V6.99961C15.9375 6.53711 16.2 6.11211 16.6125 5.88711C18.9 4.64961 22.3625 3.54961 24.7125 3.34961H24.7875C26.2875 3.34961 27.5 4.56211 27.5 6.06211Z"
          fill={fill}
        />
        <path
          d="M13.3873 5.88711C11.0998 4.64961 7.6373 3.54961 5.2873 3.34961H5.1998C3.6998 3.34961 2.4873 4.56211 2.4873 6.06211V20.9246C2.4873 22.1371 3.4748 23.2496 4.6873 23.3996L5.0748 23.4496C7.1248 23.7246 10.0123 24.5746 12.3373 25.5496C13.1498 25.8871 14.0498 25.2746 14.0498 24.3871V6.99961C14.0498 6.52461 13.7998 6.11211 13.3873 5.88711ZM6.2498 9.67461H9.0623C9.5748 9.67461 9.9998 10.0996 9.9998 10.6121C9.9998 11.1371 9.5748 11.5496 9.0623 11.5496H6.2498C5.7373 11.5496 5.3123 11.1371 5.3123 10.6121C5.3123 10.0996 5.7373 9.67461 6.2498 9.67461ZM9.9998 15.2996H6.2498C5.7373 15.2996 5.3123 14.8871 5.3123 14.3621C5.3123 13.8496 5.7373 13.4246 6.2498 13.4246H9.9998C10.5123 13.4246 10.9373 13.8496 10.9373 14.3621C10.9373 14.8871 10.5123 15.2996 9.9998 15.2996Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsEducationDepartment.defaultProps = {
  fill: '#4169E0',
  size: 8,
};
export const UnoJobsHealthDepartment = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <>
        <path
          d="M27.5 9.7625V15.625H22.4C22.25 15.6125 21.925 15.425 21.85 15.2875L20.55 12.825C20.0375 11.85 19.15 11.3 18.2 11.35C17.25 11.4 16.4375 12.0375 16.025 13.075L14.3 17.4L14.05 16.75C13.4375 15.1625 11.6875 13.9625 9.9625 13.9625L2.5 14V9.7625C2.5 5.2125 5.2125 2.5 9.7625 2.5H20.2375C24.7875 2.5 27.5 5.2125 27.5 9.7625Z"
          fill={fill}
        />
        <path
          d="M27.5 20.2378V17.5003H22.4C21.5625 17.5003 20.575 16.9003 20.1875 16.1628L18.8875 13.7003C18.5375 13.0378 18.0375 13.0753 17.7625 13.7628L14.8875 21.0253C14.575 21.8378 14.05 21.8378 13.725 21.0253L12.3 17.4253C11.9625 16.5503 10.9125 15.8378 9.975 15.8378L2.5 15.8753V20.2378C2.5 24.7128 5.125 27.4128 9.5375 27.4878C9.675 27.5003 9.825 27.5003 9.9625 27.5003H19.9625C20.15 27.5003 20.3375 27.5003 20.5125 27.4878C24.9 27.3878 27.5 24.7003 27.5 20.2378Z"
          fill={fill}
        />
        <path
          d="M2.50039 15.875V20.0125C2.47539 19.6125 2.46289 19.1875 2.46289 18.75V15.875H2.50039Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsHealthDepartment.defaultProps = {
  fill: '#4169E0',
  size: 8,
};
export const UnoJobsLawDepartment = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <>
        <path
          d="M25.6746 23.7996C25.4871 23.9871 25.2496 24.0746 25.0121 24.0746C24.7746 24.0746 24.5371 23.9871 24.3496 23.7996L18.1621 17.6121L18.8246 16.9496L19.4871 16.2871L25.6746 22.4746C26.0371 22.8371 26.0371 23.4371 25.6746 23.7996Z"
          fill={fill}
        />
        <path
          d="M8.0877 11.5996L15.3377 18.8496C15.8252 19.3371 15.8252 20.1246 15.3377 20.6121L14.2127 21.7496C13.2002 22.7496 11.6002 22.7496 10.6002 21.7496L5.1752 16.3246C4.1877 15.3371 4.1877 13.7246 5.1752 12.7246L6.3127 11.5871C6.8002 11.1121 7.6002 11.1121 8.0877 11.5996Z"
          fill={fill}
        />
        <path
          d="M23.2377 12.7371L18.4752 17.4871C17.9752 17.9871 17.1752 17.9871 16.6752 17.4871L9.4502 10.2621C8.9502 9.76211 8.9502 8.96211 9.4502 8.46211L14.2127 3.69961C15.2002 2.71211 16.8127 2.71211 17.8127 3.69961L23.2377 9.12461C24.2252 10.1246 24.2252 11.7246 23.2377 12.7371Z"
          fill={fill}
        />
        <path
          d="M10 27.1875H2.5C1.9875 27.1875 1.5625 26.7625 1.5625 26.25C1.5625 25.7375 1.9875 25.3125 2.5 25.3125H10C10.5125 25.3125 10.9375 25.7375 10.9375 26.25C10.9375 26.7625 10.5125 27.1875 10 27.1875Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsLawDepartment.defaultProps = {
  fill: '#4169E0',
  size: 8,
};
export const UnoJobsRetailDepartment = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <>
        <path
          d="M7.77469 3.75C7.45313 3.75003 7.13554 3.82095 6.84451 3.95771C6.55348 4.09447 6.29619 4.29371 6.09094 4.54125L1.61594 9.94125C0.769693 10.9575 1.49344 12.5 2.81594 12.5H27.1809C28.5047 12.5 29.2284 10.9588 28.3847 9.94L23.9084 4.54125C23.7032 4.29371 23.4459 4.09447 23.1549 3.95771C22.8639 3.82095 22.5463 3.75003 22.2247 3.75H7.77469ZM3.74969 14.375V23.4375C3.74969 24.2663 4.07893 25.0612 4.66498 25.6472C5.25104 26.2333 6.04589 26.5625 6.87469 26.5625H23.1247C23.9535 26.5625 24.7484 26.2333 25.3344 25.6472C25.9205 25.0612 26.2497 24.2663 26.2497 23.4375V14.375H3.74969ZM11.2497 19.0625C11.2497 19.4769 11.0851 19.8743 10.792 20.1674C10.499 20.4604 10.1016 20.625 9.68719 20.625C9.27279 20.625 8.87536 20.4604 8.58234 20.1674C8.28931 19.8743 8.12469 19.4769 8.12469 19.0625C8.12469 18.6481 8.28931 18.2507 8.58234 17.9576C8.87536 17.6646 9.27279 17.5 9.68719 17.5C10.1016 17.5 10.499 17.6646 10.792 17.9576C11.0851 18.2507 11.2497 18.6481 11.2497 19.0625ZM14.9997 20.625C14.5853 20.625 14.1879 20.4604 13.8948 20.1674C13.6018 19.8743 13.4372 19.4769 13.4372 19.0625C13.4372 18.6481 13.6018 18.2507 13.8948 17.9576C14.1879 17.6646 14.5853 17.5 14.9997 17.5C15.4141 17.5 15.8115 17.6646 16.1045 17.9576C16.3976 18.2507 16.5622 18.6481 16.5622 19.0625C16.5622 19.4769 16.3976 19.8743 16.1045 20.1674C15.8115 20.4604 15.4141 20.625 14.9997 20.625ZM21.8747 19.0625C21.8747 19.4769 21.7101 19.8743 21.417 20.1674C21.124 20.4604 20.7266 20.625 20.3122 20.625C19.8978 20.625 19.5004 20.4604 19.2073 20.1674C18.9143 19.8743 18.7497 19.4769 18.7497 19.0625C18.7497 18.6481 18.9143 18.2507 19.2073 17.9576C19.5004 17.6646 19.8978 17.5 20.3122 17.5C20.7266 17.5 21.124 17.6646 21.417 17.9576C21.7101 18.2507 21.8747 18.6481 21.8747 19.0625Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsRetailDepartment.defaultProps = {
  fill: '#4169E0',
  size: 8,
};

export const UnoJobsProductDepartment = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <>
        <path
          d="M24.1631 7.09961L16.3256 2.87461C15.5006 2.42461 14.5006 2.42461 13.6756 2.87461L5.83809 7.09961C5.26309 7.41211 4.91309 8.01211 4.91309 8.69961C4.91309 9.37461 5.26309 9.98711 5.83809 10.2996L13.6756 14.5246C14.0881 14.7496 14.5506 14.8621 15.0006 14.8621C15.4506 14.8621 15.9131 14.7496 16.3256 14.5246L24.1631 10.2996C24.7381 9.98711 25.0881 9.38711 25.0881 8.69961C25.0881 8.01211 24.7381 7.41211 24.1631 7.09961Z"
          fill={fill}
        />
        <path
          d="M12.3875 15.9875L5.0875 12.3375C4.525 12.0625 3.875 12.0875 3.35 12.4125C2.8125 12.75 2.5 13.3125 2.5 13.9375V20.825C2.5 22.0125 3.1625 23.0875 4.225 23.625L11.5125 27.275C11.7625 27.4 12.0375 27.4625 12.3125 27.4625C12.6375 27.4625 12.9625 27.375 13.25 27.2C13.7875 26.875 14.1 26.3 14.1 25.675V18.7875C14.1125 17.5875 13.45 16.5125 12.3875 15.9875Z"
          fill={fill}
        />
        <path
          d="M26.6504 12.4137C26.1129 12.0887 25.4629 12.0512 24.9129 12.3387L17.6254 15.9887C16.5629 16.5262 15.9004 17.5887 15.9004 18.7887V25.6762C15.9004 26.3012 16.2129 26.8762 16.7504 27.2012C17.0379 27.3762 17.3629 27.4637 17.6879 27.4637C17.9629 27.4637 18.2379 27.4012 18.4879 27.2762L25.7754 23.6262C26.8379 23.0887 27.5004 22.0262 27.5004 20.8262V13.9387C27.5004 13.3137 27.1879 12.7512 26.6504 12.4137Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsProductDepartment.defaultProps = {
  fill: '#4169E0',
  size: 8,
};
export const UnoJobsHospitalityDepartment = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 34 18',
    path: (
      <>
        <path
          d="M2.31152 15H31.4035"
          stroke="#4169E0"
          strokeWidth="4.01"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M16.858 2.38477C10.2052 2.38477 4.79053 7.69026 4.61632 14.3012C4.61167 14.4824 4.76034 14.6311 4.94152 14.6311H28.7745C28.9556 14.6311 29.1043 14.4824 29.0997 14.3012C28.9254 7.69026 23.5108 2.38477 16.858 2.38477Z"
          fill={fill}
        />
        <path
          d="M19 2C19 3.10572 18.1057 4 17 4C15.8943 4 15 3.10572 15 2C15 0.894281 15.8943 0 17 0C18.1057 0 19 0.894281 19 2Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsHospitalityDepartment.defaultProps = {
  fill: '#4169E0',
  size: 8,
};
export const UnoJobsWellnessDepartment = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 34 30',
    path: (
      <>
        <g clipPath="url(#clip0_7789_7814)">
          <path
            d="M33.2959 11.2503C31.5944 11.2579 25.3852 11.6112 20.7662 16.1136C18.8256 17.8497 17.6397 19.8226 16.875 21.6718C16.1104 19.8226 14.9244 17.8497 12.9838 16.1136C8.36486 11.6112 2.15568 11.2579 0.454122 11.2503C0.195724 11.2491 -0.00232316 11.4495 2.05873e-05 11.7085C0.0134972 13.3444 0.41838 19.0995 5.20139 23.3862C10.1244 28.1804 15 28.1253 16.875 28.1253C18.75 28.1253 23.6244 28.181 28.5487 23.3862C33.3322 19.0989 33.7365 13.3444 33.75 11.7085C33.7524 11.4495 33.5543 11.2491 33.2959 11.2503ZM16.8738 17.7308C17.625 16.6263 18.491 15.6343 19.4572 14.7706C20.5758 13.6802 21.7764 12.8194 22.9881 12.1233C22.0248 7.99248 19.9576 4.32744 17.3203 2.03232C17.0795 1.82256 16.6746 1.82256 16.4332 2.03232C13.7971 4.32568 11.7299 7.98721 10.7649 12.1146C11.9584 12.8001 13.1379 13.6462 14.2348 14.7155C15.2332 15.6101 16.1194 16.6226 16.8738 17.7308Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_7789_7814">
            <rect width="33.75" height="30" fill="white" />
          </clipPath>
        </defs>
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsWellnessDepartment.defaultProps = {
  fill: '#4169E0',
  size: 8,
};
export const UnoJobsAviationDepartment = ({
  fill = 'currentColor',
  size = 8,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <>
        <path
          d="M19.725 19.8004C19.725 19.8004 23.3 16.2504 24.5125 15.0004C28.35 11.2504 26.4375 3.52539 26.4375 3.52539C26.4375 3.52539 18.75 1.61289 15 5.45039C12.075 8.30039 10.175 10.2754 10.175 10.2754C10.175 10.2754 5.375 9.27539 2.5 12.1504L17.8125 27.5004C20.6875 24.5879 19.725 19.8004 19.725 19.8004ZM17.85 8.55039C18.0822 8.31795 18.3579 8.13356 18.6614 8.00774C18.9649 7.88193 19.2902 7.81718 19.6187 7.81718C19.9473 7.81718 20.2726 7.88193 20.5761 8.00774C20.8796 8.13356 21.1553 8.31795 21.3875 8.55039C21.7369 8.90014 21.9747 9.3456 22.0709 9.83047C22.1672 10.3154 22.1175 10.8179 21.9282 11.2745C21.7389 11.7312 21.4184 12.1215 21.0074 12.396C20.5963 12.6706 20.1131 12.8172 19.6187 12.8172C19.1244 12.8172 18.6412 12.6706 18.2301 12.396C17.8191 12.1215 17.4986 11.7312 17.3093 11.2745C17.12 10.8179 17.0703 10.3154 17.1666 9.83047C17.2628 9.3456 17.5006 8.90014 17.85 8.55039ZM3.75 26.2504C6.06384 26.1844 8.27894 25.2983 10 23.7504L6.25 20.0004C3.75 21.2504 3.75 26.2504 3.75 26.2504Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnoJobsAviationDepartment.defaultProps = {
  fill: '#4169E0',
  size: 8,
};

export const UnojobsAppLogo = ({
  fill = 'currentColor',
  size = 50,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: `0 0 ${size} ${size}`,
    path: (
      <>
        <rect width={size} height={size} fill={fill} rx="5" />
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
  return <CustomIcon size={size} />;
};

UnojobsAppLogo.defaultProps = {
  fill: '#4169E0',
  size: 50,
};

export const UnojobsTickIcon = ({
  fill = 'currentColor',
  size = 6,
}: IconProps) => {
  const CustomIcon = createIcon({
    viewBox: '0 0 24 24',
    path: (
      <>
        <path
          d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
          fill={fill}
        />
      </>
    ),
  });
  return <CustomIcon size={size} />;
};

UnojobsTickIcon.defaultProps = {
  fill: '#479B36',
  size: 6,
};
