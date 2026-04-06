import React, { useRef, useEffect } from "react";
import styles from "./Hero.module.css";

const RADIUS = 80;
const MAX_PUSH = 25;

export const RepelTitle = ({ text, className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      if (window.innerWidth <= 830) return;

      // Scale push down on smaller desktop screens
      const scale = Math.min(1, window.innerWidth / 1200);
      const push = MAX_PUSH * scale;

      const spans = container.querySelectorAll("[data-letter]");
      spans.forEach((span) => {
        const rect = span.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < RADIUS) {
          const force = (RADIUS - dist) / RADIUS;
          const angle = Math.atan2(dy, dx);
          const pushX = -Math.cos(angle) * force * push;
          const pushY = -Math.sin(angle) * force * push;
          span.classList.add(styles.letterPushing);
          span.classList.remove(styles.letter);
          span.style.transform = `translate(${pushX}px, ${pushY}px)`;
        } else {
          span.classList.add(styles.letter);
          span.classList.remove(styles.letterPushing);
          span.style.transform = "";
        }
      });
    };

    const handleMouseLeave = () => {
      const spans = container.querySelectorAll("[data-letter]");
      spans.forEach((span) => {
        span.classList.add(styles.letter);
        span.classList.remove(styles.letterPushing);
        span.style.transform = "";
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const words = text.split(" ");

  return (
    <span ref={containerRef} className={className}>
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {word.split("").map((char, charIndex) => (
              <span key={charIndex} data-letter className={styles.letter}>
                {char}
              </span>
            ))}
          </span>
          {wordIndex < words.length - 1 ? " " : ""}
        </React.Fragment>
      ))}
    </span>
  );
};
