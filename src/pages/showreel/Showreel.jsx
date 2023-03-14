import styles from "./Showreel.module.css";
import projectLinks from "../../assets/data/projectLinks.json";
import ProjectVideo from "../../assets/project.mov";

const Showreel = () => {
    return (
        <div className={styles.showreel}>
            <h1>Showreel</h1>
            <div className={styles.video}>Showreel-video</div>
            <h2>Länkar till tidigare projekt</h2>
            <div className={styles.projectLinks}>
                {projectLinks.map(projectLink => (
                    <a href={projectLink.url} key={projectLink.id}>{projectLink.name}</a>
                ))}
            </div>
            <h2>Bakom kulisserna</h2>
            <video width="100%" controls>
                <source src={ProjectVideo} type="video/mp4" />
            </video>
        </div>
    );
}
 
export default Showreel;