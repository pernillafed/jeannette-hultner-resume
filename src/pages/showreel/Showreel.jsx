import styles from "./Showreel.module.css";
import projectLinks from "../../assets/data/projectLinks.json";
import ShowreelVideo from "../../assets/videos/showreel.mp4";
import ShowreelAddition from "../../assets/videos/showreel-addition1.mp4";

const Showreel = () => {
    return (
        <div className={styles.showreel}>
            <h1>Showreel</h1>
            <video width="100%" controls>
                <source src={`${ShowreelVideo}#t=0.001`} type="video/mp4" />
            </video>
            <h2>Tillägg</h2>
            <div className={styles.addition}>
              <video width="100%" controls>
                  <source src={`${ShowreelAddition}#t=0.001`} type="video/mp4" />
              </video>
            </div>
            <h2>Länkar till tidigare projekt</h2>
            <div className={styles.projectLinks}>
                {projectLinks.map(projectLink => (
                    <a href={projectLink.url} key={projectLink.id} target="_blank">{projectLink.name}</a>
                ))}
            </div>
        </div>
    );
}
 
export default Showreel;