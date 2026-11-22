/** Custom HP monogram — geometric H with a rounded P, drawn as strokes. */
export default function Monogram({ size = 120, className = '', title = 'HP monogram' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label={title}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 24v72M24 60h26M50 24v72" stroke="currentColor" strokeWidth="10" />
      <path
        d="M70 96V24h17a17 17 0 0 1 0 34H70"
        stroke="var(--lime)"
        strokeWidth="10"
      />
    </svg>
  );
}
