import styles from "./LeftPanel.module.css";
import { profile, education, experience } from "@/lib/data";

export default function LeftPanel() {
  const currentJob = experience[0];
  const uni = education[0];

  return (
    <aside className={styles.panel}>
      <div className={styles.levelRow}>
        <div className={styles.levelBox}>
          <span className={styles.levelLabel}>LVL</span>
          <span className={styles.levelNum}>24</span>
        </div>
        <div className={styles.xpBlock}>
          <span className={styles.xpLabel}>EXP</span>
          <div className={styles.xpBar}>
            <div className={styles.xpFill} style={{ width: "72%" }} />
          </div>
          <span className={styles.xpVal}>7 200 / 10 000</span>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.idBlock}>
        <span className={styles.nameLabel}>OPERATOR</span>
        <span className={styles.nameVal}>{profile.name.toUpperCase()}</span>
        <span className={styles.classLabel}>CLASS</span>
        <span className={styles.classVal}>ERP ENGINEER</span>
        <span className={styles.corpLabel}>CORP</span>
        <span className={styles.corpVal}>{currentJob.company.toUpperCase()}</span>
      </div>

      <div className={styles.badge}>▶ OPEN FOR HIRE</div>

      <div className={styles.divider} />

      <div className={styles.notes}>
        <span className={styles.sectionLabel}>NOTES</span>
        <ul className={styles.noteList}>
          <li>🎓 {uni.degree}</li>
          <li>🏫 {uni.school}</li>
          <li>⭐ GPA {uni.gpa} — Dean&apos;s List</li>
          <li>☁️ Microsoft Azure Certified</li>
          <li>🌐 EN / AM</li>
        </ul>
      </div>

      <div className={styles.divider} />

      <div className={styles.links}>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
          ↗ LINKEDIN
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
          ↗ GITHUB
        </a>
      </div>

      <div className={styles.locRow}>
        <span className={styles.loc}>📍 {profile.location.toUpperCase()}</span>
      </div>
    </aside>
  );
}
