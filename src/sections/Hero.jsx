import { motion, useReducedMotion } from 'framer-motion';
import Button from '../components/Button.jsx';
import HeroArt from '../components/HeroArt.jsx';
import './Hero.css';

const lines = ['Building', 'Digital', 'Experiences'];

export default function Hero() {
  const reduce = useReducedMotion();

  const lineAnim = (i) =>
    reduce
      ? {}
      : {
          initial: { y: '110%' },
          animate: { y: '0%' },
          transition: { duration: 1, delay: 0.25 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
        };

  const fade = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section id="home" className="section section--light hero" aria-labelledby="hero-title">
      <div className="hero__grid-bg" aria-hidden="true" />

      <div className="container hero__container">
        <motion.p className="eyebrow hero__eyebrow" {...fade(0.1)}>
          Hello, I&apos;m Hari Prakash C
        </motion.p>

        <div className="hero__main">
          <h1 id="hero-title" className="hero__title">
            {lines.map((line, i) => (
              <span className="hero__line" key={line}>
                <motion.span className="hero__line-inner" {...lineAnim(i)}>
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div className="hero__art" {...fade(0.6)}>
            <HeroArt />
          </motion.div>
        </div>

        <div className="hero__bottom">
          <motion.div className="hero__copy" {...fade(0.9)}>
            <p className="hero__lead">
              I turn ideas into meaningful digital products through thoughtful design, modern
              development and creative problem-solving.
            </p>
            <div className="hero__actions">
              <Button href="#work" variant="solid">
                Explore My Work
              </Button>
              <Button href="#contact" variant="ghost">
                Let&apos;s Collaborate
              </Button>
            </div>
          </motion.div>

          <motion.ul className="hero__meta" {...fade(1.05)}>
            <li>
              <span className="hero__meta-label">Role</span>
              Full-Stack Developer
            </li>
            <li>
              <span className="hero__meta-label">Location</span>
              Coimbatore, India
            </li>
            <li>
              <span className="hero__meta-label">Status</span>
              <span className="hero__status">
                <span className="hero__pulse" aria-hidden="true" />
                Available for Freelance & Hire
              </span>
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
