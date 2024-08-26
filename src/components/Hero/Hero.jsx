import React, {useState} from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const [text] = useTypewriter({
    words: [" Hi I'm Jordan"],
    loop: 1,
    typeSpeed: 100,
    onLoopDone: () => {
      setTimeout(() => {
        setIsTypingComplete(true);
      }, 2000);
    },
  })

  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>
	  <span>{text}</span>
	  {!isTypingComplete && <Cursor cursorColor='red' />}
	</h1>
        <p className={styles.description}>
          I'm a full-stack developer with experience in Machine learning too.
	  Reach out if you'd like to learn more!
        </p>
	<a href="/cv_Jordan_Munoz.pdf" className={styles.cvBtn} target="_blank" rel="noopener noreferrer">
	  Download CV
	</a>
      </div>
      <img
	//<a href="https://www.flaticon.com/free-icons/programming-language" title="programming language icons">Programming language icons created by Freepik - Flaticon</a>
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
