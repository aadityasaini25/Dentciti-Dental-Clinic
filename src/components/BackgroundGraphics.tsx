'use client';

// Subtle ambient background — drifting brand-tinted blobs + a faint grid.
// Sits below all content (z-0) and is non-interactive.
export default function BackgroundGraphics() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Floating brand-color blobs */}
      <div className="absolute top-[-12%] left-[-8%] w-[520px] h-[520px] bg-[#2A93C7] rounded-full blur-[90px] opacity-[0.08] animate-pulse" />
      <div className="absolute bottom-[-8%] right-[-6%] w-[420px] h-[420px] bg-[#0F2A40] rounded-full blur-[80px] opacity-[0.06] soft-float" />
      <div className="absolute top-1/3 right-[20%] w-[260px] h-[260px] bg-[#F5D548] rounded-full blur-[100px] opacity-[0.05] soft-float" style={{ animationDelay: '2s' }} />

      {/* Faint grid + dot pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-[0.4]" />

      {/* Floating decorative medical glyphs */}
      <div className="absolute top-1/4 right-[8%] opacity-15 soft-float" style={{ animationDelay: '1s' }}>
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#2A93C7]">
          <path d="M12 2v20M2 12h20" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-[4%] opacity-15 soft-float" style={{ animationDelay: '3s' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#0F2A40]">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
        </svg>
      </div>
    </div>
  );
}
