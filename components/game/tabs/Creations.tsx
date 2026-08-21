import styles from "./Tab.module.css";
import { skills } from "@/lib/data";

export default function Creations() {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>// ABILITY TREE</span>
        <h2 className={styles.title}>SKILLS</h2>
      </div>

      <div className={styles.skillsGrid}>
        {skills.map((group) => (
          <div key={group.category} className={styles.skillGroup}>
            <span className={styles.skillGroupName}>{group.category.toUpperCase()}</span>
            <div className={styles.skillItems}>
              {group.items.map((item) => (
                <span key={item} className={styles.skillItem}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
