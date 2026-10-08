import React from 'react';
import { RSVPData, ScreenId } from '../../types.ts';
import { HeraldicCrest } from '../HeraldicCrest.tsx';
import { OrnateFrame } from '../OrnateFrame.tsx';
import { WaxSeal } from '../WaxSeal.tsx';
import { Sparkles, Printer, ArrowLeft, QrCode, Shield, CheckCircle } from 'lucide-react';

interface GuestPassScreenProps {
  rsvpData: RSVPData | null;
  onNavigate: (screen: ScreenId) => void;
}

export const GuestPassScreen: React.FC<GuestPassScreenProps> = ({
  rsvpData,
  onNavigate,
}) => {
  const guest = rsvpData || {
    invitationCode: 'BLENHEIM-742',
    primaryGuestName: 'Lord Edward Fitzwilliam',
    email: 'e.fitzwilliam@estate.co.uk',
    attending: 'accepted',
    guestCount: 2,
    guestNames: ['Lord Edward Fitzwilliam', 'Lady Sophia Fitzwilliam'],
    diningCourse: 'venison',
    dietaryNotes: 'None',
    shuttleRequired: true,
    shuttleLocation: 'The Feathers Hotel, Woodstock',
    songDedication: 'Debussy - Clair de Lune',
    personalBlessing: 'May your union be blessed eternally!',
    tableAssignment: 'Tableau d’Honneur — Table IV: The Versailles Garden',
    seatNumber: 'Seats 3 & 4',
    submittedAt: 'October 2026',
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[740px] mx-auto space-y-8">
        
        {/* Navigation back and header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('invitation')}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#7A7265] hover:text-[#1B3B2B] cursor-pointer"
          >
            <ArrowLeft size={13} /> Return to Folio
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1B3B2B]" />
            <span className="label-caps text-[#1B3B2B]">Digital Keepsake Pass</span>
          </div>
        </div>

        {/* The Foil-Stamped Imperial Boarding Pass Card */}
        <div className="relative paper-texture border border-[#D4AF37] rounded-[4px] p-2 invitation-shadow">
          <div 
            className="border border-[#D4AF37]/50 rounded-[2px] p-6 sm:p-10 relative overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #FAF6EE 0%, #F5EEDC 100%)',
            }}
          >
            {/* Top Corner Foil Accents */}
            <div className="absolute top-2 left-2 text-[#D4AF37] opacity-60 text-xs">✦</div>
            <div className="absolute top-2 right-2 text-[#D4AF37] opacity-60 text-xs">✦</div>
            <div className="absolute bottom-2 left-2 text-[#D4AF37] opacity-60 text-xs">✦</div>
            <div className="absolute bottom-2 right-2 text-[#D4AF37] opacity-60 text-xs">✦</div>

            {/* Pass Header */}
            <div className="text-center border-b border-[#D4AF37]/30 pb-6 mb-6">
              <HeraldicCrest size="sm" showMotto={false} />
              <div className="label-caps text-[#5B1425] tracking-[0.26em] mt-2">
                Imperial Nuptial Pass &amp; Table Allocation
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif text-[#1B3B2B] mt-1">
                Lady Genevieve &amp; Lord Alexander
              </h1>
              <div className="font-serif italic text-xs text-[#7A7265] mt-0.5">
                Blenheim Palace · Saturday, 24 October 2026
              </div>
            </div>

            {/* Guest & Seat Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-[#D4AF37]/30">
              
              <div className="space-y-4">
                <div>
                  <div className="label-caps text-[#7A7265] text-[10px]">Honoured Guest</div>
                  <div className="font-serif text-xl text-[#1B3B2B] font-medium mt-0.5">
                    {guest.primaryGuestName}
                  </div>
                  {guest.guestNames.length > 1 && (
                    <div className="font-serif italic text-xs text-[#7A7265] mt-0.5">
                      Accompanying: {guest.guestNames.slice(1).join(', ')}
                    </div>
                  )}
                </div>

                <div>
                  <div className="label-caps text-[#7A7265] text-[10px]">Ceremonial Attendance</div>
                  <div className="text-xs font-semibold text-[#1B3B2B] uppercase tracking-wider flex items-center gap-1.5 mt-0.5">
                    <CheckCircle size={13} className="text-[#1B3B2B]" />
                    Party of {guest.guestCount} · Confirmed
                  </div>
                </div>

                <div>
                  <div className="label-caps text-[#7A7265] text-[10px]">Selected Banquet Course</div>
                  <div className="text-xs font-serif italic text-[#24201D] capitalize mt-0.5">
                    {guest.diningCourse} Course
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-[#FAF6EE] border border-[#D4AF37]/60 rounded-[2px] p-3.5 shadow-xs">
                  <div className="label-caps text-[#5B1425] text-[10px]">Assigned Table (Tableau d&apos;Honneur)</div>
                  <div className="font-serif text-lg text-[#1B3B2B] font-semibold mt-0.5">
                    {guest.tableAssignment || 'Table IV: The Versailles Garden'}
                  </div>
                  <div className="font-mono text-xs text-[#7A7265] mt-1">
                    {guest.seatNumber || 'Seat 3 & 4'}
                  </div>
                </div>

                <div>
                  <div className="label-caps text-[#7A7265] text-[10px]">Carriage &amp; Shuttle Access</div>
                  <div className="text-xs text-[#24201D] font-sans mt-0.5">
                    {guest.shuttleRequired ? guest.shuttleLocation : 'Private Valet Arrival (North Court)'}
                  </div>
                </div>

                <div>
                  <div className="label-caps text-[#7A7265] text-[10px]">Gate &amp; Arrival Window</div>
                  <div className="text-xs font-mono text-[#1B3B2B] mt-0.5">
                    Hensington Gate · 12:15 PM — 12:45 PM
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Pass Barcode & Seal Impression */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* Simulated QR Code for swift entry */}
                <div className="w-16 h-16 bg-[#FAF6EE] border border-[#D4AF37] p-1.5 flex items-center justify-center rounded-[2px] shadow-inner">
                  <QrCode size={48} className="text-[#1B3B2B]" />
                </div>
                <div>
                  <div className="label-caps text-[#7A7265] text-[10px]">Invitation Dispatch Code</div>
                  <div className="font-mono text-sm font-semibold text-[#1B3B2B]">
                    {guest.invitationCode}
                  </div>
                  <div className="text-[10px] text-[#7A7265] font-serif italic mt-0.5">
                    Present upon arrival at Marlborough Portico
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <WaxSeal size="sm" showRibbon={false} interactive={false} />
              </div>
            </div>

          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#D4AF37] hover:bg-[#ECC867] text-[#24201D] text-xs font-semibold uppercase tracking-[0.18em] transition-all rounded-[2px] cursor-pointer shadow-sm flex items-center justify-center gap-2"
          >
            <Printer size={14} /> Print / Save Pass
          </button>
          <button
            onClick={() => onNavigate('itinerary')}
            className="w-full sm:w-auto px-6 py-2.5 border border-[#1B3B2B] text-[#1B3B2B] hover:bg-[#1B3B2B]/5 text-xs font-semibold uppercase tracking-[0.18em] transition-all rounded-[2px] cursor-pointer"
          >
            Review Schedule
          </button>
        </div>

      </div>
    </div>
  );
};
