import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      {/* Painter's Palette SVG */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="18" cy="19" rx="16" ry="15" fill="#C41E3A" />
        {/* Thumb hole */}
        <circle cx="12" cy="25" r="4" fill="white" />
        {/* Paint wells */}
        <circle cx="10" cy="13" r="2.5" fill="white" />
        <circle cx="18"  cy="9"  r="2.5" fill="white" />
        <circle cx="26" cy="13" r="2.5" fill="white" />
        <circle cx="27" cy="21" r="2.5" fill="white" />
      </svg>

      {/* Text */}
      <div className="flex items-baseline gap-1 leading-none">
        <span className="text-sm font-bold tracking-widest text-charcoal uppercase">
          CAFE
        </span>
        <span className="text-sm font-bold tracking-widest text-accent uppercase">
          RAGCLUB
        </span>
      </div>
    </Link>
  );
}
