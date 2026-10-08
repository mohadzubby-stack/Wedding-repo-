import React, { useState } from 'react';
import { ScreenId, RegistryItem, GuestbookMessage } from '../../types.ts';
import { OrnateFrame } from '../OrnateFrame.tsx';
import { WaxSeal } from '../WaxSeal.tsx';
import { playWaxSealClick, playHarpArpeggio } from '../../utils/audio.ts';
import { Gift, Heart, Send, Sparkles, Feather, Check, Landmark, Compass, Award } from 'lucide-react';

interface RegistryScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const RegistryScreen: React.FC<RegistryScreenProps> = ({ onNavigate }) => {
  const [registryItems, setRegistryItems] = useState<RegistryItem[]>([
    {
      id: 'honeymoon',
      title: 'The Venetian Grand Voyage & Lake Como Villa',
      category: 'honeymoon',
      description: 'Private wooden launch across the Venetian lagoons, sunrise serenades on the Grand Canal, and quiet retreats at a neoclassical villa along Bellagio.',
      goalAmount: 12000,
      contributedAmount: 8400,
      currency: '£',
      iconName: 'Compass',
    },
    {
      id: 'arboretum',
      title: 'Blenheim Ancient Oaks Conservation Trust',
      category: 'endowment',
      description: 'Planting and perpetual stewardship of heritage English oak saplings across the Great High Park, preserving trees that have stood since the Middle Ages.',
      goalAmount: 8000,
      contributedAmount: 6250,
      currency: '£',
      iconName: 'Landmark',
    },
    {
      id: 'bodleian',
      title: 'The Bodleian Library Rare Manuscript Endowment',
      category: 'endowment',
      description: 'Restoration and preservation of 16th-century illuminated botanicals and Renaissance love sonnets at Oxford University, where the couple first crossed paths.',
      goalAmount: 6500,
      contributedAmount: 4800,
      currency: '£',
      iconName: 'Award',
    },
    {
      id: 'heirloom',
      title: 'Villeroy & Boch Gilded Imperial Table Service',
      category: 'heirloom',
      description: 'Fine bone china handcrafted with 24-karat gold filigree edging, bespoke monogrammed crystal stemware, and antique sterling silver flatware.',
      goalAmount: 5000,
      contributedAmount: 3900,
      currency: '£',
      iconName: 'Gift',
    },
  ]);

  const [guestbook, setGuestbook] = useState<GuestbookMessage[]>([
    {
      id: '1',
      author: 'Her Grace, The Duchess of Somerset',
      titleOrLocation: 'Maiden Bradley, Wiltshire',
      message: 'May your union be blessed with the quiet majesty of enduring faith, shared joy, and love as boundless as the Oxfordshire sky.',
      date: '28 July 2026',
    },
    {
      id: '2',
      author: 'Lord & Lady Mountbatten',
      titleOrLocation: 'Broadlands Estate',
      message: 'To Genevieve and Alexander: In honoring legacy, you create a timeless story of your own. We eagerly await raising our glasses under the gilded arches of the Orangery.',
      date: '14 August 2026',
    },
    {
      id: '3',
      author: 'Countess Teresa di San Marco',
      titleOrLocation: 'Venice, Italy',
      message: 'Benvenuti nella vita insieme! Venice awaits your return under the autumn twilight. With all our love and deepest blessings.',
      date: '02 September 2026',
    },
  ]);

  // Gift Modal state
  const [selectedItem, setSelectedItem] = useState<RegistryItem | null>(null);
  const [pledgeAmount, setPledgeAmount] = useState<number>(250);
  const [donorName, setDonorName] = useState('');
  const [donorNote, setDonorNote] = useState('');
  const [giftSuccess, setGiftSuccess] = useState(false);

  // Guestbook Form state
  const [guestAuthor, setGuestAuthor] = useState('');
  const [guestLocation, setGuestLocation] = useState('');
  const [guestMessage, setGuestMessage] = useState('');
  const [guestbookAdded, setGuestbookAdded] = useState(false);

  const handleOpenGiftModal = (item: RegistryItem) => {
    setSelectedItem(item);
    setGiftSuccess(false);
  };

