import styles from "./CV.module.css";
import cvJSON from "../../assets/data/cv.json";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const CV = () => {
    const [activeTab, setActiveTab] = useState(null);

    const changeTab = (newTabId) => {
        if (newTabId === activeTab) {
            setActiveTab(null);
        } else {
            setActiveTab(newTabId);
        }
    };

    return (
        <div className={styles.cv}>
            <h1>CV</h1>
            <div>
                {cvJSON.map(category => (
                    <div
                        key={category.id}
                        className={activeTab === category.id
                            ? `${styles.categoryContent} ${styles.tabActive}`
                            : styles.categoryContent
                        }
                    >
                        <div onClick={() => changeTab(category.id)} className={styles.tabContainer}>
                            <span>{category.name.toUpperCase()}</span>
                            <FontAwesomeIcon icon={activeTab === category.id ? faAngleUp : faAngleDown} />
                        </div>
                        <div className={activeTab === category.id ? styles.cvContent : ""}>
                            {activeTab === category.id && category.entries.map(entry => (
                                <div key={entry.id} className={activeTab === category.id ? styles.cvEntry : ""}>
                                    <div>
                                        <h2>{entry.name}</h2>
                                        <p>{entry.description}</p>
                                    </div>
                                    <p className={activeTab === category.id ? styles.entryCompany : ""}>
                                        {entry.company}&nbsp;
                                        ({entry.year})
                                    </p>
                                    <p className={activeTab === category.id ? styles.entryTitle : ""}>{entry.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default CV;