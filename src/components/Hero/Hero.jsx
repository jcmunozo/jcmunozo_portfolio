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
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
	  <span>{text}</span>
	  {!isTypingComplete && <Cursor cursorColor='red' />}
	</h1>
        <p className={styles.description}>
          I'm a full-stack developer with experience in Machine learning too.
	  Reach out if you'd like to learn more!
        </p>
	<a href="/jordan_cv.pdf" className={styles.downloadBtn} download>
	  Download CV
	</a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
