import React, { forwardRef } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import AboutImage from "../../../public/images/felix1.png";

type AboutProps = Record<string, never>;

const About = forwardRef<HTMLElement, AboutProps>((_props, ref) => {
  return (
    <>
      <h3 className={styles.sectionTitle}>About</h3>
      <section ref={ref} className={styles.aboutContainer}>
        <div className={styles.sectionPart}>
          <div className={styles.imageSize}>
            <Image
              src={AboutImage}
              alt="Self portrait"
              className={styles.aboutImage}
            />
          </div>
        </div>
        <div className={styles.sectionPart}>
          <p>Hello my name is Felix and I&apos;m a fullstack developer.</p>
          <br />
          <p>
            I come from a game development education, but felt that web
            development was more for me.
          </p>
          <br />
          <p>
            I&apos;m someone that strives to learn new things and stay up to
            date with the latest tech.
          </p>
        </div>
      </section>
    </>
  );
});

About.displayName = "About";

export default About;
