import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import { navLinks, profile } from '../data';
import { ease } from './motion';

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

const sectionIds = navLinks.map((l) => l.id);

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const active = useActiveSection(sectionIds);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 240 && !open);
    setScrolled(y > 24);
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  const highlight = hovered ?? active;

  return (
    <>
      <motion.header
        className={`nav${scrolled ? ' nav--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.6, ease }}
      >
        <button className="nav-logo" onClick={() => go('top')} aria-label="Back to top">
          {profile.brand}
          <sup>®</sup>
        </button>

        <nav className="nav-pill" aria-label="Primary" onPointerLeave={() => setHovered(null)}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link${active === link.id ? ' is-active' : ''}`}
              onClick={() => go(link.id)}
              onPointerEnter={() => setHovered(link.id)}
            >
              {highlight === link.id && (
                <motion.span layoutId="nav-highlight" className="nav-highlight" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
              )}
              <span className="nav-link-label">{link.label}</span>
            </button>
          ))}
        </nav>

        <div className="nav-right">
          <a className="btn btn--dark btn--sm nav-cta" href={profile.cv} download="Goodness-Bassey-CV.pdf">
            Download CV <FiArrowUpRight />
          </a>
          <button className="nav-menu" onClick={() => setOpen((o) => !o)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease }}
          >
            <ul>
              {navLinks.map((link, i) => (
                <li key={link.id} className="mask">
                  <motion.button
                    className="menu-link"
                    onClick={() => go(link.id)}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '110%' }}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.06, ease }}
                  >
                    <span className="menu-index">0{i + 1}</span>
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
            <motion.div className="menu-foot" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }} exit={{ opacity: 0 }}>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a className="btn btn--light" href={profile.cv} download="Goodness-Bassey-CV.pdf">
                Download CV <FiArrowUpRight />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
