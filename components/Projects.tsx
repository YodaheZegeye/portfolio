import { projects } from "@/lib/data";
import styles from "./Projects.module.css";

type Props = { items: typeof projects };

export default function Projects({ items }: Props) {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className={styles.grid}>
        {items.map((p) => (
          <div key={p.id} className={styles.card}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags">
              {p.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
            <div className={styles.cardFooter}>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener" className={styles.cardLink}>
                  View on GitHub →
                </a>
              )}
              {p.date && <span className={styles.dateLabel}>{p.date}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
