import React from "react";
import styles from "../styles/Hero.module.css";
import github from "../assets/Github.svg";
import linkedin from "../assets/Linkedin.svg";
import gmail from "../assets/Gmail.svg";

function Hero() {
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
            <h2>Full Stack Developer</h2>
          </div>
          <div className={styles.hashtags}>
            <p>#React #Typescript #MUI</p>
            <p>#NodeJS #Firebase</p>
          </div>
          <div className={styles.links}>
            <img src={linkedin} alt="linkedin"  />
            <img src={github} alt="github" />
            <img src={gmail} alt="gmail" />
          </div>
        </div>
      </div>
      <div className={styles.button_wrapper}>
        <button className={styles.button}>View my projects  👇🏻</button>
        <button className={styles.button}>Contact me  📨</button>
      </div>
    </div>
  );
}

export default Hero;
