import {Modal} from './Modal';
import {ModalContent} from './ModalContent';
import {ModalBody} from './ModalBody';
import {ModalCloseButton} from './ModalCloseButton';
import {ModalFooter} from './ModalFooter';
import {ModalHeader} from './ModalHeader';
import type { IModalProps } from 'native-base';

const ModalTemp: any = Modal;

ModalTemp.Content = ModalContent;
ModalTemp.CloseButton = ModalCloseButton;
ModalTemp.Header = ModalHeader;
ModalTemp.Footer = ModalFooter;
ModalTemp.Body = ModalBody;

const ModalMain = ModalTemp as IModalProps;

export { ModalMain as Modal };
export type { IModalProps } from './types';
