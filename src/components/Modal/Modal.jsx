import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {

  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, []);


  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      onClose();
    }
  };


  return createPortal(
    <Backdrop onClick={closeModal}>
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>
    , modalRoot);
};


export default Modal;
