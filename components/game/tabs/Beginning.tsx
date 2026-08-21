import styles from "./Tab.module.css";
import { profile } from "@/lib/data";

export default function Beginning() {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>// ORIGIN STORY</span>
        <h2 className={styles.title}>ABOUT ME</h2>
      </div>
      <p className={styles.body}>{profile.bio}</p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.cardEyebrow}>// EXPERTISE</span>
          <h3 className={styles.cardTitle}>ERP ENGINEER</h3>
          <p className={styles.cardDesc}>
            Specializing in enterprise resource planning, systems analysis, and
            technology consulting. I implement and optimize large-scale enterprise
            systems that power business operations.
          </p>
        </div>
        <div className={styles.card}>
          <span className={styles.cardEyebrow}>// BUILDER</span>
          <h3 className={styles.cardTitle}>FULL-STACK DEV</h3>
          <p className={styles.cardDesc}>
            From decentralized platforms to AI-powered assistants — I build
            end-to-end solutions using React, Node.js, MongoDB, and cloud
            infrastructure.
          </p>
        </div>
        <div className={styles.card}>
          <span className={styles.cardEyebrow}>// BACKGROUND</span>
          <h3 className={styles.cardTitle}>STONY BROOK</h3>
          <p className={styles.cardDesc}>
            B.S. in Information Systems — a hybrid program bridging computer
            science and business. Dean&apos;s List. Member of the AI Community
            and Computing Society.
          </p>
        </div>
      </div>
    </div>
  );
}
