import { AlertDialog } from './AlertDialog';
import { AlertDialogContent } from './AlertDialogContent';
import { AlertDialogBody } from './AlertDialogBody';
import { AlertDialogCloseButton } from './AlertDialogCloseButton';
import { AlertDialogFooter } from './AlertDialogFooter';
import { AlertDialogHeader } from './AlertDialogHeader';
// import type { IAlertDialogComponentType } from "native-base";

const AlertDialogTemp: any = AlertDialog;

AlertDialogTemp.Content = AlertDialogContent;
AlertDialogTemp.CloseButton = AlertDialogCloseButton;
AlertDialogTemp.Header = AlertDialogHeader;
AlertDialogTemp.Footer = AlertDialogFooter;
AlertDialogTemp.Body = AlertDialogBody;

const AlertDialogMain: any = AlertDialogTemp as any;

export { AlertDialogMain as AlertDialog };
// export type { IAlertDialogProps } from "native-base";
