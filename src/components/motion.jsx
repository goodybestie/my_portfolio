import { Fragment, forwardRef, useEffect, useRef } from 'react';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

export const ease = [0.22, 1, 0.36, 1];

/** Fade + lift + un-blur when the element scrolls into view. */
export const Reveal = forwardRef(function Reveal({ children, delay = 0, y = 32, as = 'div', className, ...rest }, ref) {
  const Tag = motion[as];
  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.9, delay, ease }}
      {...rest}
    >
      {children}
    </Tag>
  );
});

/** Each word slides up from behind a mask. Pass `animateOnMount` for above-the-fold text. */
export function SplitWords({ text, className, delay = 0, stagger = 0.06, animateOnMount = false }) {
  const words = text.split(' ');
  const trigger = animateOnMount
    ? { animate: 'show' }
    : { whileInView: 'show', viewport: { once: true, margin: '0px 0px -10% 0px' } };
  return (
    <motion.span
      className={className}
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="mask" aria-hidden="true">
            <motion.span
              className="mask-inner"
              variants={{ hidden: { y: '110%' }, show: { y: '0%' } }}
              transition={{ duration: 1, ease }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 && ' '}
        </Fragment>
      ))}
    </motion.span>
  );
}

/** Paragraph whose words light up as you scroll through it. */
export function ScrollText({ text, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] });
  const words = text.split(' ');
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return <ScrollWord key={i} progress={scrollYProgress} range={[start, end]}>{word}</ScrollWord>;
      })}
    </p>
  );
}

function ScrollWord({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <span className="scroll-word">
      <motion.span style={{ opacity }}>{children}</motion.span>{' '}
    </span>
  );
}

/** Counts up from 0 once visible. */
export function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

/** Pulls its child gently toward the cursor. */
export function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span ref={ref} className="magnetic" style={{ x: sx, y: sy }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </motion.span>
  );
}

/** Small mono label used above section titles, e.g. "(02) Selected work". */
export function Eyebrow({ index, children, light }) {
  return (
    <Reveal className={`eyebrow${light ? ' eyebrow--light' : ''}`} y={12}>
      <span className="eyebrow-index">({index})</span>
      <span>{children}</span>
    </Reveal>
  );
}
