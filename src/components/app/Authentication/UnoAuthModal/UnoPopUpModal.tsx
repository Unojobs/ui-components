import React, { useEffect } from 'react';
import { Modal } from '../../../composites';
import { HStack, Text } from '../../../primitives';
import { style } from '../style.authentication';
import type { IUnoPopUpModalProps } from './types';
import { CircularCorrectIcon } from '../../UnojobsIcons';

export const UnoPopUpModal = (props: IUnoPopUpModalProps) => {
  /** Handle back screen scroll when modal is open */
  useEffect(() => {
    if (props.isOpened === true && window !== undefined) {
      // When the modal is shown, we want a fixed body
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    }
    if (props.isOpened === false && window !== undefined) {
      // When the modal is hidden, we want to remain at the top of the scroll position
      document.body.style.position = '';
      document.body.style.top = '';
    }
  }, [props.isOpened]);

  return (
    <>
      <Modal
        isOpen={props.isOpened}
        onClose={() => props.setIsOpened?.(false)}
        safeAreaTop={true}
        closeOnOverlayClick={false}
      >
        <Modal.Content
          {...style.modalPosition}
          maxWidth={props.maxWidth}
          maxHeight={props.maxHeight}
        >
          <Modal.CloseButton />
          <Modal.Body>
            <HStack
              space={2}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              {props.icon}
              <Text
                maxWidth={props.textWidth}
                fontSize={'2xl'}
                fontWeight={'semibold'}
                lineHeight={'xl'}
                color={'textColors.primary'}
              >
                {props.text}
              </Text>
            </HStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};
UnoPopUpModal.defaultProps = {
  text: 'hdhdhdh',
  textWidth: 387,
  icon: <CircularCorrectIcon fill={'#4169E0'} size={6} />,
  maxWidth: 543,
  maxHeight: 168,
  isOpened: false,
  setIsOpened: undefined,
};
