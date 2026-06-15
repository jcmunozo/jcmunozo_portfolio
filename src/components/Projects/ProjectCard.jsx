import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "@/utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source },
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.imageButton}
        onClick={() => setIsOpen(true)}
        aria-label={`View image of ${title} full screen`}
      >
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          title={title}
          className={styles.image}
        />
      </button>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              <img
                src={getImageUrl(skill.url)}
                alt={`Image of ${skill.name}`}
                title={skill.name}
                className={styles.imageSkill}
              />
            </li>
          );
        })}
      </ul>
      <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
        Source
      </a>

      {isOpen &&
        createPortal(
          <div
            className={styles.lightbox}
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} preview`}
          >
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={() => setIsOpen(false)}
              aria-label="Close preview"
            >
              &times;
            </button>
            <img
              src={getImageUrl(imageSrc)}
              alt={`Image of ${title}`}
              className={styles.lightboxImage}
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </div>
  );
};