  const handlePledgeGift = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedItem) return;

    playWaxSealClick();
    setTimeout(() => {
      playHarpArpeggio();
      setRegistryItems((prev) =>
        prev.map((i) =>
          i.id === selectedItem.id
            ? { ...i, contributedAmount: i.contributedAmount + pledgeAmount }
            : i
        )
      );
      setGiftSuccess(true);
    }, 400);
  };

  const handleAddGuestbook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestAuthor || !guestMessage) return;

    playWaxSealClick();
    const newEntry: GuestbookMessage = {
      id: String(Date.now()),
      author: guestAuthor,
      titleOrLocation: guestLocation || 'Esteemed Guest',
      message: guestMessage,
      date: 'Today',
    };

    setGuestbook([newEntry, ...guestbook]);
    setGuestAuthor('');
    setGuestLocation('');
    setGuestMessage('');
    setGuestbookAdded(true);
    setTimeout(() => setGuestbookAdded(false), 3000);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[880px] mx-auto space-y-16">
        
        {/* Editorial Section Header */}
        <div className="text-center">
          <div className="label-caps text-[#7A7265] tracking-[0.24em] mb-2">
            Endowments, Shagun &amp; Blessings
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1B3B2B] mb-3">
            The Golden Registry
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-[#7A7265] max-w-xl mx-auto">
            Your presence at Blenheim Palace is our greatest treasure. For those who desire to bestow a gift, we offer curated endowments and voyage memories.
          </p>
          <div className="flex items-center justify-center gap-3 pt-3">
            <span className="h-[0.5px] w-14 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">✦</span>
            <span className="h-[0.5px] w-14 bg-[#D4AF37]" />
          </div>
        </div>

        {/* Dedicated Debossed Gift Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {registryItems.map((item) => {
            const progress = Math.min(100, Math.round((item.contributedAmount / item.goalAmount) * 100));

            return (
              <div
                key={item.id}
                className="paper-texture border border-[#D4AF37]/40 rounded-[3px] p-6 flex flex-col justify-between invitation-shadow hover:border-[#D4AF37] transition-all"
                style={{
                  boxShadow: 'inset 0 1px 3px rgba(91, 20, 37, 0.03)',
                }}
              >
                <div>
                  {/* Debossed Gift Envelope Iconography Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full border border-[#D4AF37]/60 bg-[#FAF6EE] flex items-center justify-center text-[#5B1425] shadow-inner">
                      <Gift size={18} />
                    </div>
                    <span className="label-caps text-[10px] text-[#7A7265]">
                      {item.category === 'honeymoon' ? 'Voyage Memory' : 'Heritage Trust'}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#1B3B2B] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs font-sans text-[#7A7265] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Progress & Gift Action */}
                <div className="space-y-3 pt-4 border-t border-[#D4AF37]/25">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#1B3B2B]">
                      {item.currency}{item.contributedAmount.toLocaleString()} endowed
                    </span>
                    <span className="label-caps text-[#7A7265]">
                      {progress}% Fulfilled
                    </span>
                  </div>

                  {/* Elegant hairline progress rail */}
                  <div className="w-full h-1 bg-[#FAF6EE] border border-[#D4AF37]/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#D4AF37] to-[#1B3B2B] transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <button
                    onClick={() => handleOpenGiftModal(item)}
                    className="w-full mt-2 py-2 bg-[#D4AF37] hover:bg-[#ECC867] text-[#24201D] text-xs font-semibold uppercase tracking-[0.18em] transition-all rounded-[2px] cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <Gift size={13} />
                    Bestow a Contribution
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gift Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 bg-[#24201D]/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-lg animate-in zoom-in-95 duration-200">
              <OrnateFrame variant="folio" padding="p-6 sm:p-10">
                {!giftSuccess ? (
                  <form onSubmit={handlePledgeGift} className="space-y-6">
                    <div className="text-center">
                      <div className="label-caps text-[#5B1425] mb-1">Formal Gift Dedication</div>
                      <h3 className="font-serif text-2xl text-[#1B3B2B]">{selectedItem.title}</h3>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#7A7265] mb-2 font-medium">
                        Select Endowed Amount
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {[100, 250, 500, 1000].map((amt) => (
                          <button
                            type="button"
                            key={amt}
                            onClick={() => setPledgeAmount(amt)}
                            className={`py-2 text-xs font-mono font-medium rounded-[2px] border transition-all cursor-pointer ${
                              pledgeAmount === amt
                                ? 'bg-[#1B3B2B] text-[#FAF6EE] border-[#1B3B2B]'
                                : 'bg-[#FAF6EE] text-[#24201D] border-[#D4AF37]/40 hover:border-[#D4AF37]'
                            }`}
                          >
                            £{amt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#7A7265] mb-1 font-medium">
                        Bestower Name(s)
                      </label>
                      <input
                        type="text"
                        required
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        placeholder="e.g. Lord and Lady Fitzwilliam"
                        className="calligraphy-input w-full py-1 text-sm text-[#24201D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#7A7265] mb-1 font-medium">
                        Personal Gift Note to the Couple
                      </label>
                      <textarea
                        rows={2}
                        value={donorNote}
                        onChange={(e) => setDonorNote(e.target.value)}
                        placeholder="May your journey be filled with sunlight and song..."
                        className="calligraphy-input w-full py-1 text-sm text-[#24201D] placeholder:italic"
                      />
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#D4AF37]/30">
                      <button
                        type="button"
                        onClick={() => setSelectedItem(null)}
                        className="px-4 py-2 text-xs uppercase tracking-wider text-[#7A7265] hover:text-[#1B3B2B] cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 bg-[#D4AF37] hover:bg-[#ECC867] text-[#24201D] text-xs font-semibold uppercase tracking-[0.16em] rounded-[2px] cursor-pointer"
                      >
                        Confirm Endowment (£{pledgeAmount})
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center space-y-4 py-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[#1B3B2B] text-[#D4AF37] flex items-center justify-center">
                      <Sparkles size={22} />
                    </div>
                    <div className="label-caps text-[#5B1425]">Endowment Recorded</div>
                    <h3 className="font-serif text-2xl text-[#1B3B2B]">Thank You Gratefully</h3>
                    <p className="font-serif italic text-sm text-[#7A7265] max-w-sm mx-auto">
                      Your generous endowment of £{pledgeAmount} toward {selectedItem.title} has been recorded in the royal registry ledger.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedItem(null)}
                      className="mt-4 px-6 py-2 bg-[#D4AF37] text-[#24201D] text-xs uppercase tracking-wider font-semibold rounded-[2px] cursor-pointer"
                    >
                      Close Certificate
                    </button>
                  </div>
                )}
              </OrnateFrame>
            </div>
          </div>
        )}

        {/* Digital Fountain Pen Guestbook */}
        <div className="space-y-8">
          <div className="text-center">
            <div className="label-caps text-[#7A7265]">Parchment Folio</div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#1B3B2B] mt-1">
              The Digital Guestbook
            </h2>
            <p className="font-serif italic text-sm text-[#7A7265] mt-1 max-w-md mx-auto">
              Inscribe your fountain pen blessings and well-wishes into the archival memory of the day.
            </p>
          </div>

          {/* Guestbook Submission Form */}
          <OrnateFrame variant="card" padding="p-6 sm:p-8">
            <form onSubmit={handleAddGuestbook} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#7A7265] mb-1">
                    Your Name &amp; Title
                  </label>
                  <input
                    type="text"
                    required
                    value={guestAuthor}
                    onChange={(e) => setGuestAuthor(e.target.value)}
                    placeholder="e.g. Lady Margaux de Valois"
                    className="calligraphy-input w-full py-1 text-sm text-[#24201D]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#7A7265] mb-1">
                    City or Family Seat
                  </label>
                  <input
                    type="text"
                    value={guestLocation}
                    onChange={(e) => setGuestLocation(e.target.value)}
                    placeholder="e.g. Edinburgh, Scotland"
                    className="calligraphy-input w-full py-1 text-sm text-[#24201D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#7A7265] mb-1">
                  Matrimonial Blessing
                </label>
                <textarea
                  rows={3}
                  required
                  value={guestMessage}
                  onChange={(e) => setGuestMessage(e.target.value)}
                  placeholder="Inscribe your blessings to Genevieve and Alexander..."
                  className="calligraphy-input w-full py-1 text-sm text-[#24201D] placeholder:italic"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-serif italic text-[#7A7265]">
                  {guestbookAdded ? 'Your blessing is inscribed in gold!' : 'Inscribed into the permanent folio'}
                </span>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#1B3B2B] hover:bg-[#1B3B2B]/90 text-[#FAF6EE] text-xs font-semibold uppercase tracking-[0.16em] transition-all rounded-[2px] cursor-pointer flex items-center gap-2"
                >
                  <Feather size={13} className="text-[#D4AF37]" />
                  Inscribe Blessing
                </button>
              </div>
            </form>
          </OrnateFrame>

          {/* List of Inscribed Well Wishes */}
          <div className="space-y-4">
            {guestbook.map((entry) => (
              <div
                key={entry.id}
                className="paper-texture border border-[#D4AF37]/35 rounded-[3px] p-5 sm:p-6 invitation-shadow space-y-3"
              >
                <div className="flex items-center justify-between text-xs border-b border-[#D4AF37]/20 pb-2">
                  <div>
                    <span className="font-serif font-medium text-base text-[#1B3B2B]">
                      {entry.author}
                    </span>
                    <span className="text-[#7A7265] font-serif italic ml-2">
                      · {entry.titleOrLocation}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#7A7265]">{entry.date}</span>
                </div>

                <p className="font-serif italic text-sm sm:text-base text-[#24201D] leading-relaxed">
                  &ldquo;{entry.message}&rdquo;
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
