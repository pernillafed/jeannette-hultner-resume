import { useState } from "react";
import portraits from "../../assets/photos/portraits/portraits";
import projects from "../../assets/photos/projects/projects";
import PictureModal from "./picture-modal/PictureModal";
import styles from "./Pictures.module.css";

const Pictures = () => {
    const [showModal, setShowModal] = useState(false);
    const [imagePathProp, setImagePathProp] = useState(null);

    const handlePictureClick = (imagePath) => {
        setImagePathProp(imagePath);
        setShowModal(true);
    };

    return (
        <div className={styles.pictures}>
            <h1>Bilder</h1>
            <div className={styles.portraits}>
                <h2>Porträtt</h2>
                <div className={styles.portraitGrid}>
                    {portraits.map((portrait, i) => (
                        <img src={portrait} alt="Jeannette Hultner-porträtt" key={i} onClick={() => handlePictureClick(portrait)} />
                    ))}
                </div>
            </div>
            <div className={styles.projects}>
                <h2>Projekt</h2>
                <div className={styles.projectGrid}>
                    {projects.map((project, i) => (
                        <img src={project} alt="Jeannette Hultner-projekt" key={i} onClick={() => handlePictureClick(project)} />
                    ))}
                </div>
            </div>
            {showModal && <PictureModal imagePathProp={imagePathProp} setShowModal={setShowModal} />}
        </div>
    );
}
 
export default Pictures;