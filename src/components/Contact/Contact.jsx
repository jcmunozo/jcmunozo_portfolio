import React from "react";

import styles from "./Contact.module.css";
import { CopyButton } from "./CopyButton"
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:jcmunozo@unicauca.edu.co">jcmunozo@unicauca.edu.co</a>
	  <CopyButton text="jcmunozo@unicauca.edu.co" />
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/jordanmuñoz/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jordanmuñoz</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/jcmunozo" target="_blank" rel="noopener noreferrer">github.com/jcmunozo</a>
        </li>
      </ul>
    </footer>
  );
};
