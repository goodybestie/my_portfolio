import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight, FiCheck, FiCopy, FiGithub, FiLinkedin, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { profile } from '../data';
import { Eyebrow, Magnetic, Reveal, ease } from './motion';

const line = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 1, ease } },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact dot-grid">
      <div className="container">
        <Eyebrow index="05">Contact</Eyebrow>

        <motion.h2
          className="contact-title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ staggerChildren: 0.1 }}
          aria-label="Let's build something great together."
        >
          <span className="mask" aria-hidden="true">
            <motion.span className="mask-inner" variants={line}>
              Let's build
            </motion.span>
          </span>
          <span className="mask" aria-hidden="true">
            <motion.span className="mask-inner" variants={line}>
              something
              <motion.span
                className="hero-pill hero-pill--accent"
                variants={{ hidden: { width: '0em' }, show: { width: '1.6em', transition: { delay: 0.4, duration: 1, ease } } }}
              >
                <img src={profile.portrait} alt="" />
              </motion.span>
              <em className="serif">great</em>
            </motion.span>
          </span>
          <span className="mask" aria-hidden="true">
            <motion.span className="mask-inner" variants={line}>
              together.
            </motion.span>
          </span>
        </motion.h2>

        <div className="contact-grid">
          <Reveal className="contact-direct">
            <span className="status status--card">
              <span className="status-dot" /> Open to new roles · Willing to relocate anywhere
            </span>

            <button className="email-big" onClick={copyEmail} aria-label={`Copy email address ${profile.email}`}>
              <span className="email-text">{profile.email}</span>
              <span className="email-icon">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? 'ok' : 'copy'}
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.25 }}
                  >
                    {copied ? <FiCheck /> : <FiCopy />}
                  </motion.span>
                </AnimatePresence>
              </span>
            </button>
            <AnimatePresence>
              {copied && (
                <motion.span
                  className="toast mono"
                  role="status"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                >
                  Email copied to clipboard
                </motion.span>
              )}
            </AnimatePresence>

            <a className="btn btn--whatsapp btn--lg" href={profile.whatsapp} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> Chat on WhatsApp
            </a>

            <ul className="contact-list">
              <li>
                <FiPhone /> <a href={profile.phoneHref}>{profile.phone}</a>
              </li>
              <li>
                <FaWhatsapp />
                <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp · {profile.phone}
                </a>
              </li>
              <li>
                <FiMapPin /> {profile.location} · Remote or relocation
              </li>
              <li>
                <FiLinkedin />
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/goodness-bassey
                </a>
              </li>
              <li>
                <FiGithub />
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  github.com/goodybestie
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal as="form" className="contact-form" onSubmit={onSubmit} delay={0.1}>
            <label className="field">
              <span className="mono">Your name</span>
              <input name="name" value={form.name} onChange={onChange} placeholder="Jane Doe" required autoComplete="name" />
            </label>
            <label className="field">
              <span className="mono">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="jane@company.com"
                required
                autoComplete="email"
              />
            </label>
            <label className="field">
              <span className="mono">Message</span>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about the role or project…"
                required
              />
            </label>
            <Magnetic strength={0.2}>
              <button type="submit" className="btn btn--dark btn--lg">
                Send message <FiArrowUpRight />
              </button>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
