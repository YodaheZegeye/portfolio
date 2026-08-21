import styles from "./RightPanel.module.css";
import { experience, skills } from "@/lib/data";

const QUEST_MAP: Record<string, string> = {
  BEGINNING: "ORIGIN STORY",
  LOGS: "MISSION LOG",
  ACHIEVEMENTS: "COMPLETED QUESTS",
  CREATIONS: "ABILITY TREE",
  CONNECTION: "COMMS LINK",
};

const ABILITY_WIDTHS = ["88%", "76%", "92%"];

export default function RightPanel({ activeTab }: { activeTab: string }) {
  const currentJob = experience[0];
  const questTags = currentJob.tags;

  return (
    <aside className={styles.panel}>
      <div className={styles.section}>
        <span className={styles.label}>CURRENT VIEW</span>
        <span className={styles.questTitle}>{QUEST_MAP[activeTab] ?? activeTab}</span>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <span className={styles.label}>ACTIVE QUEST</span>
        <span className={styles.activeTitle}>{currentJob.title.toUpperCase()}</span>
        <span className={styles.activeSub}>{currentJob.company}</span>
        <span className={styles.activeDates}>
          {currentJob.start} — {currentJob.end}
        </span>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <span className={styles.label}>QUEST SKILLS</span>
        <div className={styles.tagList}>
          {questTags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <span className={styles.label}>TOP ABILITIES</span>
        <div className={styles.abilityList}>
          {skills.slice(0, 3).map((g, i) => (
            <div key={g.category} className={styles.ability}>
              <span className={styles.abilityName}>{g.category}</span>
              <div className={styles.abilityBar}>
                <div
                  className={styles.abilityFill}
                  style={{ width: ABILITY_WIDTHS[i] }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <span className={styles.label}>STATUS</span>
        <div className={styles.statusList}>
          <div className={styles.statusRow}>
            <span className={styles.statusKey}>AVAILABILITY</span>
            <span className={styles.statusVal + " " + styles.accentVal}>OPEN</span>
          </div>
          <div className={styles.statusRow}>
            <span className={styles.statusKey}>MODE</span>
            <span className={styles.statusVal}>REMOTE</span>
          </div>
          <div className={styles.statusRow}>
            <span className={styles.statusKey}>LOCATION</span>
            <span className={styles.statusVal}>NEW YORK</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
