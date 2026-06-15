import React from "react";
import styles from "./Hero.module.css";

const STAGGER = 0.07; // seconds between each word

export const RevealText = ({
  text,
  className,
  startDelay = 0,
  accent = true,
}) => {
  const words = text.split(" ");

  return (
    <span className={`${styles.reveal} ${className ?? ""}`} aria-label={text}>
      {words.map((word, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={styles.revealWord}
          style={{ animationDelay: `${startDelay + index * STAGGER}s` }}
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
      {accent && (
        <span
          className={styles.revealAccent}
          style={{
            animationDelay: `${startDelay + words.length * STAGGER + 0.15}s`,
          }}
          aria-hidden="true"
        />
      )}
    </span>
  );
};
