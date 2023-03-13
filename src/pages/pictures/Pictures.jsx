import portraits from "../../assets/photos/portraits/portraits";
import projects from "../../assets/photos/projects/projects";
import styles from "./Pictures.module.css";

const Pictures = () => {
    return (
        <div className={styles.pictures}>
            <h1>Bilder</h1>
            <div className={styles.portraits}>
                <h2>Porträtt</h2>
                <div className={styles.portraitGrid}>
                    {portraits.map((portrait, i) => (
                        <img src={portrait} alt="Jeannette Hultner-porträtt" key={i} />
                    ))}
                </div>
            </div>
            <div className={styles.projects}>
                <h2>Projekt</h2>
                <div className={styles.projectGrid}>
                    {projects.map((project, i) => (
                        <img src={project} alt="Jeannette Hultner-projekt" key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Pictures;