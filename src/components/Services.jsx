import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { services } from '../data';
import { Eyebrow, Reveal, ease } from './motion';

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="section services">
      <div className="container">
        <Eyebrow index="03">Services</Eyebrow>
        <div className="services-grid">
          <div>
            <Reveal as="h2" className="section-title services-title">
              How I can help <sup className="mono">(services)</sup>
            </Reveal>
            <ul className="service-list">
              {services.map((s, i) => {
                const isActive = active === i;
                return (
                  <Reveal as="li" key={s.title} delay={i * 0.06} className={`service${isActive ? ' is-active' : ''}`}>
                    <button
                      className="service-btn"
                      onPointerEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-expanded={isActive}
                    >
                      {isActive && <motion.span layoutId="service-bar" className="service-bar" transition={{ duration: 0.5, ease }} />}
                      <span className="mono service-index">(0{i + 1})</span>
                      <span className="service-name">{s.title}</span>
                      <FiArrowUpRight className="service-arrow" />
                    </button>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          className="service-desc"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease }}
                        >
                          <span>{s.desc}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </Reveal>
                );
              })}
            </ul>
          </div>

          <Reveal className="service-preview" delay={0.15}>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.img
                key={services[active].image}
                src={services[active].image}
                alt=""
                initial={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease }}
              />
            </AnimatePresence>
            <span className="service-preview-tag mono">0{active + 1} — {services[active].title}</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
