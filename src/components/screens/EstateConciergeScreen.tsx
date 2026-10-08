import React, { useState } from 'react';
import { ScreenId } from '../../types.ts';
import { OrnateFrame } from '../OrnateFrame.tsx';
import { MapPin, Navigation as NavIcon, Bed, Sparkles, HelpCircle, Phone, ExternalLink } from 'lucide-react';

interface EstateConciergeScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const EstateConciergeScreen: React.FC<EstateConciergeScreenProps> = ({ onNavigate }) => {
  const [selectedGround, setSelectedGround] = useState('orangery');

  const grounds = [
    {
      id: 'orangery',
      title: 'The Grand Orangery',
      role: 'Ballroom & Midnight Revelry',
      description: 'Built by Nicholas Hawksmoor in 1708, this luminous stone glasshouse features arched French windows overlooking the Italian Water Terraces and lake cascading fountains.',
      capacity: '320 Guests seated',
      vibe: 'Gilded chandeliers, white gardenias, marble statues',
    },
    {
      id: 'chapel',
      title: 'The Chapel of Marlborough',
      role: 'Holy Matrimony & Benediction',
      description: 'Consecrated sanctuary housing the magnificent marble tomb of the 1st Duke by Rysbrack and a historic three-manual organ providing majestic carillon acoustics.',
      capacity: '280 Guests in pews',
      vibe: 'Sacred limestone vaults, candlelit aisle, stained glass',
    },
    {
      id: 'library',
      title: 'The Long Library',
      role: 'State Banquet & Royal Toasts',
      description: 'One of the longest staterooms in Europe at 183 feet. Lined with over 10,000 historic leather-bound volumes beneath gilded stucco plasterwork ceilings.',
      capacity: '300 Guests banquet table',
      vibe: 'Aristocratic grandeur, beeswax taper candles, historic portraits',
    },
    {
      id: 'terraces',
      title: 'The Italian Water Terraces',
      role: 'Champagne Reception & Fireworks',
      description: 'Sculpted formal parterres and symmetrical fountain pools modeled after the gardens of Versailles, descending gracefully toward Queen Pool lake.',
      capacity: 'Open Promenade',
      vibe: 'Classical bronze sphinxes, lavender boxwoods, lakeside breezes',
    },
  ];

  const paletteColors = [
    { name: 'Imperial Emerald', hex: '#1B3B2B', note: 'Velvets, dinner jackets & evening silks' },
    { name: 'Champagne Gold', hex: '#D4AF37', note: 'Heirloom jewellery, embroidery & accents' },
    { name: 'Royal Burgundy', hex: '#5B1425', note: 'Ties, shawls, cummerbunds & deep gems' },
    { name: 'Midnight Navy', hex: '#16233B', note: 'Bespoke tailoring & formal evening wear' },
    { name: 'Rose Quartz', hex: '#D9B4BC', note: 'Delicate gowns & floral accoutrements' },
  ];

  const hotels = [
    {
      name: 'The Feathers Hotel',
      location: 'Market Street, Woodstock (0.4 miles)',
      description: 'Charming 17th-century country townhouse hotel with bespoke four-poster suites and antique fireplaces.',
      rate: 'From £340 / night',
      code: 'Quote: MONTFORT-WEDDING',
      phone: '+44 (0)1993 812291',
    },
    {
      name: 'The Bear Hotel',
      location: 'Park Street, Woodstock (0.3 miles)',
      description: 'One of the oldest coaching inns in England, offering exposed stone walls, ivy courtyards, and English hospitality.',
      rate: 'From £290 / night',
      code: 'Quote: HASTINGS-SUITE',
      phone: '+44 (0)1993 811511',
    },
    {
      name: 'The Randolph Hotel by Graduate',
      location: 'Beaumont Street, Oxford (8.2 miles)',
      description: 'Gothic revival grand hotel facing the Ashmolean Museum. Shuttle coaches depart directly from the portico.',
      rate: 'From £420 / night',
      code: 'Quote: ROYAL-HEIRLOOM',
      phone: '+44 (0)1865 256400',
    },
  ];

  const faqs = [
    {
      q: 'May photographs be taken during the Holy Nuptial Mass?',
      a: 'We kindly invite guests to remain fully present during the chapel ceremony. Our private court photographers will capture every sacred blessing, which will be archived in the online guest folio.',
    },
    {
      q: 'Are little lords and ladies (children) invited?',
      a: 'While we adore your young ones, the evening banquet and midnight ball are tailored as an adult celebration, with the exception of the bridal party flower girls and page boys.',
    },
    {
      q: 'What is the inclement weather contingency?',
      a: 'In the event of classic Oxfordshire showers, the entire celebration transitions seamlessly between the Colonaded Loggia, the Long Library, and the heated glass Orangery without stepping onto wet lawns.',
    },
    {
      q: 'Is there a private helipad on the estate?',
      a: 'Yes. Helicopter landings on the South Lawn must be pre-arranged with the palace estate seneschal at least 14 days prior. Coordinates: N51°50.51\' W001°21.68\'.',
    },
  ];

