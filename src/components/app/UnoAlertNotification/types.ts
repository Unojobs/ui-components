export interface IUnoAlertNotificationProps {
  status?: IAlertStatusType;
  description?: string;
  variant?: IAlertVariantType;
  title?: string;
  color?: string;
  maxWidth?: number | string;
  minWidth?: string | number;
  closeToast?: () => void | undefined;
  marginLeft?: string | number | undefined;
  marginRight?: string | number | undefined;
  marginBottom?: string | number | undefined;
  marginTop?: string | number | undefined;
}

export declare type IAlertPlacementType =
  | 'bottom-right'
  | 'bottom'
  | 'top'
  | 'top-right'
  | 'top-left'
  | 'bottom-left';

export declare type IAlertVariantType =
  | 'solid'
  | 'left-accent'
  | 'top-accent'
  | 'outline'
  | 'subtle'
  | 'outline-light';

export declare type IAlertStatusType = 'error' | 'success' | 'info' | 'warning';
