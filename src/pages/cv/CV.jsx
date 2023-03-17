import styles from "./CV.module.css";
import cvJSON from "../../assets/data/cv.json";
import { useState } from "react";

const CV = () => {
    const [activeTab, setActiveTab] = useState("film/tv");

    const changeTab = (newTab) => {
        setActiveTab(newTab);
    };

    return (
        <div className={styles.cv}>
            <h1>CV</h1>
            <div className={styles.cvContainer}>
                <div className={styles.tabContainer}>
                    {cvJSON.map(category => (
                        <span key={category.id} onClick={() => changeTab(category.name)}>{category.name.toUpperCase()}</span>
                    ))}
                </div>
                <div>
                    {cvJSON.find(category => category.name === activeTab).entries.map(entry => (
                        <div key={entry.id}>
                            <h2>{entry.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default CV;