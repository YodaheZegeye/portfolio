"use client";

import styles from "./IntroScreen.module.css";

export default function IntroScreen({ onEnter }: { onEnter: () => void }) {
  return (
    <div className={styles.root}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.hi}>HI!</span>
        </div>
        <div className={styles.right}>
          <p className={styles.greeting}>WELCOME TO MY PORTFOLIO</p>
          <h1 className={styles.name}>YODAHE ZEGEYE</h1>
          <p className={styles.role}>ERP ENGINEER &amp; FULL-STACK DEVELOPER</p>
          <p className={styles.bio}>
            Systems builder. Problem solver. Bridging enterprise technology and
            human experience — one deployment at a time.
          </p>
          <button className={styles.enter} onClick={onEnter}>
            ▶ ENTER THE SYSTEM
          </button>
        </div>
      </div>
      <div className={styles.scanline} />
    </div>
  );
}
