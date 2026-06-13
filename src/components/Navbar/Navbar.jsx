import React, { useEffect, useRef, useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "@/utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    // Lock background scroll while the fullscreen menu is open
    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (!target || !navRef.current) return;
    const top = target.offsetTop - navRef.current.offsetHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.navContent}>
	<a className={styles.title} href="#hero" onClick={(e) => scrollTo(e, "hero")}>
	  Jcmunozo
	</a>
	<div className={styles.menu} ref={menuRef}>
	  <img
	    className={styles.menuBtn}
	    src={
	      menuOpen
		? getImageUrl("nav/closeIcon.png")
		: getImageUrl("nav/menuIcon.png")
	    }
	    alt={menuOpen ? "close menu" : "open menu"}
	    onClick={() => setMenuOpen(!menuOpen)}
	  />
	  <div
	    className={`${styles.navGroup} ${menuOpen ? styles.navGroupOpen : ""}`}
	    onClick={(e) => {
	      if (e.target === e.currentTarget) setMenuOpen(false);
	    }}
	  >
	    <ul className={styles.menuItems}>
	      <li><a href="#hero"       onClick={(e) => scrollTo(e, "hero")}>Home</a></li>
	      <li><a href="#about"      onClick={(e) => scrollTo(e, "about")}>About</a></li>
	      <li><a href="#skills"     onClick={(e) => scrollTo(e, "skills")}>Skills</a></li>
	      <li><a href="#experience" onClick={(e) => scrollTo(e, "experience")}>Experience</a></li>
	      <li><a href="#projects"   onClick={(e) => scrollTo(e, "projects")}>Projects</a></li>
	      <li><a href="#contact"    onClick={(e) => scrollTo(e, "contact")}>Contact</a></li>
	    </ul>
	    <a
	      className={styles.cvBtn}
	      href="/cv_Jordan_Munoz.pdf"
	      download
	      aria-label="Download CV"
	      title="Download CV"
	      onClick={() => setMenuOpen(false)}
	    >
	      <svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	      >
		<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
		<polyline points="7 10 12 15 17 10" />
		<line x1="12" y1="15" x2="12" y2="3" />
	      </svg>
	      <span>CV</span>
	    </a>
	  </div>
	</div>
      </div>
    </nav>
  );
};
