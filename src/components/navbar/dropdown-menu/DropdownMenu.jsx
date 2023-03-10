import { NavLink } from "react-router-dom";
import styles from "./DropdownMenu.module.css";

const DropdownMenu = () => {
    return (
        <div className={styles.dropdown}>
            <NavLink to="/presentation">Presentation</NavLink>
            <NavLink to="/photos">Bilder</NavLink>
            <NavLink to="/showreel">Showreel</NavLink>
            <NavLink to="/cv">CV</NavLink>
        </div>
    );
}
 
export default DropdownMenu;