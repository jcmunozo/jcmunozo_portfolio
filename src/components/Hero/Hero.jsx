import React from "react";

import me from "@/data/hero.json";
import styles from "./Hero.module.css";
import { getImageUrl } from "@/utils";
import { RevealText } from "./RevealText";

const { welcome, heroMe } = me;

// Description starts revealing once the title has mostly settled
const TITLE_WORDS = welcome.split(" ").length;
const DESCRIPTION_DELAY = TITLE_WORDS * 0.07 + 0.35;

export const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>
          <RevealText text={welcome} accent={false} />
        </h1>
        <p className={styles.description}>
          <RevealText text={heroMe} startDelay={DESCRIPTION_DELAY} />
        </p>
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
