import React, { useState } from 'react';
import { ScreenId } from '../types.ts';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { getIsMuted, toggleAudioMute, playHarpArpeggio } from '../utils/audio.ts';

interface NavigationProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  hasSubmittedRSVP?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentScreen,
  onNavigate,
  hasSubmittedRSVP = false,
}) => {
  const [isMuted, setIsMuted] = useState(getIsMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ScreenId; label: string }[] = [
    { id: 'invitation', label: 'Invitation' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'estate', label: 'Estate' },
    { id: 'bridal-party', label: 'Lineage' },
    { id: 'registry', label: 'Registry' },
    ...(hasSubmittedRSVP ? [{ id: 'guest-pass' as ScreenId, label: 'Guest Pass' }] : []),
  ];

  const handleAudioToggle = () => {
    const muted = toggleAudioMute();
    setIsMuted(muted);
    if (!muted) {
      playHarpArpeggio();
    }
  };

  const handleSelectScreen = (screen: ScreenId) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF6EE]/92 backdrop-blur-md border-b border-[#D4AF37]/25 transition-all">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark in display face */}
          <button
            onClick={() => handleSelectScreen('invitation')}
            className="text-xl sm:text-2xl font-serif text-[#1B3B2B] hover:text-[#735C00] transition-colors cursor-pointer text-left whitespace-nowrap focus:outline-none"
          >
            Royal Heirloom
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectScreen(item.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer text-[13px] tracking-[0.06em] uppercase ${
                    isActive
                      ? 'text-[#1B3B2B] font-semibold'
                      : 'text-[#7A7265] hover:text-[#24201D]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D4AF37]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Audio harp chime toggle */}
            <button
              onClick={handleAudioToggle}
              aria-label={isMuted ? 'Unmute Harp Chimes' : 'Mute Harp Chimes'}
              title={isMuted ? 'Enable ambient harp tones' : 'Mute ambient audio'}
              className="w-8 h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#7A7265] hover:text-[#1B3B2B] hover:border-[#D4AF37] transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>

            {/* Primary Action Button: Accept / Respond RSVP */}
            <button
              onClick={() => handleSelectScreen('rsvp')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-200 cursor-pointer whitespace-nowrap ${
                currentScreen === 'rsvp'
                  ? 'bg-[#1B3B2B] text-[#FAF6EE] shadow-sm'
                  : 'bg-[#D4AF37] text-[#24201D] hover:bg-[#ECC867] hover:scale-[1.01] shadow-sm'
              }`}
              style={{ borderRadius: '2px' }}
            >
              Formal RSVP
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-1.5 text-[#1B3B2B] hover:text-[#D4AF37] transition-colors"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#D4AF37]/20 bg-[#FAF6EE] px-6 py-5 shadow-lg space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelectScreen(item.id)}
                className={`block w-full text-left py-2 text-sm uppercase tracking-[0.14em] ${
                  currentScreen === item.id
                    ? 'text-[#1B3B2B] font-semibold pl-2 border-l-2 border-[#D4AF37]'
                    : 'text-[#7A7265] hover:text-[#24201D]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleSelectScreen('rsvp')}
              className="w-full mt-2 py-2.5 bg-[#D4AF37] text-[#24201D] text-xs font-semibold uppercase tracking-[0.18em] text-center rounded-[2px]"
            >
              Respond / RSVP
            </button>
          </div>
        )}
      </header>
    </>
  );
};
