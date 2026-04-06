import React, { useState } from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import me from "@/data/hero.json";
import styles from "./Hero.module.css";
import { getImageUrl } from "@/utils";
import { RepelTitle } from "./RepelTitle";

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
          {isTypingComplete
            ? <RepelTitle text={welcome} />
            : <><span>{text}</span><Cursor cursorColor='red' /></>
          }
        </h1>
        <p className={styles.description}>
          {isTypingComplete
            ? <RepelTitle text={heroMe} />
            : heroMe
          }
        </p>
	<a href="/cv_Jordan_Munoz.pdf" className={styles.cvBtn} target="_blank" rel="noopener noreferrer">
	  Download CV
	</a>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <img
          src={getImageUrl("hero/me.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </div>
    </section>
  );
};
