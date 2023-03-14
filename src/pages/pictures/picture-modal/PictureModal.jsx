import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./PictureModal.module.css";

const PictureModal = ({ imagePathProp, setShowModal }) => {
    return (
        <div className={styles.pictureModal}>
            <div>
                <FontAwesomeIcon icon={faXmark} onClick={() => setShowModal(false)} />
                <img src={imagePathProp} alt="Jeannette Hultner" />
            </div>
        </div>
    );
}
 
export default PictureModal;