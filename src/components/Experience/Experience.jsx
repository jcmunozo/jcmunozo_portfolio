import React from "react";

import styles from "./Experience.module.css";
import experience from "../../data/experience.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.experience}>
          {experience.map((experienceItem, id) => {
            return (
              <li key={id} className={styles.experienceItem}>
		<div className={styles.imageCover}>
		  <img
		    src={getImageUrl(experienceItem.imageSrc)}
		    alt={`${experienceItem.organisation} Logo`}
		  />
		</div>
                <div className={styles.experienceItemDetails}>
                  <h3>{`${experienceItem.role}`}</h3>
		  <p>{`${experienceItem.organisation}`}</p>
		  <br/>
                  <p>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                  <ul>
                    {experienceItem.experiences.map((experience, id) => {
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
