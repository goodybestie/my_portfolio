import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { scrollToId } from './Nav';
import { ease } from './motion';

/* Fixed side indicator: which layer of the stack you're scrolling through. */
const sectionLayer = {
  work: 'UI',
  services: 'API',
  experience: 'DATA',
  contact: 'CLOUD',
};
const order = [
  { id: 'work', tag: 'UI' },
  { id: 'services', tag: 'API' },
  { id: 'experience', tag: 'DATA' },
  { id: 'contact', tag: 'CLOUD' },
];
const watched = ['top', 'stack', 'about', ...Object.keys(sectionLayer)];

export default function StackMeter() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(sectionLayer[e.target.id] ?? null);
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    watched.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.nav
          className="stack-meter"
          aria-label="Layer you're viewing"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.5, ease }}
        >
          {order.map((l) => {
            const on = l.tag === active;
            return (
              <button
                key={l.tag}
                className={`stack-meter-item${on ? ' is-on' : ''}`}
                onClick={() => scrollToId(l.id)}
                aria-current={on ? 'true' : undefined}
                aria-label={`${l.tag} layer`}
              >
                <span className="stack-meter-label mono">{l.tag}</span>
                <span className="stack-meter-slab" />
              </button>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
