import { profile as ProfileType } from "@/lib/data";
import styles from "./Footer.module.css";

type Props = { profile: typeof ProfileType };

export default function Footer({ profile }: Props) {
  return (
    <footer className={styles.footer}>
      <p>
        {profile.name} · {profile.location} ·{" "}
        <a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a> ·{" "}
        <a href={profile.github} target="_blank" rel="noopener">GitHub</a>
      </p>
    </footer>
  );
}
