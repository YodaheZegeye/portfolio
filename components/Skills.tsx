import { skills } from "@/lib/data";
import styles from "./Skills.module.css";

type Props = { groups: typeof skills };

export default function Skills({ groups }: Props) {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className={styles.grid}>
        {groups.map((g) => (
          <div key={g.category} className={styles.group}>
            <h4>{g.category}</h4>
            <div className="tags">
              {g.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
