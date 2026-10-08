/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ScreenId, RSVPData } from './types.ts';
import { Navigation } from './components/Navigation.tsx';
import { InvitationSuiteScreen } from './components/screens/InvitationSuiteScreen.tsx';
import { ItineraryScreen } from './components/screens/ItineraryScreen.tsx';
import { RSVPScreen } from './components/screens/RSVPScreen.tsx';
import { EstateConciergeScreen } from './components/screens/EstateConciergeScreen.tsx';
import { BridalPartyScreen } from './components/screens/BridalPartyScreen.tsx';
import { RegistryScreen } from './components/screens/RegistryScreen.tsx';
import { GuestPassScreen } from './components/screens/GuestPassScreen.tsx';
import { HeraldicCrest } from './components/HeraldicCrest.tsx';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('invitation');
  const [rsvpData, setRsvpData] = useState<RSVPData | null>(null);

  // Restore existing RSVP if stored
  useEffect(() => {
    try {
      const stored = localStorage.getItem('royal_heirloom_rsvp');
      if (stored) {
        setRsvpData(JSON.parse(stored));
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleRSVPSubmitted = (data: RSVPData) => {
    setRsvpData(data);
    try {
      localStorage.setItem('royal_heirloom_rsvp', JSON.stringify(data));
    } catch {
      // Ignore
    }
  };

  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#24201D] flex flex-col selection:bg-[#D4AF37]/30 selection:text-[#1B3B2B]">
      
      {/* Top Bar Contract Navigation */}
      <Navigation
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        hasSubmittedRSVP={!!rsvpData && rsvpData.attending === 'accepted'}
      />

      {/* Main Dynamic Viewport Frame */}
      <main className="flex-1">
        {currentScreen === 'invitation' && (
          <InvitationSuiteScreen onNavigate={handleNavigate} />
        )}
        {currentScreen === 'itinerary' && (
          <ItineraryScreen onNavigate={handleNavigate} />
        )}
        {currentScreen === 'rsvp' && (
          <RSVPScreen
            onRSVPSubmitted={handleRSVPSubmitted}
            onNavigate={handleNavigate}
            existingData={rsvpData}
          />
        )}
        {currentScreen === 'estate' && (
          <EstateConciergeScreen onNavigate={handleNavigate} />
        )}
        {currentScreen === 'bridal-party' && (
          <BridalPartyScreen onNavigate={handleNavigate} />
        )}
        {currentScreen === 'registry' && (
          <RegistryScreen onNavigate={handleNavigate} />
        )}
        {currentScreen === 'guest-pass' && (
          <GuestPassScreen
            rsvpData={rsvpData}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Classical Quiet Editorial Footer */}
      <footer className="mt-20 border-t border-[#D4AF37]/30 bg-[#FAF6EE] py-12 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto text-center space-y-6">
          
          <div className="flex justify-center">
            <HeraldicCrest size="sm" showMotto={false} />
          </div>

          <div className="space-y-1">
            <div className="text-xl font-serif text-[#1B3B2B] tracking-wide">
              Lady Genevieve &amp; Lord Alexander
            </div>
            <div className="label-caps text-[#7A7265] tracking-[0.2em]">
              The Nuptial Celebrations · Blenheim Palace · MMXXVI
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#7A7265] pt-2">
            <button
              onClick={() => handleNavigate('invitation')}
              className="hover:text-[#1B3B2B] transition-colors cursor-pointer"
            >
              The Invitation
            </button>
            <span aria-hidden="true" className="text-[#D4AF37]">·</span>
            <button
              onClick={() => handleNavigate('itinerary')}
              className="hover:text-[#1B3B2B] transition-colors cursor-pointer"
            >
              Order of Events
            </button>
            <span aria-hidden="true" className="text-[#D4AF37]">·</span>
            <button
              onClick={() => handleNavigate('rsvp')}
              className="hover:text-[#1B3B2B] transition-colors cursor-pointer"
            >
              Imperial RSVP
            </button>
            <span aria-hidden="true" className="text-[#D4AF37]">·</span>
            <button
              onClick={() => handleNavigate('estate')}
              className="hover:text-[#1B3B2B] transition-colors cursor-pointer"
            >
              Estate Concierge
            </button>
            <span aria-hidden="true" className="text-[#D4AF37]">·</span>
            <button
              onClick={() => handleNavigate('registry')}
              className="hover:text-[#1B3B2B] transition-colors cursor-pointer"
            >
              Golden Registry
            </button>
          </div>

          <div className="text-[11px] font-sans text-[#7A7265]/70 pt-4 border-t border-[#D4AF37]/15">
            Designed in the Royal Heirloom editorial stationery tradition. For bespoke concierge assistance, dispatch word to the household seneschal.
          </div>
        </div>
      </footer>

    </div>
  );
}
