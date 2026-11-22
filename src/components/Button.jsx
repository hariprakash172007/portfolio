import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Button.css';

/**
 * Renders an <a> when `href` is given, otherwise a <button>.
 * variant: 'solid' | 'accent' | 'ghost' | 'ghost-light'
 */
export default function Button({
  href,
  onClick,
  variant = 'solid',
  icon = true,
  type = 'button',
  disabled = false,
  external = false,
  className = '',
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  const cls = `btn btn--${variant} ${className}`.trim();
  const hover = reduce ? undefined : { y: -2 };
  const tap = reduce ? undefined : { scale: 0.98 };

  const content = (
    <>
      <span className="btn__label">{children}</span>
      {icon && (
        <span className="btn__icon" aria-hidden="true">
          <ArrowUpRight size={16} strokeWidth={2.2} />
        </span>
      )}
    </>
  );

  if (href) {
    const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <motion.a
        className={cls}
        href={href}
        onClick={onClick}
        whileHover={hover}
        whileTap={tap}
        {...ext}
        {...rest}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={cls}
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : hover}
      whileTap={disabled ? undefined : tap}
      {...rest}
    >
      {content}
    </motion.button>
  );
}
