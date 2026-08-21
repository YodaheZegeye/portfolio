import styles from "./Tab.module.css";
import { experience } from "@/lib/data";

export default function Logs() {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>// MISSION LOG</span>
        <h2 className={styles.title}>EXPERIENCE</h2>
      </div>

      <div className={styles.timeline}>
        {experience.map((job) => (
          <div key={job.id} className={styles.entry}>
            <div className={styles.entryDot} />
            <div className={styles.entryContent}>
              <div className={styles.entryHeader}>
                <span className={styles.entryTitle}>{job.title}</span>
                <span className={styles.entryMeta}>
                  {job.company} · {job.location}
                </span>
                <span className={styles.entryDates}>
                  {job.start} — {job.end} · {job.type}
                </span>
              </div>
              <ul className={styles.bullets}>
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className={styles.tags} style={{ marginTop: 10 }}>
                {job.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
