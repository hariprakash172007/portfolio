import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Github, X } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Button from '../components/Button.jsx';
import ProjectVisual from '../components/ProjectVisual.jsx';
import { projects } from '../data/projects.js';
import './Projects.css';

function Tags({ project }) {
  const tags = project.tech.length ? project.tech : project.focus;
  if (!tags.length) return null;
  return (
    <ul className="projects__tags" aria-label={project.tech.length ? 'Technologies used' : 'Focus areas'}>
      {tags.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function ProjectModal({ project, onClose }) {
  const reduce = useReducedMotion();
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className="pmodal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="pmodal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pmodal-title"
        initial={reduce ? false : { y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={reduce ? { opacity: 0 } : { y: 30, opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="pmodal__close" onClick={onClose} aria-label="Close project details">
          <X size={20} />
        </button>

        <div className="pmodal__visual">
          <ProjectVisual type={project.visual} image={project.image} alt={`${project.title} preview artwork`} />
        </div>

        <div className="pmodal__body">
          <p className="eyebrow">{project.kind}</p>
          <h3 id="pmodal-title">{project.title}</h3>
          {project.tagline && <p className="pmodal__tagline">{project.tagline}</p>}
          <p className="pmodal__desc">{project.description}</p>

          <ul className="pmodal__list">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <Tags project={project} />

          <p className="pmodal__note">
            A public live link for this project hasn&apos;t been published yet. Get in touch for a
            walkthrough.
          </p>
          <div className="pmodal__actions">
            <Button href="#contact" variant="accent" onClick={onClose}>
              Ask about this project
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const reduce = useReducedMotion();

  return (
    <section id="work" className="section section--light projects" aria-labelledby="work-title">
      <div className="container">
        <div className="projects__head">
          <div>
            <Reveal as="p" className="eyebrow">
              02 — Featured Work
            </Reveal>
            <Reveal as="h2" id="work-title" className="section-title" delay={0.08}>
              Selected <em>projects.</em>
            </Reveal>
          </div>
          <Reveal as="p" className="projects__intro" delay={0.14}>
            Real builds across websites, dashboards and guidance tools — from responsive business
            sites to safety and admissions platforms.
          </Reveal>
        </div>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <Reveal
              as="article"
              key={p.id}
              className={`pcard pcard--${i + 1}`}
              delay={(i % 2) * 0.1}
            >
              <motion.div
                className="pcard__visual"
                whileHover={reduce ? undefined : { scale: 0.985 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="pcard__art">
                  <ProjectVisual
                    type={p.visual}
                    image={p.image}
                    alt={`${p.title} preview artwork`}
                  />
                </div>
                <span className="pcard__num">{p.index}</span>
              </motion.div>

              <div className="pcard__info">
                <p className="pcard__kind">{p.kind}</p>
                <h3>{p.title}</h3>
                {p.tagline && <p className="pcard__tagline">{p.tagline}</p>}
                <p className="pcard__desc">{p.description}</p>
                <Tags project={p} />

                <div className="pcard__actions">
                  {p.url ? (
                    <Button href={p.url} external variant="solid">
                      View Project
                    </Button>
                  ) : (
                    <Button variant="solid" onClick={() => setSelected(p)}>
                      View Project
                    </Button>
                  )}
                  {p.source && (
                    <Button href={p.source} external variant="ghost" icon={false}>
                      <Github size={16} aria-hidden="true" /> View Source
                    </Button>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
