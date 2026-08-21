import { experience } from "@/lib/data";

type Props = { items: typeof experience };

export default function Experience({ items }: Props) {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="timeline">
        {items.map((job) => (
          <div key={job.id} className="entry">
            <div className="entry-meta">
              <span className="entry-date">{job.start} — {job.end}</span>
              <span className="entry-type">{job.type}</span>
            </div>
            <div>
              <h3>{job.title}</h3>
              <p className="entry-company">{job.company} · {job.location}</p>
              <ul>
                {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="tags">
                {job.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              {job.link && (
                <a href={job.link} target="_blank" rel="noopener" style={{ fontSize: "12px", display: "block", marginTop: "0.6rem" }}>
                  View on GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
