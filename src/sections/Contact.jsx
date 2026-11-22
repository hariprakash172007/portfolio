import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Button from '../components/Button.jsx';
import { siteConfig, whatsappUrl } from '../data/siteConfig.js';
import './Contact.css';

const empty = { name: '', email: '', subject: '', message: '' };

function ContactLink({ icon: Icon, label, value, href, external = true }) {
  const body = (
    <>
      <span className="clink__icon" aria-hidden="true">
        <Icon size={20} strokeWidth={1.8} />
      </span>
      <span className="clink__text">
        <span className="clink__label">{label}</span>
        <span className="clink__value">{value || 'Not set yet'}</span>
      </span>
    </>
  );

  if (!href) {
    return (
      <li>
        <span className="clink is-unset" title={`${label} is not configured yet`}>
          {body}
        </span>
      </li>
    );
  }

  return (
    <li>
      <a
        className="clink"
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {body}
      </a>
    </li>
  );
}

export default function Contact() {
  const { contact } = siteConfig;
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  // Services cards pre-fill the subject line.
  useEffect(() => {
    const onEnquiry = (e) =>
      setForm((f) => ({ ...f, subject: `Enquiry: ${e.detail}` }));
    window.addEventListener('hp:enquiry', onEnquiry);
    return () => window.removeEventListener('hp:enquiry', onEnquiry);
  }, []);

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (status.type !== 'idle') setStatus({ type: 'idle', text: '' });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!contact.email) {
      setStatus({
        type: 'error',
        text: 'The contact email has not been configured yet, so this enquiry cannot be sent. Please try again soon.',
      });
      return;
    }

    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    const href = `mailto:${contact.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setStatus({
      type: 'success',
      text: 'Your email app should now open with the enquiry ready to send.',
    });
    setForm(empty);
  };

  return (
    <section id="contact" className="section section--light contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__intro">
          <Reveal as="p" className="eyebrow">
            06 — Contact
          </Reveal>
          <Reveal as="h2" id="contact-title" className="section-title" delay={0.08}>
            Let&apos;s create something <em>meaningful.</em>
          </Reveal>

          <Reveal as="ul" className="contact__links" delay={0.16}>
            <ContactLink
              icon={Mail}
              label="Email"
              value={contact.email}
              href={contact.email ? `mailto:${contact.email}` : ''}
              external={false}
            />
            <ContactLink
              icon={Linkedin}
              label="LinkedIn"
              value={contact.linkedin && 'View profile'}
              href={contact.linkedin}
            />
            <ContactLink
              icon={Github}
              label="GitHub"
              value={contact.github && 'View profile'}
              href={contact.github}
            />
            <ContactLink
              icon={MessageCircle}
              label="WhatsApp"
              value={contact.whatsapp && 'Start a chat'}
              href={whatsappUrl(contact.whatsapp)}
            />
          </Reveal>
        </div>

        <Reveal as="form" className="cform" onSubmit={onSubmit} delay={0.12}>
          <div className="cform__row">
            <div className="field">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={update('name')}
                placeholder="Your name"
              />
            </div>
            <div className="field">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={update('email')}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="cf-subject">Subject</label>
            <input
              id="cf-subject"
              name="subject"
              type="text"
              required
              value={form.subject}
              onChange={update('subject')}
              placeholder="What is this about?"
            />
          </div>

          <div className="field">
            <label htmlFor="cf-message">Message</label>
            <textarea
              id="cf-message"
              name="message"
              rows={6}
              required
              value={form.message}
              onChange={update('message')}
              placeholder="Tell me about your project, timeline and goals…"
            />
          </div>

          <div className="cform__foot">
            <Button type="submit" variant="solid" icon={false}>
              <Send size={16} aria-hidden="true" /> Send enquiry
            </Button>
            <p
              className={`cform__status cform__status--${status.type}`}
              role="status"
              aria-live="polite"
            >
              {status.text}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
