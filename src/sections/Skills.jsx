import { motion, useReducedMotion } from 'framer-motion';
import { Layout, Server, Database, Wrench } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import './Skills.css';

const groups = [
  {
    title: 'Frontend',
    icon: Layout,
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap'],
  },
  { title: 'Backend', icon: Server, items: ['Node.js', 'Python'] },
  { title: 'Database', icon: Database, items: ['MySQL','MongoDB'] },
  { title: 'Tools', icon: Wrench, items: ['Git', 'GitHub', 'VS Code', 'ChatGPT','Claude'] },
];

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="section section--dark skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="skills__head">
          <Reveal as="p" className="eyebrow">
            03 — Skills &amp; Technologies
          </Reveal>
          <Reveal as="h2" id="skills-title" className="section-title" delay={0.08}>
            The <em>toolkit</em> behind the work
          </Reveal>
        </div>

        <div className="skills__grid">
          {groups.map(({ title, icon: Icon, items }, gi) => (
            <Reveal
              as="article"
              key={title}
              className={`skills__group skills__group--${title.toLowerCase()}`}
              delay={gi * 0.08}
            >
              <header className="skills__group-head">
                <span className="skills__group-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <h3>{title}</h3>
                <span className="skills__count">{String(items.length).padStart(2, '0')}</span>
              </header>

              <ul className="skills__cards">
                {items.map((item) => (
                  <motion.li
                    key={item}
                    className="skills__card"
                    whileHover={reduce ? undefined : { y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <span className="skills__tick" aria-hidden="true" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
