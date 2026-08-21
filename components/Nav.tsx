"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const links = ["about", "experience", "projects", "skills", "education"];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>YZ</span>
      <ul className={styles.links}>
        {links.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? styles.activeLink : styles.link}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
