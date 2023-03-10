import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
import Sunflower from "../../assets/sunflower.png";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                <img src={Sunflower} alt="Flower" />
                <span>Jennette Hultner</span>
            </div>
            <FontAwesomeIcon icon={faBars} />
        </div>
    );
}
 
export default Navbar;