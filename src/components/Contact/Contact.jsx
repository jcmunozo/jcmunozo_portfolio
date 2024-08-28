import React from "react";

import styles from "./Contact.module.css";
import { CopyButton } from "./CopyButton"
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Let’s connect!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:jcmunozo@unicauca.edu.co">
	    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
	    <span>jcmunozo@unicauca.edu.co</span>
	  </a>
	  <CopyButton text="jcmunozo@unicauca.edu.co" />
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/jordanmuñoz/" target="_blank" rel="noopener noreferrer">
	    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"/>
	    <span>linkedin.com/in/jordanmuñoz</span>
	  </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.github.com/jcmunozo" target="_blank" rel="noopener noreferrer">
	    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
	    <span>github.com/jcmunozo</span>
	  </a>
        </li>
      </ul>
    </footer>
  );
};
