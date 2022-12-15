export interface IUnoAlertNotificationProps {
  status?: 'error' | 'success' | 'info' | 'warning';
  description?: string;
  variant?:
    | 'solid'
    | 'left-accent'
    | 'top-accent'
    | 'outline'
    | 'subtle'
    | 'outline-light';
  title?: string;
  color?: string;
  placement?:
    | 'bottom-right'
    | 'bottom'
    | 'top'
    | 'top-right'
    | 'top-left'
    | 'bottom-left';
  maxWidth?: number | string;
  alert?: boolean;
  setAlert?: React.Dispatch<React.SetStateAction<boolean>>;
  minWidth?: string | number;
  closeToast: () => void;
}
