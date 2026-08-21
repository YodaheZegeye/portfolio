import styles from "./Tab.module.css";
import { projects } from "@/lib/data";

export default function Achievements() {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>// COMPLETED QUESTS</span>
        <h2 className={styles.title}>PROJECTS</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.id} className={styles.card}>
            <span className={styles.cardEyebrow}>// QUEST #{String(p.id).padStart(2, "0")}</span>
            <h3 className={styles.cardTitle}>{p.title.toUpperCase()}</h3>
            <p className={styles.cardDesc}>{p.description}</p>
            <div className={styles.tags}>
              {p.tags.map((t) => (
                <span key={t} className={styles.tag}>
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                ↗ VIEW PROJECT
              </a>
            )}
            {p.date && (
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)" }}>
                {p.date}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
