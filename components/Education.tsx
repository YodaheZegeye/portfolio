import { education } from "@/lib/data";

type Props = { items: typeof education };

export default function Education({ items }: Props) {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <div className="timeline">
        {items.map((edu) => (
          <div key={edu.id} className="entry">
            <div className="entry-meta">
              <span className="entry-date">{edu.start} — {edu.end}</span>
            </div>
            <div>
              <h3>{edu.degree}</h3>
              <p className="entry-company">{edu.school} · GPA: {edu.gpa}</p>
              {edu.note && <p style={{ fontSize: "13px", marginBottom: "0.4rem" }}>{edu.note}</p>}
              <div className="tags">
                {edu.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
