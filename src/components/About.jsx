import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { principles, profile, stack, stats } from '../data';
import { Counter, Eyebrow, Reveal, ScrollText } from './motion';

const statement =
  "I build the parts of a product people actually touch. For five years I've been turning designs into responsive, fast interfaces with React, Next.js and TypeScript — growing from trainee to front-end developer at FutureLabs, and shipping for teams and clients along the way.";

export default function About() {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section id="about" className="section about">
      <div className="container">
        <Eyebrow index="01">About me</Eyebrow>
        <ScrollText className="statement" text={statement} />

        <div className="about-grid">
          <Reveal className="about-photo" ref={imgRef}>
            <motion.img src={profile.portrait} alt={`Portrait of ${profile.name}`} style={{ y: imgY, scale: 1.2 }} />
            <span className="about-photo-tag mono">
              {profile.name} — {profile.location}
            </span>
          </Reveal>

          <div className="about-side">
            <div className="stats">
              {stats.map((s, i) => (
                <Reveal key={s.label} className="stat" delay={i * 0.08}>
                  <span className="stat-value">
                    {s.text ?? <Counter value={s.value} suffix={s.suffix} />}
                  </span>
                  <span className="stat-label">{s.label}</span>
                </Reveal>
              ))}
            </div>

            <div className="principles">
              {principles.map((p, i) => (
                <Reveal key={p.title} className="principle" delay={i * 0.08}>
                  <span className="mono principle-index">0{i + 1}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="stack">
              <span className="mono stack-label">Toolkit</span>
              <ul>
                {stack.map((s) => (
                  <li key={s} className="chip">{s}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
