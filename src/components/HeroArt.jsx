import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import Monogram from './Monogram.jsx';
import './HeroArt.css';

/**
 * Interactive geometric artwork for the hero. Layers drift at different
 * depths in response to the pointer; static when reduced motion is preferred.
 */
export default function HeroArt() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18 });
  const sy = useSpring(my, { stiffness: 70, damping: 18 });

  const backX = useTransform(sx, (v) => v * -14);
  const backY = useTransform(sy, (v) => v * -14);
  const midX = useTransform(sx, (v) => v * 26);
  const midY = useTransform(sy, (v) => v * 26);
  const frontX = useTransform(sx, (v) => v * 44);
  const frontY = useTransform(sy, (v) => v * 44);

  const onMove = (e) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const layer = (x, y) => (reduce ? undefined : { x, y });

  return (
    <div className="heroart" onPointerMove={onMove} onPointerLeave={onLeave} aria-hidden="true">
      <motion.div className="heroart__layer" style={layer(backX, backY)}>
        <div className="heroart__ring" />
        <div className="heroart__ring heroart__ring--inner" />
      </motion.div>

      <motion.div className="heroart__layer" style={layer(midX, midY)}>
        <div className="heroart__disc" />
        <div className="heroart__square" />
        <div className="heroart__half" />
        <span className="heroart__dot heroart__dot--a" />
        <span className="heroart__dot heroart__dot--b" />
      </motion.div>

      <motion.div className="heroart__layer heroart__layer--front" style={layer(frontX, frontY)}>
        <div className="heroart__card">
          <Monogram size={96} title="" />
          
        </div>
      </motion.div>
    </div>
  );
}
