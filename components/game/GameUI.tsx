"use client";

import { useState } from "react";
import styles from "./GameUI.module.css";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import BottomNav from "./BottomNav";
import Beginning from "./tabs/Beginning";
import Logs from "./tabs/Logs";
import Achievements from "./tabs/Achievements";
import Creations from "./tabs/Creations";
import Connection from "./tabs/Connection";

const TABS = ["BEGINNING", "LOGS", "ACHIEVEMENTS", "CREATIONS", "CONNECTION"] as const;
type Tab = (typeof TABS)[number];

export default function GameUI() {
  const [tab, setTab] = useState<Tab>("BEGINNING");
  const [drawerOpen, setDrawerOpen] = useState(false);

  function selectTab(t: string) {
    setTab(t as Tab);
    setDrawerOpen(false);
  }

  return (
    <div className={styles.root}>
      <div className={styles.bgGlow} />

      {drawerOpen && (
        <div className={styles.overlay} onClick={() => setDrawerOpen(false)} />
      )}

      <header className={styles.topBar}>
        <button
          className={styles.menuBtn}
          onClick={() => setDrawerOpen((o) => !o)}
          aria-label="Open character panel"
        >
          <span />
          <span />
          <span />
        </button>
        <span className={styles.sysLabel}>SYS://PORTFOLIO.v2.4</span>
        <div className={styles.topRight}>
          <span className={styles.statusDot} />
          <span className={styles.statusText}>ONLINE</span>
        </div>
      </header>

      <div className={styles.body}>
        <LeftPanel isOpen={drawerOpen} />

        <main className={styles.center}>
          <div className={styles.tabContent}>
            {tab === "BEGINNING" && <Beginning />}
            {tab === "LOGS" && <Logs />}
            {tab === "ACHIEVEMENTS" && <Achievements />}
            {tab === "CREATIONS" && <Creations />}
            {tab === "CONNECTION" && <Connection />}
          </div>
        </main>

        <RightPanel activeTab={tab} />
      </div>

      <BottomNav active={tab} onSelect={selectTab} tabs={[...TABS]} />
    </div>
  );
}
