import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import StackScene from './components/StackScene';
import StackMeter from './components/StackMeter';
import About from './components/About';
import Work from './components/Work';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { stack } from './data';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Nav />
      <StackMeter />
      <main>
        <Hero />
        <Marquee items={stack} />
        <StackScene />
        <About />
        <Work />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
