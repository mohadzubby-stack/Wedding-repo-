import React from 'react';
import { ScreenId } from '../../types.ts';
import { OrnateFrame } from '../OrnateFrame.tsx';
import { Heart, Sparkles } from 'lucide-react';

interface BridalPartyScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const BridalPartyScreen: React.FC<BridalPartyScreenProps> = ({ onNavigate }) => {
  const weddingCourt = [
    {
      role: 'Maid of Honour',
      name: 'Lady Charlotte de Montfort',
      relation: 'Sister of the Bride',
      bio: 'Art historian and conservator at the Louvre. Guardian of childhood secrets, curator of joyous adventures, and Genevieve’s truest confidante since their earliest days in Provence.',
      accent: '#5B1425',
    },
    {
      role: 'Best Man',
      name: 'Captain Julian Hastings',
      relation: 'Brother of the Groom',
      bio: 'Officer in The Royal Dragoon Guards. Lifelong comrade, intrepid sailing partner across the Solent, and keeper of the ceremonial wedding bands.',
      accent: '#1B3B2B',
    },
    {
      role: 'Bridesmaid',
      name: 'Lady Eleanor Vance',
      relation: 'Cousin of the Bride',
      bio: 'Botanist and landscape designer. Guided the floral selections of heritage garden roses and white peonies that adorn the Orangery.',
      accent: '#735C00',
    },
    {
      role: 'Groomsman',
      name: 'Lord Henry Cavendish',
      relation: 'Companion from Eton & Oxford',
      bio: 'Fellow oarsman at Oxford, scholar of Renaissance literature, and companion of countless Highland walking expeditions.',
      accent: '#1B3B2B',
    },
    {
      role: 'Bridesmaid',
      name: 'Mademoiselle Camille de Laurent',
      relation: 'Childhood Friend',
      bio: 'Ballet mistress at the Palais Garnier. Whose graceful presence has illuminated every shared celebration across Europe.',
      accent: '#735C00',
    },
    {
      role: 'Groomsman',
      name: 'Count Arthur von Stauffenberg',
      relation: 'Family Friend',
      bio: 'Architect and patron of the arts, who introduced Alexander and Genevieve at the Bodleian Library exhibition in 2021.',
      accent: '#1B3B2B',
    },
  ];

  const littleCourt = [
    {
      role: 'Flower Girl',
      name: 'Lady Amelia de Montfort',
      note: 'Bestowing garden rose petals along the chapel aisle',
    },
    {
      role: 'Ring Bearer & Page',
      name: 'Master George Hastings',
      note: 'Bearing the velvet cushion of gold heirloom rings',
    },
  ];

  return (
    <div className="min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[880px] mx-auto space-y-16">
        
        {/* Editorial Section Header */}
        <div className="text-center">
          <div className="label-caps text-[#7A7265] tracking-[0.24em] mb-2">
            The Retinue of Honour &amp; Lineage
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1B3B2B] mb-3">
            The Wedding Court
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-[#7A7265] max-w-xl mx-auto">
            Cherished kin and lifelong companions who stand as witnesses and guardians to this sacred matrimonial oath.
          </p>
          <div className="flex items-center justify-center gap-3 pt-3">
            <span className="h-[0.5px] w-14 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">✦</span>
            <span className="h-[0.5px] w-14 bg-[#D4AF37]" />
          </div>
        </div>

        {/* Lead Honor: Maid of Honour & Best Man */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {weddingCourt.slice(0, 2).map((member) => (
            <OrnateFrame key={member.name} variant="card" padding="p-6 sm:p-8">
              <div className="text-center space-y-4">
                
                {/* Arch Archival Silhouette Silhouette Monogram */}
                <div className="w-20 h-24 mx-auto rounded-t-full border border-[#D4AF37] p-1 bg-gradient-to-b from-[#FAF6EE] to-[#F1EDE6] flex items-center justify-center shadow-inner">
                  <div className="w-full h-full rounded-t-full border border-[#D4AF37]/50 flex items-center justify-center">
                    <span className="font-serif italic text-2xl text-[#1B3B2B]">
                      {member.name.split(' ')[1]?.[0] || 'M'}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="label-caps text-[#5B1425]">{member.role}</div>
                  <h3 className="text-2xl font-serif text-[#1B3B2B] mt-1">{member.name}</h3>
                  <div className="font-serif italic text-xs text-[#7A7265] mt-0.5">
                    {member.relation}
                  </div>
                </div>

                <div className="h-[0.5px] w-16 mx-auto bg-[#D4AF37]/40" />

                <p className="text-xs sm:text-sm font-sans text-[#24201D] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </OrnateFrame>
          ))}
        </div>

        {/* Bridesmaids & Groomsmen Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="label-caps text-[#7A7265]">The Attendants</div>
            <h2 className="text-2xl font-serif text-[#1B3B2B] mt-1">Bridesmaids &amp; Groomsmen</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {weddingCourt.slice(2).map((member) => (
              <div
                key={member.name}
                className="paper-texture border border-[#D4AF37]/35 rounded-[3px] p-5 flex flex-col justify-between hover:border-[#D4AF37] transition-all"
              >
                <div>
                  <div className="w-12 h-14 mx-auto rounded-t-full border border-[#D4AF37]/60 p-0.5 flex items-center justify-center mb-3">
                    <span className="font-serif text-sm text-[#1B3B2B]">✦</span>
                  </div>
                  <div className="label-caps text-[#5B1425] text-[10px] text-center mb-1">
                    {member.role}
                  </div>
                  <h4 className="font-serif text-base text-[#1B3B2B] text-center mb-1">
                    {member.name}
                  </h4>
                  <div className="font-serif italic text-[11px] text-[#7A7265] text-center mb-3">
                    {member.relation}
                  </div>
                  <p className="text-xs font-sans text-[#7A7265] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flower Girls & Pages */}
        <div className="paper-texture border border-[#D4AF37]/40 rounded-[3px] p-6 sm:p-8 invitation-shadow text-center max-w-xl mx-auto space-y-4">
          <div className="label-caps text-[#7A7265]">Little Lords &amp; Ladies</div>
          <h3 className="font-serif text-xl text-[#1B3B2B]">The Young Heraldic Retinue</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {littleCourt.map((child) => (
              <div key={child.name} className="p-3 bg-[#FAF6EE] border border-[#D4AF37]/30 rounded-[2px]">
                <div className="label-caps text-[#5B1425] text-[10px]">{child.role}</div>
                <div className="font-serif text-base text-[#1B3B2B] font-medium mt-0.5">{child.name}</div>
                <div className="font-serif italic text-xs text-[#7A7265] mt-1">{child.note}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
