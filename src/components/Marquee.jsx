import { motion } from 'framer-motion';

export default function Marquee({ items, speed = 40, variant = '' }) {
  const row = [...items, ...items];
  return (
    <div className={`marquee ${variant}`} aria-label={items.join(', ')}>
      <motion.div
        className="marquee-track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
        aria-hidden="true"
      >
        {row.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <span className="marquee-star">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
