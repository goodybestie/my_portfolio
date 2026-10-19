import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { profile, projects } from '../data';
import { Eyebrow, Magnetic, SplitWords, ease } from './motion';

function ProjectImage({ project }) {
  const [hover, setHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 28 });
  const sy = useSpring(y, { stiffness: 300, damping: 28 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  return (
    <a
      className="project-media"
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title} live site`}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      onPointerMove={onMove}
    >
      <motion.img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        animate={{ scale: hover ? 1.05 : 1 }}
        transition={{ duration: 0.8, ease }}
      />
      <AnimatePresence>
        {hover && (
          <motion.span
            className="cursor-badge"
            style={{ left: sx, top: sy }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            Visit site <FiArrowUpRight />
          </motion.span>
        )}
      </AnimatePresence>
    </a>
  );
}

function ProjectCard({ project, index, total, progress }) {
  const targetScale = 1 - (total - index - 1) * 0.04;
  const start = index / total;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);

  return (
    <div className="stack-slot">
      <motion.article
        className={`project project--${project.theme}`}
        style={{ scale, top: `calc(var(--stack-top) + ${index * 22}px)` }}
      >
        <div className="project-info">
          <div className="project-head mono">
            <span>{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
            <span>{project.year}</span>
          </div>
          <div>
            <p className="project-role mono">{project.role}</p>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <ul className="project-tags">
              {project.tags.map((t) => (
                <li key={t} className="chip chip--ghost">{t}</li>
              ))}
            </ul>
          </div>
          <a className="btn btn--pill project-cta" href={project.live} target="_blank" rel="noopener noreferrer">
            Live site <FiArrowUpRight />
          </a>
        </div>
        <ProjectImage project={project} />
      </motion.article>
    </div>
  );
}

export default function Work() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-head">
          <Eyebrow index="02">Selected work</Eyebrow>
          <h2 className="section-title">
            <SplitWords text="Projects I've designed, built and shipped." />
          </h2>
        </div>

        <div className="stack-list" ref={ref}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} total={projects.length} progress={scrollYProgress} />
          ))}
        </div>

        <div className="work-more">
          <Magnetic>
            <a className="btn btn--dark btn--lg" href={profile.github} target="_blank" rel="noopener noreferrer">
              <FiGithub /> More on GitHub
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
