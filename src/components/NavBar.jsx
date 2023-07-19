import React from "react";
import styles from "../styles/NavBar.module.css";

function NavBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className={styles.navWrapper}>
        <div>
          <h1 className={styles.logo}>DangLe</h1>
        </div>
        <div className={styles.navItemWrapper}>
          <div className={styles.navItem}>
            <p onClick={() => scrollToSection("project")}>Projects</p>
          </div>
          <div className={styles.navItem}>
            <p onClick={() => scrollToSection("about")}>About Me</p>
          </div>
          <div className={styles.navItem}>
            <p onClick={() => scrollToSection("contact")}>Contact</p>
          </div>
          <div className={styles.resumeButton}>
          <a href="https://drive.google.com/file/d/19oySCJ8OFy-feXVkaUOuXhR7NwCOM5EZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.resumeButton}>
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
