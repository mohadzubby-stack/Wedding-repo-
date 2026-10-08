import React, { useState } from 'react';
import { ScreenId } from '../../types.ts';
import { HeraldicCrest } from '../HeraldicCrest.tsx';
import { WaxSeal } from '../WaxSeal.tsx';
import { OrnateFrame } from '../OrnateFrame.tsx';
import { CountdownTimer } from '../CountdownTimer.tsx';
import { playHarpArpeggio, playWaxSealClick } from '../../utils/audio.ts';
import { Calendar, MapPin, Sparkles, ArrowRight, BookOpen, Compass } from 'lucide-react';

interface InvitationSuiteScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const InvitationSuiteScreen: React.FC<InvitationSuiteScreenProps> = ({
  onNavigate,
}) => {
  const [isUnsealed, setIsUnsealed] = useState(false);
  const [justUnsealed, setJustUnsealed] = useState(false);

  const handleUnseal = () => {
    playWaxSealClick();
    setTimeout(() => {
      playHarpArpeggio();
    }, 180);
    setIsUnsealed(true);
    setJustUnsealed(true);
    setTimeout(() => setJustUnsealed(false), 1200);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[820px] mx-auto">
        
        {/* Envelope Folio Mode when Sealed */}
        {!isUnsealed ? (
          <div className="transition-all duration-700 animate-in fade-in zoom-in-95">
            {/* Sealed Folio Envelope Presentation */}
            <div className="relative mx-auto max-w-[620px] bg-[#FAF6EE] rounded-[4px] border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-10 text-center">
              {/* Outer Envelope Flap Simulation */}
              <div 
                className="relative mx-auto p-8 sm:p-12 border border-[#D4AF37]/35 rounded-[2px] paper-texture overflow-hidden"
                style={{
                  boxShadow: 'inset 0 2px 10px rgba(91, 20, 37, 0.05)',
                }}
              >
                {/* Gold filigree corner decorations */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t border-l border-[#D4AF37]" />
                <div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-[#D4AF37]" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b border-l border-[#D4AF37]" />
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b border-r border-[#D4AF37]" />

                {/* Diagonal Envelope Crease Emulation */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <line x1="0" y1="0" x2="50" y2="48" stroke="#D4AF37" strokeWidth="0.75" />
                    <line x1="100" y1="0" x2="50" y2="48" stroke="#D4AF37" strokeWidth="0.75" />
                  </svg>
                </div>

                <div className="relative z-10 py-6">
                  <div className="label-caps text-[#7A7265] tracking-[0.24em] mb-4">
                    The Formal Nuptial Correspondence
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif text-[#1B3B2B] mb-2 tracking-wide">
                    Lady Genevieve & Lord Alexander
                  </h2>

                  <p className="font-serif italic text-sm text-[#7A7265] max-w-md mx-auto mb-10">
                    Bearing the official seal of the Montfort & Hastings Union
                  </p>

                  {/* The interactive Royal Burgundy Wax Seal */}
                  <div className="py-2">
                    <WaxSeal
                      onClick={handleUnseal}
                      size="lg"
                      label="Touch Seal to Unfurl"
                      sublabel="Break wax impression & open folio"
                    />
                  </div>

                  <div className="mt-8 text-xs font-sans text-[#7A7265]/80 uppercase tracking-widest">
                    Blenheim Palace · Oxfordshire · MMXXVI
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#7A7265]">
                <span>Formal Invitation Suite</span>
                <span aria-hidden="true">·</span>
                <span>Requires Royal Unsealing</span>
              </div>
            </div>
          </div>
        ) : (
          /* Unfolded Grand Invitation Suite */
          <div className="space-y-12 animate-in fade-in duration-700">
            
            {/* Quick Banner Action for Resealing / Audio indicator */}
            <div className="flex items-center justify-between text-xs text-[#7A7265] px-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1B3B2B]" />
                <span className="label-caps text-[#1B3B2B]">Official Folio Unsealed</span>
              </div>
              <button
                onClick={() => setIsUnsealed(false)}
                className="hover:text-[#1B3B2B] underline decoration-[#D4AF37] underline-offset-4 cursor-pointer text-xs"
              >
                Inspect Sealed Envelope
              </button>
            </div>

            {/* The Main Grand Stationery Card */}
            <OrnateFrame variant="folio" padding="p-8 sm:p-14 lg:p-16">
              
              {/* Foil Header Crown & Crest */}
              <div className="text-center mb-6">
                <HeraldicCrest size="md" showMotto={true} />
              </div>

              {/* Solemn Invitation Phrasing */}
              <div className="text-center max-w-xl mx-auto space-y-6">
                
                <div className="label-caps text-[#7A7265] tracking-[0.26em]">
                  By familial blessing & high honour
                </div>

                <p className="font-serif italic text-base sm:text-lg text-[#24201D]/80">
                  Together with their families
                </p>

                {/* The Couple Names */}
                <div className="py-2">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1B3B2B] tracking-tight leading-tight">
                    Lady Genevieve de Montfort
                  </h1>
                  
                  <div className="my-2.5">
                    <span className="font-serif italic text-xl sm:text-2xl text-[#D4AF37] font-normal">
                      and
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1B3B2B] tracking-tight leading-tight">
                    Lord Alexander Hastings
                  </h1>
                </div>

                <p className="font-serif italic text-base sm:text-lg text-[#24201D] leading-relaxed max-w-md mx-auto pt-2">
                  request the honour of your presence at the celebration of their Holy Matrimony and Nuptial Blessings
                </p>

                {/* Gold Hairline Divider with Fleur-de-lis */}
                <div className="flex items-center justify-center gap-3 py-4">
                  <span className="h-[0.5px] w-16 sm:w-28 bg-[#D4AF37]" />
                  <span className="text-[#D4AF37] text-xs">✦</span>
                  <span className="h-[0.5px] w-16 sm:w-28 bg-[#D4AF37]" />
                </div>

                {/* Ceremony Date & Time */}
                <div className="space-y-2">
                  <div className="font-serif text-xl sm:text-2xl text-[#1B3B2B] font-medium tracking-wide">
                    Saturday, the Twenty-Fourth of October
                  </div>
                  <div className="label-caps text-[#7A7265] tracking-[0.2em]">
                    Two Thousand and Twenty-Six
                  </div>
                  <div className="font-serif italic text-sm sm:text-base text-[#24201D]/80 pt-1">
                    At one o&apos;clock in the afternoon
                  </div>
                </div>

                {/* Venue & Location */}
                <div className="pt-4 pb-2 space-y-1.5">
                  <div className="font-serif text-lg sm:text-xl text-[#24201D] font-medium">
                    The Orangery &amp; Grand Ballroom
                  </div>
                  <div className="text-sm font-sans text-[#7A7265] tracking-wide">
                    Blenheim Palace · Woodstock, Oxfordshire
                  </div>
                  <div className="font-serif italic text-xs text-[#7A7265] pt-1">
                    Followed by an evening banquet, toasts, and revelry under the stars
                  </div>
                </div>

                {/* Archival Wax Seal Stamp Endorsement */}
                <div className="pt-4 flex justify-center">
                  <WaxSeal size="sm" showRibbon={false} interactive={false} />
                </div>
              </div>
            </OrnateFrame>

            {/* Countdown Section Card */}
            <div className="paper-texture border border-[#D4AF37]/40 rounded-[3px] p-8 sm:p-10 invitation-shadow text-center">
              <div className="label-caps text-[#7A7265] tracking-[0.22em] mb-3">
                Anticipation of the Holy Union
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1B3B2B] mb-6">
                Countdown to the Royal Celebration
              </h2>
              <CountdownTimer />
              <div className="mt-8 text-xs font-serif italic text-[#7A7265]">
                October 24, 2026 · Woodstock, Oxfordshire, England
              </div>
            </div>

            {/* Cathedral Arch Architectural Vignette */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Feature 1: The Order of Events */}
              <div className="paper-texture border border-[#D4AF37]/35 rounded-[3px] p-6 text-center flex flex-col justify-between hover:border-[#D4AF37] transition-all group">
                <div>
                  <div className="w-10 h-10 mx-auto rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#1B3B2B] mb-4">
                    <Calendar size={18} />
                  </div>
                  <div className="label-caps text-[#7A7265] mb-1">Schedule</div>
                  <h3 className="font-serif text-lg text-[#1B3B2B] mb-2">Order of Events</h3>
                  <p className="text-xs font-sans text-[#7A7265] leading-relaxed">
                    From the Friday Twilight Soirée through to the Sunday Farewell Rose Garden Brunch.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('itinerary')}
                  className="mt-5 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#1B3B2B] hover:text-[#735C00] uppercase tracking-[0.16em] cursor-pointer"
                >
                  View Itinerary <ArrowRight size={13} />
                </button>
              </div>

              {/* Feature 2: Formal RSVP Suite */}
              <div className="paper-texture border border-[#D4AF37]/50 rounded-[3px] p-6 text-center flex flex-col justify-between bg-gradient-to-b from-[#FAF6EE] to-[#F5EEDC]/40 hover:border-[#D4AF37] transition-all">
                <div>
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#D4AF37] text-[#24201D] flex items-center justify-center mb-4 shadow-sm">
                    <Sparkles size={18} />
                  </div>
                  <div className="label-caps text-[#5B1425] mb-1">Response Required</div>
                  <h3 className="font-serif text-lg text-[#1B3B2B] mb-2">Formal RSVP</h3>
                  <p className="text-xs font-sans text-[#7A7265] leading-relaxed">
                    Kindly impart your gracious attendance, select banquet courses, and reserve coach transfers.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('rsvp')}
                  className="mt-5 w-full py-2 bg-[#D4AF37] hover:bg-[#ECC867] text-[#24201D] text-xs font-semibold uppercase tracking-[0.18em] transition-all rounded-[2px] shadow-sm cursor-pointer"
                >
                  Respond Now
                </button>
              </div>

              {/* Feature 3: Estate Grounds & Travel */}
              <div className="paper-texture border border-[#D4AF37]/35 rounded-[3px] p-6 text-center flex flex-col justify-between hover:border-[#D4AF37] transition-all group">
                <div>
                  <div className="w-10 h-10 mx-auto rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#1B3B2B] mb-4">
                    <Compass size={18} />
                  </div>
                  <div className="label-caps text-[#7A7265] mb-1">Concierge</div>
                  <h3 className="font-serif text-lg text-[#1B3B2B] mb-2">The Royal Estate</h3>
                  <p className="text-xs font-sans text-[#7A7265] leading-relaxed">
                    Palace grounds guide, recommended boutique suites, private charters, and black-tie attire guide.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('estate')}
                  className="mt-5 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#1B3B2B] hover:text-[#735C00] uppercase tracking-[0.16em] cursor-pointer"
                >
                  Estate Guide <ArrowRight size={13} />
                </button>
              </div>

            </div>

            {/* Formal Editorial Quote & Attire Note */}
            <div className="text-center py-6 border-t border-b border-[#D4AF37]/25 max-w-lg mx-auto">
              <div className="font-serif italic text-base sm:text-lg text-[#24201D]/90">
                &ldquo;Where eternal love bridges timeless legacy, two souls unite under the canopy of heritage.&rdquo;
              </div>
              <div className="label-caps text-[#7A7265] mt-3">
                Dress Code: White Tie &amp; Evening Tiara Preferred
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
