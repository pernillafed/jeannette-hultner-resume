import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
import Sunflower from "../../assets/sunflower.png";
import { useState } from "react";
import DropdownMenu from "./dropdown-menu/DropdownMenu";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.navbar}>
                <div className={styles.title}>
                    <img src={Sunflower} alt="Flower" />
                    <span onClick={() => navigate("/")}>Jeannette Hultner</span>
                </div>
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setIsDropdownActive(!isDropdownActive)}
                    className={isDropdownActive ? styles.dropdownActive : ""}
                />
                <div className={styles.navLinks}>
                    <NavLink to="/presentation">Presentation</NavLink>
                    <NavLink to="/pictures">Bilder</NavLink>
                    <NavLink to="/showreel">Showreel</NavLink>
                    <NavLink to="/cv">CV</NavLink>
                </div>
            </div>
            {isDropdownActive && <DropdownMenu setIsDropdownActive={setIsDropdownActive} />}
        </div>
    );
}
 
export default Navbar;