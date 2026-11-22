import { ArrowUpRight, Briefcase, Braces, Layers, RefreshCw, Smartphone, UserSquare } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Button from '../components/Button.jsx';
import './Services.css';

const services = [
  {
    icon: Briefcase,
    title: 'Business Website Development',
    text: 'Clear, credible websites that present your business and turn visitors into enquiries.',
  },
  {
    icon: UserSquare,
    title: 'Portfolio Website Development',
    text: 'Personal sites with a distinct identity that show your work at its best.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Web Design',
    text: 'Layouts that adapt cleanly from large desktops down to the smallest phones.',
  },
  {
    icon: Braces,
    title: 'Frontend Development',
    text: 'Maintainable, accessible interfaces built with modern JavaScript and React.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Web Applications',
    text: 'End-to-end applications — interface, API and database — built to work together.',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign and Maintenance',
    text: 'Refresh an outdated site, then keep it fast, secure and up to date.',
  },
];

function enquire(title) {
  window.dispatchEvent(new CustomEvent('hp:enquiry', { detail: title }));
}

export default function Services() {
  return (
    <section id="services" className="section section--dark services" aria-labelledby="services-title">
      <div className="container">
        <div className="services__head">
          <Reveal as="p" className="eyebrow">
            05 — Services
          </Reveal>
          <Reveal as="h2" id="services-title" className="section-title" delay={0.08}>
            How I can <em>help</em>
          </Reveal>
        </div>

        <ul className="services__grid">
          {services.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 0.08} className="scard">
              <a href="#contact" className="scard__link" onClick={() => enquire(title)}>
                <span className="scard__top">
                  <span className="scard__icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>
                  <span className="scard__arrow" aria-hidden="true">
                    <ArrowUpRight size={20} />
                  </span>
                </span>
                <span className="scard__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="scard__enquire">Enquire about this</span>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal className="services__cta" delay={0.1}>
          <h3>
            Have a project in mind? <em>Let&apos;s make it happen.</em>
          </h3>
          <Button href="#contact" variant="accent">
            Start a conversation
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
