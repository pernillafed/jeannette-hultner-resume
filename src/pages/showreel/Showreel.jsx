import styles from "./Showreel.module.css";
import projectLinks from "../../assets/data/projectLinks.json";
import ShowreelVideo from "../../assets/videos/showreel.mp4";

const Showreel = () => {
    return (
        <div className={styles.showreel}>
            <h1>Showreel</h1>
            <video width="100%" controls>
                <source src={ShowreelVideo} type="video/mp4" />
            </video>
            <h2>Länkar till tidigare projekt</h2>
            <div className={styles.projectLinks}>
                {projectLinks.map(projectLink => (
                    <a href={projectLink.url} key={projectLink.id}>{projectLink.name}</a>
                ))}
            </div>
        </div>
    );
}
 
export default Showreel;