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
            if (newTabId === "category-1") {
                window.scrollTo(0, 80);
            } else if (newTabId === "category-2") {
                window.scrollTo(0, 154);
            } else if (newTabId === "category-3") {
                window.scrollTo(0, 228);
            } else {
                window.scrollTo(0, 300);
            }
        }
    };

    return (
        <div className={styles.cv}>
            <h1>CV</h1>
            <div className={styles.cvContainer}>
                {cvJSON.map(category => (
                    <div
                        key={category.id}
                        className={activeTab === category.id ? styles.contentVisible : ""}
                    >
                        <div
                            onClick={() => changeTab(category.id)}
                            className={activeTab === category.id 
                                ? `${styles.tabContainer} ${styles.tabActive}`
                                : styles.tabContainer
                            }
                        >
                            <span>{category.name.toUpperCase()}</span>
                            <FontAwesomeIcon icon={activeTab === category.id ? faAngleUp : faAngleDown} />
                        </div>
                        <div className={activeTab === category.id ? styles.cvContent : ""}>
                            {activeTab === category.id && category.entries.map(entry => (
                                <div key={entry.id} className={activeTab === category.id ? styles.cvEntry : ""}>
                                    <div className={activeTab === category.id ? styles.entryHeadingWrapper : ""}>
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