import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import styles from "./PictureModal.module.css";

const PictureModal = ({ imagePathProp, setShowModal }) => {
    const modalRef = useRef();

    useOutsideClick(() => setShowModal(false), modalRef);

    return (
        <div className={styles.pictureModal}>
            <div ref={modalRef}>
                <FontAwesomeIcon icon={faXmark} onClick={() => setShowModal(false)} />
                <img src={imagePathProp} alt="Jeannette Hultner" />
            </div>
        </div>
    );
}
 
export default PictureModal;