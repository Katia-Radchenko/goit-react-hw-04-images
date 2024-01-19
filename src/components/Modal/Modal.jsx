import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.clickOnEscKeyHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickOnEscKeyHandler);
  }

  clickOnEscKeyHandler = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
      ;
    }
  };

  clickOnBackdropHandler = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
      ;
    }
  };


  render() {
    const { children } = this.props;
    return createPortal(
      <Backdrop onClick={this.clickOnBackdropHandler}>
        <ModalWindow>{children}</ModalWindow>
      </Backdrop>
      , modalRoot);
  }
}

export default Modal;
