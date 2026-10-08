import React from 'react';

interface HeraldicCrestProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showMotto?: boolean;
  className?: string;
}

export const HeraldicCrest: React.FC<HeraldicCrestProps> = ({
  size = 'md',
  showMotto = true,
  className = '',
}) => {
  const sizeMap = {
    sm: { width: 64, height: 72 },
    md: { width: 110, height: 120 },
    lg: { width: 160, height: 180 },
    xl: { width: 220, height: 240 },
  };

  const { width, height } = sizeMap[size];

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 hover:scale-105"
      >
        <defs>
          <linearGradient id="goldSheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ECC867" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#FFF2B2" />
            <stop offset="100%" stopColor="#9E7D17" />
          </linearGradient>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#D4AF37" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Outer Laurel Garland Left */}
        <path
          d="M 68 70 C 45 90 40 125 55 155 C 65 172 82 184 100 190"
          stroke="url(#goldSheen)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Laurel Leaves Left */}
        {[
          { x: 50, y: 88, rot: -25 },
          { x: 42, y: 110, rot: -10 },
          { x: 44, y: 134, rot: 15 },
          { x: 58, y: 156, rot: 35 },
          { x: 78, y: 174, rot: 55 },
        ].map((leaf, idx) => (
          <ellipse
            key={`leaf-l-${idx}`}
            cx={leaf.x}
            cy={leaf.y}
            rx="5.5"
            ry="2.5"
            transform={`rotate(${leaf.rot} ${leaf.x} ${leaf.y})`}
            fill="none"
            stroke="url(#goldSheen)"
            strokeWidth="1"
          />
        ))}

        {/* Outer Laurel Garland Right */}
        <path
          d="M 132 70 C 155 90 160 125 145 155 C 135 172 118 184 100 190"
          stroke="url(#goldSheen)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Laurel Leaves Right */}
        {[
          { x: 150, y: 88, rot: 25 },
          { x: 158, y: 110, rot: 10 },
          { x: 156, y: 134, rot: -15 },
          { x: 142, y: 156, rot: -35 },
          { x: 122, y: 174, rot: -55 },
        ].map((leaf, idx) => (
          <ellipse
            key={`leaf-r-${idx}`}
            cx={leaf.x}
            cy={leaf.y}
            rx="5.5"
            ry="2.5"
            transform={`rotate(${leaf.rot} ${leaf.x} ${leaf.y})`}
            fill="none"
            stroke="url(#goldSheen)"
            strokeWidth="1"
          />
        ))}

        {/* Aristocratic Coronet / Crown at Top */}
        <g transform="translate(100, 36) scale(0.9)">
          {/* Coronet base rim */}
          <path
            d="M -32 10 Q 0 14 32 10 L 30 16 Q 0 19 -30 16 Z"
            fill="url(#goldSheen)"
            stroke="url(#goldSheen)"
            strokeWidth="0.8"
          />
          {/* Pearls on base rim */}
          {[-24, -12, 0, 12, 24].map((px) => (
            <circle key={px} cx={px} cy={13} r="1.5" fill="#FAF6EE" stroke="url(#goldSheen)" strokeWidth="0.5" />
          ))}
          {/* Crown spikes / Fleur-de-lis points */}
          <path
            d="M -28 10 L -30 -2 L -22 6 L 0 -12 L 22 6 L 30 -2 L 28 10 Z"
            fill="none"
            stroke="url(#goldSheen)"
            strokeWidth="1.2"
          />
          {/* Jewels atop crown spikes */}
          <circle cx="-30" cy="-3" r="2.2" fill="#FAF6EE" stroke="url(#goldSheen)" strokeWidth="0.8" />
          <circle cx="0" cy="-13" r="3" fill="#D4AF37" stroke="url(#goldSheen)" strokeWidth="1" />
          <circle cx="30" cy="-3" r="2.2" fill="#FAF6EE" stroke="url(#goldSheen)" strokeWidth="0.8" />
          {/* Center tiny cross or gem */}
          <path d="M 0 -19 L 0 -16 M -1.5 -17.5 L 1.5 -17.5" stroke="url(#goldSheen)" strokeWidth="0.9" />
        </g>

        {/* Inner Shield / Cartouche Filigree */}
        <path
          d="M 64 68 Q 100 62 136 68 C 138 98 135 130 100 156 C 65 130 62 98 64 68 Z"
          fill="#FAF6EE"
          stroke="url(#goldSheen)"
          strokeWidth="1.2"
          filter="url(#goldGlow)"
        />
        <path
          d="M 68 72 Q 100 67 132 72 C 134 97 131 126 100 150 C 69 126 66 97 68 72 Z"
          fill="none"
          stroke="url(#goldSheen)"
          strokeWidth="0.6"
          strokeDasharray="2 2"
        />

        {/* Monogram Letters: Intertwined G & A */}
        {/* Letter G (Genevieve) */}
        <text
          x="91"
          y="114"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="Playfair Display, Georgia, serif"
          fontSize="44"
          fontStyle="italic"
          fontWeight="500"
          fill="url(#goldSheen)"
        >
          G
        </text>

        {/* Intertwining ampersand flourish */}
        <text
          x="100"
          y="115"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="Playfair Display, Georgia, serif"
          fontSize="20"
          fontStyle="italic"
          fill="#5B1425"
          opacity="0.85"
        >
          &
        </text>

        {/* Letter A (Alexander) */}
        <text
          x="109"
          y="114"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="Playfair Display, Georgia, serif"
          fontSize="44"
          fontWeight="500"
          fill="url(#goldSheen)"
        >
          A
        </text>

        {/* Lower Banner Ribbon */}
        <g transform="translate(100, 196)">
          <path
            d="M -60 0 C -40 -4 40 -4 60 0 L 52 10 C 35 7 -35 7 -52 10 Z"
            fill="#FAF6EE"
            stroke="url(#goldSheen)"
            strokeWidth="1"
          />
          {/* Ribbon notched ends */}
          <path
            d="M -60 0 L -68 6 L -58 11 L -52 10"
            fill="#FAF6EE"
            stroke="url(#goldSheen)"
            strokeWidth="0.8"
          />
          <path
            d="M 60 0 L 68 6 L 58 11 L 52 10"
            fill="#FAF6EE"
            stroke="url(#goldSheen)"
            strokeWidth="0.8"
          />
          {/* Year in Roman Numerals: MMXXVI (2026) */}
          <text
            x="0"
            y="6"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="Manrope, sans-serif"
            fontSize="7"
            fontWeight="600"
            letterSpacing="2"
            fill="#735C00"
          >
            MMXXVI
          </text>
        </g>
      </svg>

      {showMotto && (
        <span className="mt-1 text-[10px] font-sans uppercase tracking-[0.24em] text-[#7A7265]">
          Sempiterna Fidelitas
        </span>
      )}
    </div>
  );
};
