import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "@/utils";
import topics from "@/data/about.json";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
	  {topics.map((topic, id) => {
	    return (
	      <li key={id} className={styles.aboutItem}>
		<img src={getImageUrl(topic.img)} className={styles.aboutItemImage} alt="Frontend icon" />
		<div className={styles.aboutItemText}>
		  <h3>{topic.title}</h3>
		  <p>
		    {topic.description}
		  </p>
		</div>
	      </li>
	    )
	  })}
        </ul>
      </div>
    </section>
  );
};
