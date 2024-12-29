import Modal from "react-modal";
import styles from "./ImageModal.module.css"

Modal.setAppElement("#root");

export default function ImageModal({ image, onClose }) {
  return (
    <Modal isOpen={!!image} onRequestClose={onClose}>
      <button onClick={onClose}>Close</button>
      <img className={styles.img} src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
}