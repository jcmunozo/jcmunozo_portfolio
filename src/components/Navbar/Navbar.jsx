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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
	    alt="menu-button"
	    onClick={() => setMenuOpen(!menuOpen)}
	  />
	  <ul
	    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
	  >
	    <li><a href="#hero"       onClick={(e) => scrollTo(e, "hero")}>Home</a></li>
	    <li><a href="#about"      onClick={(e) => scrollTo(e, "about")}>About</a></li>
	    <li><a href="#skills"     onClick={(e) => scrollTo(e, "skills")}>Skills</a></li>
	    <li><a href="#experience" onClick={(e) => scrollTo(e, "experience")}>Experience</a></li>
	    <li><a href="#projects"   onClick={(e) => scrollTo(e, "projects")}>Projects</a></li>
	    <li><a href="#contact"    onClick={(e) => scrollTo(e, "contact")}>Contact</a></li>
	  </ul>
	</div>
      </div>
    </nav>
  );
};
