import React from "react";
import styles from "../styles/NavBar.module.css";

function NavBar() {
  return (
    <nav>
      <div className={styles.navWrapper}>
        <div>
          <h1 className={styles.logo}>DangLe</h1>
        </div>
        <div className={styles.navItemWrapper}>
          <div>
            <p>About Me</p>
          </div>
          <div>
            <p>Skills</p>
          </div>
          <div>
            <p>Projects</p>
          </div>
          <div>
            <button className={styles.resumeButton}>Resume</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
