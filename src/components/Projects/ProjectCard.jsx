import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "@/utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source },
}) => {
  return (
    <div className={styles.container}>
	<img
	  src={getImageUrl(imageSrc)}
	  alt={`Image of ${title}`}
	  title={title}
	  className={styles.image}
	/>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
	      <img
		src={getImageUrl(skill.url)}
		alt={`Image of ${skill.name}`}
		title={skill.name}
		className={styles.imageSkill}
	      />
            </li>
          );
        })}
      </ul>
      <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
	Source
      </a>
    </div>
  );
};
