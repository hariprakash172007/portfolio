import Reveal from '../components/Reveal.jsx';
import { experience, strengths } from '../data/experience.js';
import './Experience.css';

export default function Experience() {
  return (
    <section
      id="experience"
      className="section section--light experience"
      aria-labelledby="experience-title"
    >
      <div className="container experience__grid">
        <div className="experience__head">
          <Reveal as="p" className="eyebrow">
            04 — Experience &amp; Achievements
          </Reveal>
          <Reveal as="h2" id="experience-title" className="section-title" delay={0.08}>
            Where I&apos;ve <em>learned</em> &amp; led
          </Reveal>

          <Reveal as="ul" className="experience__strengths" delay={0.16} aria-label="Core strengths">
            {strengths.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </Reveal>
        </div>

        <ol className="experience__list">
          {experience.map((item, i) => (
            <Reveal as="li" key={item.id} className="xrow" delay={0.05}>
              <span className="xrow__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="xrow__main">
                <div className="xrow__top">
                  <span className={`xrow__type xrow__type--${item.type.toLowerCase()}`}>
                    {item.type}
                  </span>
                  {item.period && <span className="xrow__period">{item.period}</span>}
                </div>
                <h3>{item.role}</h3>
                <p className="xrow__org">{item.org}</p>
                <p className="xrow__desc">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
