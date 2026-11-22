import { Code2, Briefcase, Puzzle, Users, GraduationCap } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import './About.css';

const highlights = [
  { icon: Code2, label: 'Full-Stack Development' },
  { icon: Briefcase, label: 'Freelance Web Development' },
  { icon: Puzzle, label: 'Problem Solving' },
  { icon: Users, label: 'Team Leadership' },
];

export default function About() {
  return (
    <section id="about" className="section section--dark about" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__head">
          <Reveal as="p" className="eyebrow">
            01 — About
          </Reveal>
          <Reveal as="h2" id="about-title" className="section-title" delay={0.08}>
            Curious Mind. <em>Creative Builder.</em>
          </Reveal>
        </div>

        <div className="about__body">
          <Reveal as="div" delay={0.12}>
            <p className="about__lead">
              I&apos;m Hari Prakash C, a Computer Technology student and aspiring Full-Stack
              Developer passionate about building modern websites and practical software
              solutions.
            </p>
            <p className="about__text">
              I enjoy transforming ideas into functional digital products, exploring emerging
              technologies and solving real-world problems through development.
            </p>
          </Reveal>

          <ul className="about__highlights">
            {highlights.map(({ icon: Icon, label }, i) => (
              <Reveal as="li" key={label} delay={0.1 + i * 0.07} className="about__chip">
                <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                <span>{label}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal as="div" className="about__edu" delay={0.2}>
            <span className="about__edu-icon" aria-hidden="true">
              <GraduationCap size={22} strokeWidth={1.8} />
            </span>
            <div>
              <p className="about__edu-label">Education</p>
              <h3>B.Sc. Computer Technology</h3>
              <p className="about__edu-school">Dr. N.G.P. Arts and Science College</p>
              <p className="about__edu-score">Academic score: 82%</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
