import React from "react";

import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
		<div className={styles.imageCover}>
		  <img
		    src={getImageUrl(historyItem.imageSrc)}
		    alt={`${historyItem.organisation} Logo`}
		  />
		</div>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}`}</h3>
		  <p>{`${historyItem.organisation}`}</p>
		  <br/>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.bottomBlur} />
    </section>
  );
};
