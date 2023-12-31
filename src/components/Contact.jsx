import React from "react";
import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.guideline}>
        <h1>Let's get in touch !</h1>
        <div className={styles.contactWrapper}>
          <div className={styles.contactDivLeft}>
            <p>
              Did I pique your interest? Please feel free to reach out using any
              of the following methods:
            </p>
            <p className={styles.contactDetails}>
              Email: <span>haidang.levn@gmail.com</span>
              <br />
              Phone: <span>+358 46 953 2490</span>
            </p>
          </div>
          <div className={styles.contactDivRight}>
            <p>
              Additionally, you can connect with me on LinkedIn & GitHub to see
              my latest projects:
            </p>
            <p className={styles.contactDetails}>
              GitHub:{" "}
              <a
                href="https://github.com/haidanglevn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>https://github.com/haidanglevn</span>
              </a>{" "}
              <br />
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/dang-le-hai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>https://www.linkedin.com/in/dang-le-hai/</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
