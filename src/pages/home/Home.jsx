import styles from "./Home.module.css";
import Jeannette from "../../assets/photos/jeannette.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard, faMasksTheater, faCamera } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>Välkommen</h1>
            <div className={styles.hero}>
                <img src={Jeannette} alt="Jeannette Hultner" />
                <div>
                    <div>
                        <p className={styles.name}>Jeannette Hultner</p>
                        <p className={styles.profession}>Skådespelerska</p>
                    </div>
                    <div>
                        <a href="mailto:jeannette.hultner@telia.com">jeannette.hultner@telia.com</a>
                        <a href="tel:0738324531">+46 738 32 45 31</a>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div>
                    <FontAwesomeIcon icon={faClapperboard} />
                    <p>FILM</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faMasksTheater} />
                    <p>TEATER</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCamera} />
                    <p>FOTO</p>
                </div>
            </div>
        </div>
    );
}
 
export default Home;