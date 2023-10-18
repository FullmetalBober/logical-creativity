'use client';

import React from 'react';
import { ModalProps, ButtonProps, useDisclosure } from '@nextui-org/react';
import { Button } from '@nextui-org/button';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';

type Button = {
  text: string;
  color: ButtonProps['color'];
  handler?: React.MouseEventHandler<HTMLButtonElement>;
};

type Props = {
  ModalHeaderElement: React.ReactNode;
  ModalBodyElement: React.ReactNode;
  closeButton?: Button;
  actionButton?: Button;
  size?: ModalProps['size'];
  radius?: ModalProps['radius'];
  backdrop?: ModalProps['backdrop'];
  color?: 'default' | 'success' | 'warning' | 'error';
  isTriggered?: boolean;
  openModalButtonText?: string;
};

export default function MyModal({
  ModalHeaderElement,
  ModalBodyElement,
  actionButton,
  closeButton,
  size = 'md',
  radius = 'md',
  backdrop = 'blur',
  color = 'default',
  openModalButtonText = 'Open',
  isTriggered = false,
}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  let modalClassnames = {};

  if (isTriggered && !isOpen) onOpen();

  if (color === 'default') modalClassnames = { body: 'pt-6 pb-3' };
  if (color === 'success') modalClassnames = {};
  if (color === 'warning')
    modalClassnames = {
      body: 'pt-6 pb-3',
      base: 'border-amber-500 bg-amber-300 dark:bg-amber-600 text-white',
      header: 'border-b-[1px] border-white',
      closeButton: 'text-white hover:bg-black',
    };
  if (color === 'error') modalClassnames = {};

  return (
    <>
      {!isTriggered && <Button onPress={onOpen}>{openModalButtonText}</Button>}
      <Modal
        radius={radius}
        size={size}
        backdrop={backdrop}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement={'center'}
        classNames={modalClassnames}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{ModalHeaderElement}</ModalHeader>
              <ModalBody>{ModalBodyElement}</ModalBody>
              {(actionButton || closeButton) && (
                <ModalFooter>
                  {closeButton && (
                    <Button
                      color={closeButton.color}
                      onClick={closeButton.handler}
                      onPress={onClose}
                      className={'text-white'}
                    >
                      {closeButton.text}
                    </Button>
                  )}
                  {actionButton && (
                    <Button
                      color={actionButton.color}
                      onClick={actionButton.handler}
                      onPress={onClose}
                      className={'text-white'}
                    >
                      {actionButton.text}
                    </Button>
                  )}
                </ModalFooter>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
