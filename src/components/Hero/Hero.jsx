import React, {useState} from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import me from "@/data/hero.json";
import styles from "./Hero.module.css";
import { getImageUrl } from "@/utils";

const { welcome, heroMe } = me

export const Hero = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [text] = useTypewriter({
    words: [welcome],
    loop: 1,
    typeSpeed: 100,
    onLoopDone: () => {
        setIsTypingComplete(true);
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
	  { heroMe }
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
