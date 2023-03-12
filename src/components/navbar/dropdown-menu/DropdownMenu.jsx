import { NavLink } from "react-router-dom";
import styles from "./DropdownMenu.module.css";

const DropdownMenu = ({ setIsDropdownActive }) => {
    return (
        <div className={styles.dropdown}>
            <NavLink to="/presentation" onClick={() => setIsDropdownActive(false)}>Presentation</NavLink>
            <NavLink to="/photos" onClick={() => setIsDropdownActive(false)}>Bilder</NavLink>
            <NavLink to="/showreel" onClick={() => setIsDropdownActive(false)}>Showreel</NavLink>
            <NavLink to="/cv" onClick={() => setIsDropdownActive(false)}>CV</NavLink>
        </div>
    );
}
 
export default DropdownMenu;