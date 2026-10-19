import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { navLinks, profile } from '../data';
import { useLocalTime } from './Hero';
import { Magnetic, ease } from './motion';
import { scrollToId } from './Nav';

export default function Footer() {
  const time = useLocalTime(profile.timezone);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <nav className="footer-links" aria-label="Footer">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scrollToId(l.id)}>
                {l.label}
              </button>
            ))}
          </nav>
          <Magnetic>
            <button className="to-top" onClick={() => scrollToId('top')} aria-label="Back to top">
              <FiArrowUp />
            </button>
          </Magnetic>
        </div>

        <div className="footer-mark" aria-hidden="true">
          <motion.span
            initial={{ y: '100%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease }}
          >
            {profile.brand}
          </motion.span>
        </div>

        <div className="footer-bottom mono">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.location} · {time} WAT</span>
          <span>Built with React & Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
