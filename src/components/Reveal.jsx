import { motion, useReducedMotion } from 'framer-motion';

/**
 * Scroll-triggered reveal wrapper. Renders static content when the visitor
 * prefers reduced motion.
 */
export default function Reveal({
  as = 'div',
  delay = 0,
  y = 32,
  className = '',
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduce) {
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      className={`reveal ${className}`}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
