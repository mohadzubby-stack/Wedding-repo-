import React from 'react';

interface OrnateFrameProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'card' | 'folio' | 'arch';
  padding?: string;
}

export const OrnateFrame: React.FC<OrnateFrameProps> = ({
  children,
  className = '',
  variant = 'folio',
  padding = 'p-8 sm:p-12',
}) => {
  return (
    <div
      className={`relative paper-texture invitation-shadow ${
        variant === 'arch' ? 'cathedral-arch' : 'rounded-[4px]'
      } ${className}`}
      style={{
        border: '1px solid rgba(212, 175, 55, 0.45)',
      }}
    >
      {/* Inner hairline frame with inset gap */}
      <div
        className={`relative ${
          variant === 'arch' ? 'cathedral-arch' : 'rounded-[2px]'
        } ${padding}`}
        style={{
          margin: '6px',
          border: '0.5px solid rgba(212, 175, 55, 0.35)',
        }}
      >
        {/* Botanical Corner Flourishes */}
        {/* Top-Left */}
        <div className="absolute top-1.5 left-1.5 pointer-events-none text-[#D4AF37] opacity-75">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M 2 2 L 18 2 M 2 2 L 2 18 M 2 2 L 12 12 M 7 2 C 7 7 2 7 2 7"
              stroke="#D4AF37"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
            <circle cx="2" cy="2" r="1.2" fill="#D4AF37" />
            <circle cx="12" cy="12" r="0.9" fill="#D4AF37" />
          </svg>
        </div>

        {/* Top-Right */}
        <div className="absolute top-1.5 right-1.5 pointer-events-none text-[#D4AF37] opacity-75">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M 22 2 L 6 2 M 22 2 L 22 18 M 22 2 L 12 12 M 17 2 C 17 7 22 7 22 7"
              stroke="#D4AF37"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
            <circle cx="22" cy="2" r="1.2" fill="#D4AF37" />
            <circle cx="12" cy="12" r="0.9" fill="#D4AF37" />
          </svg>
        </div>

        {/* Bottom-Left */}
        <div className="absolute bottom-1.5 left-1.5 pointer-events-none text-[#D4AF37] opacity-75">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M 2 22 L 18 22 M 2 22 L 2 6 M 2 22 L 12 12 M 7 22 C 7 17 2 17 2 17"
              stroke="#D4AF37"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
            <circle cx="2" cy="22" r="1.2" fill="#D4AF37" />
            <circle cx="12" cy="12" r="0.9" fill="#D4AF37" />
          </svg>
        </div>

        {/* Bottom-Right */}
        <div className="absolute bottom-1.5 right-1.5 pointer-events-none text-[#D4AF37] opacity-75">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M 22 22 L 6 22 M 22 22 L 22 6 M 22 22 L 12 12 M 17 22 C 17 17 22 17 22 17"
              stroke="#D4AF37"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
            <circle cx="22" cy="22" r="1.2" fill="#D4AF37" />
            <circle cx="12" cy="12" r="0.9" fill="#D4AF37" />
          </svg>
        </div>

        {children}
      </div>
    </div>
  );
};
