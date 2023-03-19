import PresentationVideo from "../../assets/videos/presentation.mov";
import presentationText from "../../assets/data/presentationText.json";
import styles from "./Presentation.module.css";

const Presentation = () => {
    return (
        <div className={styles.presentation}>
            <h1>Presentation</h1>
            <video width="100%" controls>
                <source src={`${PresentationVideo}#t=0.001`} type="video/mp4" />
            </video>
            <p>{presentationText.introduction}</p>
        </div>
    );
}
 
export default Presentation;