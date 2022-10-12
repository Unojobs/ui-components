import { Modal } from './Modal';
import { ModalContent } from './ModalContent';
import { ModalBody } from './ModalBody';
import { ModalCloseButton } from './ModalCloseButton';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';
import type {
  // IIconButtonProps,
  IModalProps,
  // IScrollViewProps
} from 'native-base';
// import type { MutableRefObject } from 'react';

const ModalTemp: any = Modal;

ModalTemp.Content = ModalContent;
ModalTemp.CloseButton = ModalCloseButton;
ModalTemp.Header = ModalHeader;
ModalTemp.Footer = ModalFooter;
ModalTemp.Body = ModalBody;

// export type IModalComponentType = ((
//   props: IModalProps & { ref?: MutableRefObject<any> }
// ) => JSX.Element) & {
//   Body: React.MemoExoticComponent<
//     (
//       props: InterfaceBoxProps<IModalProps> & {
//         _scrollview?: IScrollViewProps;
//       } & {
//         ref?: MutableRefObject<any>;
//       }
//     ) => JSX.Element
//   >;
//   CloseButton: React.MemoExoticComponent<
//     (props: IIconButtonProps & { ref?: MutableRefObject<any> }) => JSX.Element
//   >;
//   Content: React.MemoExoticComponent<
//     (
//       props: InterfaceBoxProps<IModalProps> & { ref?: MutableRefObject<any> }
//     ) => JSX.Element
//   >;
//   Footer: React.MemoExoticComponent<
//     (
//       props: InterfaceBoxProps<IModalProps> & { ref?: MutableRefObject<any> }
//     ) => JSX.Element
//   >;
//   Header: React.MemoExoticComponent<
//     (
//       props: InterfaceBoxProps<IModalProps> & { ref?: MutableRefObject<any> }
//     ) => JSX.Element
//   >;
// };

const ModalMain: any = ModalTemp as IModalProps;

export { ModalMain as Modal };
export type { IModalProps } from './types';
