import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { SiNextdotjs, SiReact, SiTypescript } from 'react-icons/si';
import { profile } from '../data';
import { Magnetic, ease } from './motion';
import { scrollToId } from './Nav';

export function useLocalTime(timeZone) {
  const format = () =>
    new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    const t = setInterval(() => setTime(format()), 15000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);
  return time;
}

const line = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 1.1, ease } },
};

const chips = [
  { icon: <SiReact />, label: 'React', className: 'chip-float chip-float--1', delay: 1.2 },
  { icon: <SiTypescript />, label: 'TypeScript', className: 'chip-float chip-float--2', delay: 1.35 },
  { icon: <SiNextdotjs />, label: 'Next.js', className: 'chip-float chip-float--3', delay: 1.5 },
];

const squares = ['sq sq--1', 'sq sq--2', 'sq sq--3', 'sq sq--4', 'sq sq--5'];

export default function Hero() {
  const ref = useRef(null);
  const time = useLocalTime(profile.timezone);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" className="hero dot-grid" ref={ref}>
      <motion.div
        className="hero-meta mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <span>Portfolio ©{new Date().getFullYear()}</span>
        <span className="hide-sm">{profile.location} — {time} WAT</span>
        <span className="status">
          <span className="status-dot" /> Available for work
        </span>
      </motion.div>

      {squares.map((c, i) => (
        <motion.span
          key={c}
          className={c}
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1 + i * 0.08, duration: 0.6, ease }}
        />
      ))}

      {chips.map((chip) => (
        <motion.span
          key={chip.label}
          className={chip.className}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: chip.delay, duration: 0.8, ease }}
        >
          <span className="chip-float-inner">
            {chip.icon} {chip.label}
          </span>
        </motion.span>
      ))}

      <motion.h1
        className="hero-title"
        style={{ y: titleY, opacity: fade }}
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
        aria-label="Frontend developer crafting interfaces people love to use."
      >
        <span className="mask hero-line" aria-hidden="true">
          <motion.span className="mask-inner" variants={line}>
            Frontend
            <motion.span
              className="hero-pill"
              initial={{ width: '0em', opacity: 0 }}
              animate={{ width: '1.9em', opacity: 1 }}
              transition={{ delay: 0.9, duration: 1.1, ease }}
            >
              <img src={profile.portrait} alt="" />
            </motion.span>
            developer
          </motion.span>
        </span>
        <span className="mask hero-line" aria-hidden="true">
          <motion.span className="mask-inner" variants={line}>
            crafting interfaces
          </motion.span>
        </span>
        <span className="mask hero-line" aria-hidden="true">
          <motion.span className="mask-inner" variants={line}>
            people <em className="serif accent">love</em> to use.
          </motion.span>
        </span>
      </motion.h1>

      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease }}
      >
        <p className="hero-intro">
          I'm <strong>{profile.name}</strong> — a front-end developer with 5 years of experience building responsive,
          user-focused websites and web apps with React, Next.js and TypeScript.
        </p>
        <div className="hero-actions">
          <Magnetic>
            <button className="btn btn--accent btn--lg" onClick={() => scrollToId('contact')}>
              Hire me <FiArrowUpRight />
            </button>
          </Magnetic>
          <a className="link-arrow" href={profile.cv} target="_blank" rel="noopener noreferrer">
            View résumé <FiArrowUpRight />
          </a>
        </div>
        <button className="scroll-cue mono hide-sm" onClick={() => scrollToId('about')} aria-label="Scroll to about">
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
            <FiArrowDownRight />
          </motion.span>
          Scroll
        </button>
      </motion.div>
    </section>
  );
}
