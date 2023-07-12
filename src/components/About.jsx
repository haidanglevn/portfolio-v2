import React from "react";
import styles from "../styles/About.module.css";
import typescript from "../assets/skills/typescript.svg";
import react from "../assets/skills/react.svg";
import mui from "../assets/skills/mui.svg";
import nodejs from "../assets/skills/nodejs.svg";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import firebase from "../assets/skills/firebase.svg";
import mongodb from "../assets/skills/mongodb.svg";
import figma from "../assets/skills/figma.svg";
import git from "../assets/skills/git.svg";
import postman from "../assets/skills/postman.svg";
import docker from "../assets/skills/docker.svg";

function About() {
  return (
    <div className={styles.aboutSection} id="about">
      <h1>About me</h1>
      <div className={styles.aboutContent}>
        <div className={styles.introduction}>
          <p>
            I am a Vietnamese student who has been living in Helsinki, Finland
            since 2015. I can work in <span>English</span> professionally and
            communicate casually in <span>Finnish</span>.
          </p>
          <br />
          <p>
            In 2020 I graduated as a <span>Material Engineer</span> in Arcada
            UAS in Helsinki. My core skills are product design and material
            manufacturing, with the help of software like SolidWorks, AutoCAD.
          </p>
          <br />
          <p>
            I joined the <span>Fullstack Developer Program</span> in Business
            College Helsinki in August 10th 2022 and expected to graduate in
            August 2023. My coding language is{" "}
            <span>Typescript/Javascript</span>, with <span>React</span> for
            frontend and <span>NodeJS</span> for backend.
          </p>
        </div>
        <div className={styles.skills}>
          <h2>FrontEnd & BackEnd</h2>
          <div className={styles.skillCardWrapper}>
            <div className={styles.skillCard}>
              <img src={typescript} alt="typescript-logo" />
              <p>typescript</p>
            </div>
            <div className={styles.skillCard}>
              <img src={react} alt="react-logo" />
              <p>react</p>
            </div>
            <div className={styles.skillCard}>
              <img src={mui} alt="mui-logo" />
              <p>MUI</p>
            </div>
            <div className={styles.skillCard}>
              <img src={nodejs} alt="nodejs-logo" />
              <p>nodeJS</p>
            </div>
            <div className={styles.skillCard}>
              <img src={html} alt="html-logo" />
              <p>HTML</p>
            </div>
            <div className={styles.skillCard}>
              <img src={css} alt="css-logo" />
              <p>CSS</p>
            </div>
            <div className={styles.skillCard}>
              <img src={firebase} alt="firebase-logo" />
              <p>firebase</p>
            </div>
            <div className={styles.skillCard}>
              <img src={mongodb} alt="mongodb-logo" />
              <p>mongoDB</p>
            </div>
          </div>
          <h2>Other tools</h2>
          <div className={styles.skillCardWrapper}>
            <div className={styles.skillCard}>
              <img src={figma} alt="figma-logo" />
              <p>figma</p>
            </div>
            <div className={styles.skillCard}>
              <img src={git} alt="git-logo" />
              <p>GIT</p>
            </div>
            <div className={styles.skillCard}>
              <img src={postman} alt="postman-logo" />
              <p>postman</p>
            </div>
            <div className={styles.skillCard}>
              <img src={docker} alt="docker-logo" />
              <p>docker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
