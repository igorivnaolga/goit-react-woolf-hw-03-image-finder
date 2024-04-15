import Modal from 'react-modal';
import css from './Modal.module.css';
Modal.setAppElement('#root');

export const ImageModal = ({ largeImg, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={largeImg} alt="" />
    </Modal>
  );
};
