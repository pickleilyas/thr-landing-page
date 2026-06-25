interface ZelligeDividerProps {
  className?: string;
}

export function ZelligeDivider({ className = "" }: ZelligeDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-6 py-2 ${className}`}>
      <span className="hairline w-full max-w-[160px]" />
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-saffron">
        <path
          d="M20 2 L26 14 L38 14 L28 22 L32 34 L20 27 L8 34 L12 22 L2 14 L14 14 Z"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          opacity="0.7"
        />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </svg>
      <span className="hairline w-full max-w-[160px]" />
    </div>
  );
}
