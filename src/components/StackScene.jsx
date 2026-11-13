import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Eyebrow } from './motion';

/* The signature moment: one app screen that pulls apart into the four layers behind it. */

export const layers = [
  {
    key: 'ui',
    tag: 'UI',
    name: 'Interface',
    desc: 'What people see, tap and scroll.',
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    key: 'api',
    tag: 'API',
    name: 'API',
    desc: 'Endpoints, auth and the business logic.',
    tools: ['Django', 'FastAPI', 'Flask', 'REST'],
  },
  {
    key: 'data',
    tag: 'DATA',
    name: 'Database',
    desc: 'Where everything is stored, in good shape.',
    tools: ['PostgreSQL', 'MySQL'],
  },
  {
    key: 'cloud',
    tag: 'CLOUD',
    name: 'Cloud',
    desc: 'Where it all runs, live for the world.',
    tools: ['Vercel', 'Netlify', 'AWS'],
  },
];

function UiMock() {
  return (
    <div className="mock mock--ui">
      <div className="mock-chrome">
        <i /> <i /> <i />
        <span className="mock-url mono">goodycode.app</span>
      </div>
      <div className="mock-ui-body">
        <div className="mock-ui-nav">
          <b />
          <span /> <span /> <span />
        </div>
        <div className="mock-ui-hero">
          <span className="w-80" />
          <span className="w-60" />
          <em />
        </div>
        <div className="mock-ui-cards">
          <span /> <span /> <span />
        </div>
      </div>
    </div>
  );
}

function ApiMock() {
  const rows = [
    ['GET', '/api/projects', '200', '38ms'],
    ['POST', '/api/auth/login', '200', '112ms'],
    ['GET', '/api/orders?page=2', '200', '54ms'],
    ['PATCH', '/api/profile', '204', '41ms'],
    ['DELETE', '/api/cart/12', '204', '29ms'],
  ];
  return (
    <div className="mock mock--api mono">
      {rows.map(([m, path, code, ms]) => (
        <div className="mock-api-row" key={path}>
          <span className={`verb verb--${m.toLowerCase()}`}>{m}</span>
          <span className="path">{path}</span>
          <span className="code">{code}</span>
          <span className="ms">{ms}</span>
        </div>
      ))}
    </div>
  );
}

function DataMock() {
  const rows = [
    ['1', 'orders', 'paid'],
    ['2', 'orders', 'shipped'],
    ['3', 'users', 'active'],
    ['4', 'products', 'in_stock'],
  ];
  return (
    <div className="mock mock--data mono">
      <div className="mock-data-row mock-data-head">
        <span>id</span>
        <span>table</span>
        <span>status</span>
      </div>
      {rows.map((r) => (
        <div className="mock-data-row" key={r[0]}>
          {r.map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

function CloudMock() {
  return (
    <div className="mock mock--cloud mono">
      <span>$ git push origin main</span>
      <span>▲ Building…</span>
      <span>✓ Compiled in 14s</span>
      <span>✓ Migrations applied</span>
      <strong>✓ Deployed to production</strong>
    </div>
  );
}

const mocks = { ui: UiMock, api: ApiMock, data: DataMock, cloud: CloudMock };

function Plane({ layer, depth, spread }) {
  const z = useTransform(spread, (s) => depth * s);
  const Mock = mocks[layer.key];
  return (
    <motion.div className={`plane plane--${layer.key}`} style={{ z }}>
      <Mock />
      <span className="plane-tag mono">{layer.tag}</span>
    </motion.div>
  );
}

function Label({ layer, index, progress }) {
  const start = 0.32 + index * 0.1;
  const opacity = useTransform(progress, [start, start + 0.08], [0.22, 1]);
  const x = useTransform(progress, [start, start + 0.08], [14, 0]);
  return (
    <motion.li className="stack-label" style={{ opacity, x }}>
      <span className="mono stack-label-index">0{index + 1}</span>
      <div>
        <h3>{layer.name}</h3>
        <p className="stack-label-desc">{layer.desc}</p>
        <p className="mono stack-label-tools">{layer.tools.join(' · ')}</p>
      </div>
    </motion.li>
  );
}

export default function StackScene() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  // Reduced motion: skip the choreography and show the exploded stack.
  const progress = useTransform(scrollYProgress, (v) => (reduce ? 1 : v));

  const rotateX = useTransform(progress, [0.04, 0.32], [0, 56]);
  const rotateZ = useTransform(progress, [0.04, 0.32], [0, -38]);
  const spread = useTransform(progress, [0.2, 0.62], [0, 140]);
  const lift = useTransform(spread, (s) => s * 1.15);

  const firstOpacity = useTransform(progress, [0.5, 0.6], [1, 0]);
  const secondOpacity = useTransform(progress, [0.6, 0.7], [0, 1]);
  const secondY = useTransform(progress, [0.6, 0.7], ['40%', '0%']);

  return (
    <section id="stack" className="stack-scene" ref={ref} aria-label="How I build: four layers of a product">
      <div className="stack-sticky">
        <div className="container stack-grid">
          <div className="stack-copy">
            <Eyebrow index="00">How I build</Eyebrow>
            <h2 className="section-title stack-title">
              <motion.span style={{ opacity: firstOpacity }}>What you see is one layer.</motion.span>
              <motion.span className="stack-title-alt" style={{ opacity: secondOpacity, y: secondY }} aria-hidden="true">
                I build <em className="serif accent">every</em> one of them.
              </motion.span>
            </h2>
            <ol className="stack-labels">
              {layers.map((l, i) => (
                <Label key={l.key} layer={l} index={i} progress={progress} />
              ))}
            </ol>
          </div>

          <div className="stack-stage" aria-hidden="true">
            <motion.div className="stack-lift" style={{ y: lift }}>
              <motion.div className="stack-planes" style={{ rotateX, rotateZ }}>
                {/* Bottom layer first in the DOM so the UI paints on top while the planes are still flat. */}
                {[...layers].reverse().map((l, i) => (
                  <Plane key={l.key} layer={l} depth={i} spread={spread} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
