import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <a href="mailto:jeannette.hultner@telia.com">jeannette.hultner@telia.com</a>
            <a href="tel:0738324531">+46 738 32 45 31</a>
        </div>
    );
}
 
export default Footer;