  return (
    <div className="min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[920px] mx-auto space-y-16">
        
        {/* Editorial Section Header */}
        <div className="text-center">
          <div className="label-caps text-[#7A7265] tracking-[0.24em] mb-2">
            The Historical Grounds &amp; Guest Concierge
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1B3B2B] mb-3">
            The Royal Estate
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-[#7A7265] max-w-xl mx-auto">
            Blenheim Palace, seat of the Dukes of Marlborough, set amidst 2,000 acres of landscaped parklands and formal gardens.
          </p>
          <div className="flex items-center justify-center gap-3 pt-3">
            <span className="h-[0.5px] w-14 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">✦</span>
            <span className="h-[0.5px] w-14 bg-[#D4AF37]" />
          </div>
        </div>

        {/* Estate Venues & Architecture */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-3">
            <div>
              <div className="label-caps text-[#5B1425]">Venues of Celebration</div>
              <h2 className="text-2xl font-serif text-[#1B3B2B]">Palace Staterooms &amp; Parterres</h2>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#7A7265]">
              <MapPin size={13} className="text-[#D4AF37]" /> Woodstock, OX20 1PP, UK
            </div>
          </div>

          {/* Grounds Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {grounds.map((g) => (
              <button
                key={g.id}
                onClick={() => setSelectedGround(g.id)}
                className={`p-3 text-left rounded-[2px] border transition-all cursor-pointer ${
                  selectedGround === g.id
                    ? 'bg-[#1B3B2B] text-[#FAF6EE] border-[#1B3B2B] shadow-sm'
                    : 'bg-[#FAF6EE] text-[#24201D] border-[#D4AF37]/40 hover:border-[#D4AF37]'
                }`}
              >
                <div className="text-[10px] uppercase tracking-wider opacity-75">{g.role.split('&')[0]}</div>
                <div className="font-serif text-sm font-medium mt-0.5 truncate">{g.title}</div>
              </button>
            ))}
          </div>

          {/* Selected Ground Showcase */}
          {(() => {
            const current = grounds.find((g) => g.id === selectedGround) || grounds[0];
            return (
              <OrnateFrame variant="card" padding="p-6 sm:p-8">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D4AF37]/20 pb-3">
                    <div>
                      <span className="label-caps text-[#5B1425]">{current.role}</span>
                      <h3 className="text-2xl font-serif text-[#1B3B2B]">{current.title}</h3>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-[2px] border border-[#D4AF37]/60 text-xs font-sans text-[#7A7265] bg-[#FAF6EE]">
                      Capacity: {current.capacity}
                    </span>
                  </div>

                  <p className="font-serif italic text-base text-[#24201D] leading-relaxed">
                    {current.description}
                  </p>

                  <div className="flex items-center gap-2 pt-2 text-xs text-[#7A7265]">
                    <span className="font-semibold text-[#1B3B2B]">Setting &amp; Décor:</span>
                    <span>{current.vibe}</span>
                  </div>
                </div>
              </OrnateFrame>
            );
          })()}
        </div>

        {/* Visual Grounds Map & Wayfinding Schematic */}
        <div className="paper-texture border border-[#D4AF37]/45 rounded-[3px] p-6 sm:p-8 invitation-shadow">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="label-caps text-[#7A7265]">Interactive Grounds Schematic</div>
              <h3 className="text-xl font-serif text-[#1B3B2B]">Estate Wayfinding &amp; Access Gates</h3>
            </div>
            <span className="text-xs text-[#7A7265] font-serif italic">Hensington Gate Entrance</span>
          </div>

          {/* Stylized Architectural Estate Map SVG */}
          <div className="w-full bg-[#FAF6EE] border border-[#D4AF37]/30 rounded-[2px] p-4 sm:p-6 overflow-hidden">
            <svg viewBox="0 0 600 320" className="w-full h-auto">
              {/* Lake Representation */}
              <path
                d="M 50 250 C 180 230 350 290 550 260 L 550 310 L 50 310 Z"
                fill="#C4E8D1"
                opacity="0.35"
              />
              <text x="320" y="295" fontSize="11" fontFamily="Playfair Display" fontStyle="italic" fill="#456553" textAnchor="middle">
                Queen Pool &amp; Vanbrugh Grand Bridge
              </text>

              {/* Main Palace Quadrangle */}
              <rect x="200" y="70" width="200" height="110" rx="2" fill="#F1EDE6" stroke="#D4AF37" strokeWidth="1.2" />
              <text x="300" y="110" fontSize="13" fontFamily="Playfair Display" fontWeight="500" fill="#1B3B2B" textAnchor="middle">
                The Great Court
              </text>
              <text x="300" y="125" fontSize="9" fontFamily="Manrope" letterSpacing="1" fill="#7A7265" textAnchor="middle">
                CENTRAL PALACE QUADRANGLE
              </text>

              {/* West Wing: The Chapel */}
              <rect x="110" y="60" width="80" height="90" rx="2" fill="#FAF6EE" stroke="#D4AF37" strokeWidth="1" />
              <text x="150" y="100" fontSize="10" fontFamily="Playfair Display" fill="#1B3B2B" textAnchor="middle">
                The Chapel
              </text>
              <text x="150" y="112" fontSize="7" fontFamily="Manrope" fill="#5B1425" textAnchor="middle">
                CEREMONY
              </text>

              {/* East Wing: The Orangery */}
              <rect x="410" y="60" width="90" height="90" rx="2" fill="#FAF6EE" stroke="#D4AF37" strokeWidth="1" />
              <text x="455" y="100" fontSize="10" fontFamily="Playfair Display" fill="#1B3B2B" textAnchor="middle">
                The Orangery
              </text>
              <text x="455" y="112" fontSize="7" fontFamily="Manrope" fill="#735C00" textAnchor="middle">
                BALLROOM
              </text>

              {/* South Parterre: Water Terraces & Long Library */}
              <rect x="220" y="190" width="160" height="45" rx="2" fill="#FAF6EE" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 2" />
              <text x="300" y="215" fontSize="10" fontFamily="Playfair Display" fill="#1B3B2B" textAnchor="middle">
                The Water Terraces &amp; Rose Garden
              </text>

              {/* North Gate Access & Valet */}
              <circle cx="300" cy="30" r="5" fill="#D4AF37" />
              <text x="300" y="20" fontSize="8" fontFamily="Manrope" fontWeight="600" letterSpacing="1" fill="#1B3B2B" textAnchor="middle">
                NORTH CARRIAGE GUEST ARRIVAL &amp; VALET
              </text>
              <line x1="300" y1="35" x2="300" y2="68" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
          </div>
        </div>

        {/* Sartorial Dress Code & Moodboard Palette */}
        <div className="space-y-6">
          <div className="border-b border-[#D4AF37]/30 pb-3">
            <div className="label-caps text-[#5B1425]">Sartorial Elegance</div>
            <h2 className="text-2xl font-serif text-[#1B3B2B]">Recommended Guest Palette</h2>
          </div>

          <p className="font-serif italic text-sm text-[#7A7265] max-w-xl">
            To weave a harmonious visual tapestry within the historic gilded halls, we invite our guests to draw inspiration from the following noble color palette:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {paletteColors.map((color) => (
              <div
                key={color.name}
                className="p-3 bg-[#FAF6EE] border border-[#D4AF37]/30 rounded-[2px] flex flex-col items-center text-center shadow-xs"
              >
                <div
                  className="w-10 h-10 rounded-full border border-white/60 shadow-inner mb-2"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="text-xs font-semibold text-[#1B3B2B]">{color.name}</div>
                <div className="text-[10px] text-[#7A7265] font-serif italic mt-0.5">{color.note}</div>
              </div>
            ))}
          </div>

          {/* Gentle Courtesy Notice */}
          <div className="bg-[#FAF6EE] border-l-2 border-[#5B1425] p-4 text-xs font-serif italic text-[#7A7265]">
            <span className="font-semibold text-[#5B1425] not-italic">Note of Courteous Etiquette: </span>
            We kindly request that esteemed guests refrain from wearing pure bridal white, ivory, or alabaster cream gowns.
          </div>
        </div>

        {/* Recommended Accommodations */}
        <div className="space-y-6">
          <div className="border-b border-[#D4AF37]/30 pb-3">
            <div className="label-caps text-[#5B1425]">Hospitality &amp; Rest</div>
            <h2 className="text-2xl font-serif text-[#1B3B2B]">Partner Hotels &amp; Inns</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hotels.map((h) => (
              <div
                key={h.name}
                className="paper-texture border border-[#D4AF37]/35 rounded-[3px] p-5 flex flex-col justify-between hover:border-[#D4AF37] transition-all"
              >
                <div>
                  <div className="label-caps text-[#7A7265] mb-1">{h.location}</div>
                  <h3 className="font-serif text-lg text-[#1B3B2B] mb-2">{h.name}</h3>
                  <p className="text-xs text-[#7A7265] font-sans leading-relaxed mb-4">
                    {h.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#D4AF37]/20 space-y-1.5 text-xs">
                  <div className="font-medium text-[#1B3B2B]">{h.rate}</div>
                  <div className="text-[#5B1425] font-mono text-[11px] font-semibold">{h.code}</div>
                  <div className="flex items-center gap-1 text-[#7A7265]">
                    <Phone size={11} className="text-[#D4AF37]" /> {h.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-6">
          <div className="border-b border-[#D4AF37]/30 pb-3">
            <div className="label-caps text-[#5B1425]">Questions &amp; Guidance</div>
            <h2 className="text-2xl font-serif text-[#1B3B2B]">Palace Etiquette &amp; Protocol</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="paper-texture border border-[#D4AF37]/30 rounded-[3px] p-5 space-y-2"
              >
                <div className="flex items-start gap-2">
                  <HelpCircle size={15} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <h4 className="font-serif text-base font-medium text-[#1B3B2B]">{faq.q}</h4>
                </div>
                <p className="text-xs font-sans text-[#7A7265] leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
