import React from 'react';

interface WaxSealProps {
  onClick?: () => void;
  isBroken?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  sublabel?: string;
  showRibbon?: boolean;
  interactive?: boolean;
  className?: string;
}

export const WaxSeal: React.FC<WaxSealProps> = ({
  onClick,
  isBroken = false,
  size = 'md',
  label,
  sublabel,
  showRibbon = true,
  interactive = true,
  className = '',
}) => {
  const dimensions = {
    sm: { circle: 54, inner: 40, fontSize: 13, textOffset: 2 },
    md: { circle: 78, inner: 58, fontSize: 18, textOffset: 2 },
    lg: { circle: 104, inner: 78, fontSize: 24, textOffset: 3 },
  };

  const { circle, inner, fontSize } = dimensions[size];

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Golden Silk Ribbons under the seal */}
      {showRibbon && (
        <div className="absolute -top-3 pointer-events-none flex justify-center gap-1.5 z-0">
          <div 
            className="w-3.5 bg-gradient-to-b from-[#D4AF37] via-[#C59B27] to-[#8C6D14] shadow-sm transform -rotate-12 rounded-b-sm"
            style={{ height: circle * 0.95 }}
          />
          <div 
            className="w-3.5 bg-gradient-to-b from-[#D4AF37] via-[#C59B27] to-[#8C6D14] shadow-sm transform rotate-12 rounded-b-sm"
            style={{ height: circle * 0.95 }}
          />
        </div>
      )}

      {/* The Molten Wax Stamp Body */}
      <button
        type="button"
        disabled={!interactive}
        onClick={onClick}
        aria-label={label || 'Royal Wax Seal'}
        className={`relative z-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60 group ${
          interactive ? 'cursor-pointer hover:scale-105 active:scale-95' : 'cursor-default'
        } ${isBroken ? 'opacity-80 scale-90' : ''}`}
        style={{
          width: circle,
          height: circle,
          background: 'radial-gradient(circle at 35% 35%, #782033 0%, #5B1425 60%, #3B0C17 100%)',
          boxShadow: `
            0 8px 20px -4px rgba(45, 9, 18, 0.5),
            0 2px 6px 0 rgba(0, 0, 0, 0.25),
            inset 0 2px 4px rgba(255, 255, 255, 0.2),
            inset 0 -3px 5px rgba(0, 0, 0, 0.6)
          `,
        }}
      >
        {/* Organic Molten Rim Texture */}
        <div 
          className="absolute inset-1 rounded-full border border-[#8B233A]/40 pointer-events-none"
          style={{
            boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.15)',
          }}
        />

        {/* Debossed Inner Core */}
        <div
          className="rounded-full flex items-center justify-center transition-all"
          style={{
            width: inner,
            height: inner,
            background: 'radial-gradient(circle at 50% 50%, #501120 0%, #440E1B 100%)',
            boxShadow: `
              inset 0 3px 6px rgba(0, 0, 0, 0.7),
              inset 0 -1px 2px rgba(255, 255, 255, 0.1),
              0 1px 2px rgba(255, 255, 255, 0.08)
            `,
            border: '1.5px solid rgba(139, 35, 58, 0.5)',
          }}
        >
          {/* Debossed Monogram Impressions & Coronet */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* Crown Motif */}
            <svg 
              width={inner * 0.45} 
              height={inner * 0.25} 
              viewBox="0 0 24 14" 
              fill="none" 
              className="opacity-75 mb-0.5"
            >
              <path 
                d="M 2 12 L 2 4 L 7 8 L 12 2 L 17 8 L 22 4 L 22 12 Z" 
                fill="#8C253B" 
                stroke="#A8324C" 
                strokeWidth="0.75" 
              />
              <circle cx="2" cy="3" r="1.2" fill="#D4AF37" />
              <circle cx="12" cy="1" r="1.5" fill="#D4AF37" />
              <circle cx="22" cy="3" r="1.2" fill="#D4AF37" />
            </svg>

            {/* Intertwined Initials G & A */}
            <div 
              className="font-serif italic font-semibold leading-none tracking-tight select-none"
              style={{
                fontSize,
                color: '#8F263C',
                textShadow: `
                  -1px -1px 0 rgba(0, 0, 0, 0.8),
                  1px 1px 0 rgba(255, 255, 255, 0.12)
                `,
              }}
            >
              G&A
            </div>
          </div>
        </div>

        {/* Crack / Unsealed mark overlay if broken */}
        {isBroken && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
              <path
                d="M 20 50 L 45 48 L 52 54 L 80 47"
                stroke="#FAF6EE"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        )}
      </button>

      {/* Optional Label / Action guidance */}
      {(label || sublabel) && (
        <div className="mt-3 text-center">
          {label && (
            <div className="label-caps text-[#5B1425] font-semibold tracking-[0.2em]">
              {label}
            </div>
          )}
          {sublabel && (
            <div className="text-xs font-serif italic text-[#7A7265] mt-0.5">
              {sublabel}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
