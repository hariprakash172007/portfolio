import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { navLinks, siteConfig, whatsappUrl } from '../data/siteConfig.js';
import './Footer.css';

function SocialLink({ href, label, children }) {
  if (!href) {
    return (
      <span className="footer__social is-unset" title={`${label} not set yet`} aria-label={`${label} not set yet`}>
        {children}
      </span>
    );
  }
  const external = !href.startsWith('mailto:');
  return (
    <a
      className="footer__social"
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const { contact } = siteConfig;

  return (
    <footer className="footer section--dark">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              HP<span>.</span>
            </a>
            <p>
              Full-Stack Developer and Freelance Web Developer from India, crafting modern
              websites and practical software with design and engineering in equal measure.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="footer__heading">Navigate</h2>
            <ul>
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`}>{l.label}</a>
                </li>
              ))}
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="footer__heading">Elsewhere</h2>
            <div className="footer__socials">
              <SocialLink href={contact.github} label="GitHub">
                <Github size={18} />
              </SocialLink>
              <SocialLink href={contact.linkedin} label="LinkedIn">
                <Linkedin size={18} />
              </SocialLink>
              <SocialLink href={whatsappUrl(contact.whatsapp)} label="WhatsApp">
                <MessageCircle size={18} />
              </SocialLink>
              <SocialLink href={contact.email ? `mailto:${contact.email}` : ''} label="Email">
                <Mail size={18} />
              </SocialLink>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {siteConfig.year} Hari Prakash C. Designed &amp; built in {siteConfig.location}.
          </p>
          <a href="#home" className="footer__top-btn" aria-label="Back to top">
            Back to top <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
