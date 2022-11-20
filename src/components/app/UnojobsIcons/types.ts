/**Pregess Icon types */
export interface IProgressIconProps {
  onClick?: () => void;
  style?: React.CSSProperties;
  status: IProgressStatusType;
  page?: IProgressPageType;
  fill?: string;
  size?: number | string;
  marginTop: number | string;
  marginLeft: number | string;
  borderColor?: string;
}

export declare type IProgressPageType =
  | 'profile'
  | 'review'
  | 'complete'
  | 'job';

export declare type IProgressStatusType = 'on' | 'complete' | 'off';
