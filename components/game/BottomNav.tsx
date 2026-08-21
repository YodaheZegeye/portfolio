import styles from "./BottomNav.module.css";

const ICONS: Record<string, string> = {
  BEGINNING: "◈",
  LOGS: "◉",
  ACHIEVEMENTS: "◆",
  CREATIONS: "◇",
  CONNECTION: "◎",
};

export default function BottomNav({
  active,
  onSelect,
  tabs,
}: {
  active: string;
  onSelect: (tab: string) => void;
  tabs: readonly string[];
}) {
  return (
    <nav className={styles.nav}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${styles.btn} ${active === tab ? styles.active : ""}`}
          onClick={() => onSelect(tab)}
        >
          <span className={styles.icon}>{ICONS[tab]}</span>
          <span className={styles.label}>{tab}</span>
        </button>
      ))}
    </nav>
  );
}
