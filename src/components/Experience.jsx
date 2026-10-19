import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import { credentials, experience } from '../data';
import { Eyebrow, Reveal, SplitWords } from './motion';

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <Eyebrow index="04" light>Experience</Eyebrow>
          <h2 className="section-title">
            <SplitWords text="Where I've made an impact." />
          </h2>
        </div>

        <div className="timeline" ref={ref}>
          <div className="timeline-track" aria-hidden="true">
            <motion.span className="timeline-fill" style={{ scaleY: line }} />
          </div>

          {experience.map((job, i) => (
            <Reveal as="article" key={job.company} className="job" delay={0.05}>
              <span className="job-dot" aria-hidden="true" />
              <div className="job-aside">
                <span className="mono job-period">{job.period}</span>
                <span className="chip chip--dark">{job.type}</span>
              </div>
              <div className="job-body">
                <h3 className="job-role">{job.role}</h3>
                <p className="job-company">
                  {job.company}
                  <span className="job-location">
                    <FiMapPin /> {job.location}
                  </span>
                </p>
                <p className="job-desc">{job.description}</p>
                <ul className="job-wins">
                  {job.achievements.map((a) => (
                    <li key={a}>
                      <FiArrowRight /> <span>{a}</span>
                    </li>
                  ))}
                </ul>
                <ul className="project-tags">
                  {job.tech.map((t) => (
                    <li key={t} className="chip chip--dark">{t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="credentials">
          {credentials.map((c, i) => (
            <Reveal key={c.label} className="credential" delay={i * 0.08}>
              <span className="mono credential-label">{c.label}</span>
              <h3>{c.title}</h3>
              <p>{c.detail}</p>
              <span className="mono credential-period">{c.period}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
