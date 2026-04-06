import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./ScrollHint.module.css";

const SECTIONS = ["hero", "about", "skills", "experience", "projects", "contact"];

const scrollToSection = (id) => {
  const target = document.getElementById(id);
  const nav = document.querySelector("nav");
  if (target && nav) {
    window.scrollTo({ top: target.offsetTop - nav.offsetHeight, behavior: "smooth" });
  }
};

export const ScrollHint = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const lastSection = document.getElementById(SECTIONS[SECTIONS.length - 1]);
      const nav = document.querySelector("nav");
      const navHeight = nav ? nav.offsetHeight : 0;

      // At the very top: hero
      if (scrollY <= 60) {
        setCurrentIndex(0);
        return;
      }

      // At the very bottom: contact
      const atBottom =
        lastSection &&
        scrollY + window.innerHeight >= document.documentElement.scrollHeight - 60;
      if (atBottom) {
        setCurrentIndex(SECTIONS.length - 1);
        return;
      }

      // In between: find active section by top-edge proximity to viewport top
      const activeLine = scrollY + navHeight + 10;
      let idx = 1; // at least 1 since we passed the scrollY > 60 check
      SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= activeLine) idx = i;
      });
      // Clamp so we never return to 0 or jump to last while mid-scroll
      idx = Math.max(1, Math.min(idx, SECTIONS.length - 2));
      setCurrentIndex(idx);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showUp   = currentIndex > 0;
  const showDown = currentIndex < SECTIONS.length - 1;
  const single   = showUp !== showDown;

  return (
    <div className={`${styles.container} ${!single ? styles.bothVisible : ""} ${showUp && !showDown ? styles.upOnly : ""}`}>
      {showUp && (
        <button
          className={`${styles.btn} ${single ? styles.bounceUp : ""}`}
          onClick={() => scrollToSection(SECTIONS[currentIndex - 1])}
          aria-label="Scroll to previous section"
        >
          <FaChevronUp />
        </button>
      )}
      {showDown && (
        <button
          className={`${styles.btn} ${single ? styles.bounceDown : ""}`}
          onClick={() => scrollToSection(SECTIONS[currentIndex + 1])}
          aria-label="Scroll to next section"
        >
          <FaChevronDown />
        </button>
      )}
    </div>
  );
};
