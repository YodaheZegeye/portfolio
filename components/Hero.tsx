import { profile as ProfileType } from "@/lib/data";
import styles from "./Hero.module.css";

type Props = { profile: typeof ProfileType };

export default function Hero({ profile }: Props) {
  return (
    <section id="hero" className={styles.hero}>
      <p className={styles.label}>{profile.location}</p>
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.subtitle}>{profile.title}</p>
      <div className={styles.links}>
        <a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a>
        <a href={profile.github} target="_blank" rel="noopener">GitHub</a>
      </div>
    </section>
  );
}
