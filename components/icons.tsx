export function IconCalendar({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 9.5h17" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3v3.2M16 3v3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 13.2h2M8 16.4h2M14 13.2h2M14 16.4h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconBoxes({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="11" width="7.5" height="9" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13.5" y="11" width="7.5" height="9" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 4l5 2.8v4.2L8 8.2V4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 4l-4.5 2.5 4.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M13 6.8l4.5-2.3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPeople({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 20c0-3.3 2.5-5.7 5.5-5.7s5.5 2.4 5.5 5.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="17" cy="7.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15.3 14.6c2.6.2 4.7 2.3 4.7 5.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCheck({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 12.5l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconQR({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14.5" y="3.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3.5" y="14.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14.5 15h3v3h-3zM19 19h1.5M14.5 20.5h1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
