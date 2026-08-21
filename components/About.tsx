import { profile as ProfileType } from "@/lib/data";

type Props = { profile: typeof ProfileType };

export default function About({ profile }: Props) {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <p>{profile.bio}</p>
      <div className="tags">
        {profile.badges.map((b) => <span key={b}>{b}</span>)}
      </div>
    </section>
  );
}
