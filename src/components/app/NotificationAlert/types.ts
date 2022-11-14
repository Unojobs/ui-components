export interface INotificationAlertProps {
  status?: 'error' | 'success' | 'info' | 'warning';
  message?: string;
  variant?:
    | 'solid'
    | 'left-accent'
    | 'top-accent'
    | 'outline'
    | 'subtle'
    | 'outline-light';
  show?: boolean;
  title?: string;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
  color: string;
  removeTimerInSeconds: number;
  setTimer: boolean;
}
