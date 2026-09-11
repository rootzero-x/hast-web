/**
 * The HAST mark: two people under one roof.
 *
 * Drawn rather than loaded, for two reasons. It renders before any network
 * request finishes, so the page never flashes without its logo; and it inherits
 * the exact geometry used by the app icon and the SVG export, so there is one
 * shape rather than three that are almost the same.
 *
 * The numbers come from `tool/export_logo.py` in the app repository. If they
 * ever need changing, change them there and re-export — this file is a copy of
 * that output, not a second original.
 */

export function Mark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="HAST">
      <defs>
        <linearGradient id="hast-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2BD481" />
          <stop offset="1" stopColor="#12A25F" />
        </linearGradient>
      </defs>

      <rect width="100" height="100" rx="24" fill="url(#hast-mark)" />
      <path
        d="M22 48 L50 26 L78 48"
        fill="none"
        stroke="#fff"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="40" cy="62" r="7.5" fill="#fff" />
      <circle cx="60" cy="62" r="7.5" fill="#fff" />
    </svg>
  );
}

export function Wordmark() {
  return <span className="text-xl font-extrabold tracking-tight">HAST</span>;
}
