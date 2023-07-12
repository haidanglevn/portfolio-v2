import React from "react";
import styles from "../styles/Hero.module.css";
import github from "../assets/Github.svg";
import linkedin from "../assets/Linkedin.svg";
import gmail from "../assets/Gmail.svg";

function Hero() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={styles.hero_section}>
      <div className={styles.hero_wrapper}>
        <div className={styles.avatar_section}>
          <div className={styles.avatar} />
          <div className={styles.icon} />
        </div>
        <div className={styles.introduction}>
          <div>
            <h1>
              Hello, I'm <span>Dang Le</span>
            </h1>
            <h2>Frontend Developer</h2>
          </div>
          <div className={styles.hashtags}>
            <p>#React #Typescript #MUI</p>
            <p>#NodeJS #Firebase</p>
          </div>
          <div className={styles.links}>
            <a
              href="https://www.linkedin.com/in/dang-le-hai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>

            <a
              href="https://github.com/haidanglevn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
            <a href="mailto:haidang.levn@gmail.com">
            <img src={gmail} alt="gmail" /></a>
          </div>
        </div>
      </div>
      <div className={styles.button_wrapper}>
        <button
          className={styles.button}
          onClick={() => scrollToSection("project")}
        >
          View my projects 👇🏻
        </button>
        <button
          className={styles.button}
          onClick={() => scrollToSection("contact")}
        >
          Contact me 📨
        </button>
      </div>
    </div>
  );
}

export default Hero;
