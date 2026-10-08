import React, { useState } from 'react';
import { RSVPData, ScreenId } from '../../types.ts';
import { OrnateFrame } from '../OrnateFrame.tsx';
import { WaxSeal } from '../WaxSeal.tsx';
import { playWaxSealClick, playHarpArpeggio } from '../../utils/audio.ts';
import { Check, Sparkles, Utensils, Car, Music, Heart, ArrowRight } from 'lucide-react';

interface RSVPScreenProps {
  onRSVPSubmitted: (data: RSVPData) => void;
  onNavigate: (screen: ScreenId) => void;
  existingData?: RSVPData | null;
}

const DINING_COURSES = [
  {
    id: 'venison',
    title: 'Herb-Crusted Venison Loin',
    subtext: 'Blenheim parkland venison, truffled dauphinoise, heirloom baby heritage carrots & blackberry jus',
    dietary: 'Game & Gluten-Free',
  },
  {
    id: 'turbot',
    title: 'Wild Line-Caught Turbot',
    subtext: 'Steamed turbot in champagne & caviar velouté, sea samphire, saffron potato fondant',
    dietary: 'Pescatarian',
  },
  {
    id: 'risotto',
    title: 'Heritage Truffle Risotto',
    subtext: 'Acquerello carnaroli rice, shaved Norcia winter truffles, morel mushrooms & 36-month Reggiano',
    dietary: 'Vegetarian',
  },
  {
    id: 'confit',
    title: 'Artisanal Woodland Confit',
    subtext: 'Braised king oyster mushrooms, roasted chestnuts, parsnip silk & port reduction',
    dietary: 'Plant-Based Vegan',
  },
];

export const RSVPScreen: React.FC<RSVPScreenProps> = ({
  onRSVPSubmitted,
  onNavigate,
  existingData,
}) => {
  const [invitationCode, setInvitationCode] = useState(existingData?.invitationCode || 'BLENHEIM-742');
  const [primaryGuestName, setPrimaryGuestName] = useState(
    existingData?.primaryGuestName || 'Lord Edward Fitzwilliam'
  );
  const [email, setEmail] = useState(existingData?.email || 'e.fitzwilliam@estate.co.uk');
  const [attending, setAttending] = useState<'accepted' | 'declined' | null>(
    existingData?.attending || null
  );
  const [guestCount, setGuestCount] = useState<number>(existingData?.guestCount || 2);
  const [guestNames, setGuestNames] = useState<string[]>(
    existingData?.guestNames || ['Lord Edward Fitzwilliam', 'Lady Sophia Fitzwilliam']
  );
  const [diningCourse, setDiningCourse] = useState(existingData?.diningCourse || 'venison');
  const [dietaryNotes, setDietaryNotes] = useState(existingData?.dietaryNotes || '');
  const [shuttleRequired, setShuttleRequired] = useState(existingData?.shuttleRequired ?? true);
  const [shuttleLocation, setShuttleLocation] = useState(
    existingData?.shuttleLocation || 'The Feathers Hotel, Woodstock'
  );
  const [songDedication, setSongDedication] = useState(
    existingData?.songDedication || 'Debussy - Clair de Lune / Sinatra - Fly Me to the Moon'
  );
  const [personalBlessing, setPersonalBlessing] = useState(
    existingData?.personalBlessing || 'May your days be as radiant as this grand celebration!'
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleGuestCountChange = (count: number) => {
    setGuestCount(count);
    const updated = [...guestNames];
    while (updated.length < count) {
      updated.push(`Guest ${updated.length + 1}`);
    }
    setGuestNames(updated.slice(0, count));
  };

  const handleGuestNameChange = (index: number, val: string) => {
    const updated = [...guestNames];
    updated[index] = val;
    setGuestNames(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!attending) return;

    playWaxSealClick();
    setIsSubmitting(true);

    setTimeout(() => {
      playHarpArpeggio();
      const submission: RSVPData = {
        invitationCode,
        primaryGuestName,
        email,
        attending,
        guestCount: attending === 'accepted' ? guestCount : 0,
        guestNames: attending === 'accepted' ? guestNames : [],
        diningCourse,
        dietaryNotes,
        shuttleRequired,
        shuttleLocation,
        songDedication,
        personalBlessing,
        tableAssignment: 'Tableau d’Honneur — Table IV: The Versailles Garden',
        seatNumber: 'Seat 3 & 4',
        submittedAt: new Date().toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
      };

      onRSVPSubmitted(submission);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[720px] mx-auto animate-in fade-in duration-500">
          <OrnateFrame variant="folio" padding="p-8 sm:p-12 text-center">
            
            <div className="w-16 h-16 mx-auto rounded-full bg-[#1B3B2B] text-[#D4AF37] flex items-center justify-center mb-6 shadow-md">
              <Sparkles size={28} />
            </div>

            <div className="label-caps text-[#5B1425] tracking-[0.24em] mb-2">
              Imperial Confirmation Recorded
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#1B3B2B] mb-3">
              {attending === 'accepted' ? 'We Await Your Gracious Arrival' : 'Your Warm Regrets Are Received'}
            </h2>

            <p className="font-serif italic text-base sm:text-lg text-[#7A7265] max-w-lg mx-auto mb-8">
              {attending === 'accepted'
                ? `The seneschal has recorded ${guestCount} place setting${guestCount > 1 ? 's' : ''} under the name of ${primaryGuestName}. Your royal boarding pass has been officially sealed.`
                : `Thank you for sending your warm felicitations, ${primaryGuestName}. You will be celebrated in our thoughts.`}
            </p>

            {attending === 'accepted' && (
              <div className="bg-[#FAF6EE] border border-[#D4AF37]/50 rounded-[3px] p-6 text-left max-w-md mx-auto mb-8 space-y-2">
                <div className="label-caps text-[#7A7265]">Assigned Table &amp; Salon</div>
                <div className="font-serif text-lg text-[#1B3B2B] font-medium">
                  Tableau d&apos;Honneur — Table IV: The Versailles Garden
                </div>
                <div className="text-xs text-[#7A7265] pt-1">
                  Arrival: Saturday, October 24, 2026 at 12:30 PM · The Great West Portico
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {attending === 'accepted' && (
                <button
                  onClick={() => onNavigate('guest-pass')}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#D4AF37] hover:bg-[#ECC867] text-[#24201D] text-xs font-semibold uppercase tracking-[0.18em] transition-all rounded-[2px] cursor-pointer shadow-sm"
                >
                  View Royal Guest Pass
                </button>
              )}
              <button
                onClick={() => onNavigate('itinerary')}
                className="w-full sm:w-auto px-6 py-2.5 border border-[#1B3B2B] hover:bg-[#1B3B2B]/5 text-[#1B3B2B] text-xs font-semibold uppercase tracking-[0.18em] transition-all rounded-[2px] cursor-pointer"
              >
                Review Itinerary
              </button>
            </div>

          </OrnateFrame>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[760px] mx-auto">
        
        {/* Editorial Section Header */}
        <div className="text-center mb-10">
          <div className="label-caps text-[#7A7265] tracking-[0.24em] mb-2">
            The Formal Response Folio
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1B3B2B] mb-3">
            Imperial RSVP
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-[#7A7265] max-w-lg mx-auto">
            Kindly respond by the First of September, Two Thousand and Twenty-Six, that we may seat you with honour.
          </p>
          <div className="flex items-center justify-center gap-3 pt-3">
            <span className="h-[0.5px] w-14 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">✦</span>
            <span className="h-[0.5px] w-14 bg-[#D4AF37]" />
          </div>
        </div>

        {/* Main Form Frame */}
        <OrnateFrame variant="folio" padding="p-6 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Step 1: Guest Identification */}
            <div className="space-y-6">
              <div className="label-caps text-[#5B1425] border-b border-[#D4AF37]/30 pb-2">
                1. Guest Identification &amp; Seal
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#7A7265] mb-2 font-medium">
                    Honoured Guest Name
                  </label>
                  <input
                    type="text"
                    required
                    value={primaryGuestName}
                    onChange={(e) => setPrimaryGuestName(e.target.value)}
                    placeholder="e.g. Lord Edward Fitzwilliam"
                    className="calligraphy-input w-full py-2 text-lg text-[#24201D] placeholder:italic placeholder:font-serif placeholder:text-[#7A7265]/50"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#7A7265] mb-2 font-medium">
                    Formal Invitation Code
                  </label>
                  <input
                    type="text"
                    required
                    value={invitationCode}
                    onChange={(e) => setInvitationCode(e.target.value)}
                    placeholder="e.g. BLENHEIM-742"
                    className="calligraphy-input w-full py-2 text-lg text-[#24201D] font-mono placeholder:italic placeholder:font-serif placeholder:text-[#7A7265]/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.14em] text-[#7A7265] mb-2 font-medium">
                  Dispatch Email for Confirmation Card
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="lord.fitzwilliam@estate.co.uk"
                  className="calligraphy-input w-full py-2 text-base text-[#24201D] placeholder:italic placeholder:font-serif placeholder:text-[#7A7265]/50"
                />
              </div>
            </div>

            {/* Step 2: Attendance Decision */}
            <div className="space-y-4">
              <div className="label-caps text-[#5B1425] border-b border-[#D4AF37]/30 pb-2">
                2. Your Gracious Decision
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Accept Button / Option */}
                <button
                  type="button"
                  onClick={() => setAttending('accepted')}
                  className={`p-5 rounded-[2px] transition-all duration-200 text-left border cursor-pointer ${
                    attending === 'accepted'
                      ? 'bg-[#D4AF37] border-[#9E7D17] text-[#24201D] shadow-md ring-2 ring-[#D4AF37]/40 scale-[1.01]'
                      : 'bg-[#FAF6EE] border-[#D4AF37]/40 text-[#24201D] hover:border-[#D4AF37]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="label-caps font-semibold">
                      Accepts with Joy
                    </span>
                    {attending === 'accepted' && (
                      <span className="w-5 h-5 rounded-full bg-[#1B3B2B] text-[#D4AF37] flex items-center justify-center">
                        <Check size={13} strokeWidth={3} />
                      </span>
                    )}
                  </div>
                  <div className="font-serif text-lg font-medium">
                    Joyfully Attending
                  </div>
                  <div className="font-serif italic text-xs opacity-80 mt-1">
                    Delighted to join in celebration at Blenheim Palace.
                  </div>
                </button>

                {/* Decline Button / Option */}
                <button
                  type="button"
                  onClick={() => setAttending('declined')}
                  className={`p-5 rounded-[2px] transition-all duration-200 text-left border cursor-pointer ${
                    attending === 'declined'
                      ? 'bg-[#FAF6EE] border-[#1B3B2B] text-[#1B3B2B] shadow-md ring-2 ring-[#1B3B2B]/40'
                      : 'bg-[#FAF6EE] border-[#1B3B2B]/30 text-[#7A7265] hover:border-[#1B3B2B]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="label-caps text-[#7A7265]">
                      Decline with Regret
                    </span>
                    {attending === 'declined' && (
                      <span className="w-5 h-5 rounded-full bg-[#5B1425] text-white flex items-center justify-center">
                        <Check size={13} strokeWidth={3} />
                      </span>
                    )}
                  </div>
                  <div className="font-serif text-lg font-medium text-[#1B3B2B]">
                    Regretfully Unable
                  </div>
                  <div className="font-serif italic text-xs text-[#7A7265] mt-1">
                    Sending heartfelt prayers and warmest blessing from afar.
                  </div>
                </button>

              </div>
            </div>

            {/* Step 3: Banquet & Logistics (Only visible if Accepted) */}
            {attending === 'accepted' && (
              <div className="space-y-8 animate-in fade-in duration-400">
                
                {/* Party Size */}
                <div className="space-y-4">
                  <div className="label-caps text-[#5B1425] border-b border-[#D4AF37]/30 pb-2">
                    3. Honoured Party Size &amp; Names
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs uppercase tracking-[0.14em] text-[#7A7265]">
                      Number of Attendees:
                    </span>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4].map((num) => (
                        <button
                          type="button"
                          key={num}
                          onClick={() => handleGuestCountChange(num)}
                          className={`w-9 h-9 rounded-[2px] border font-serif text-sm transition-all cursor-pointer ${
                            guestCount === num
                              ? 'bg-[#1B3B2B] text-[#FAF6EE] border-[#1B3B2B]'
                              : 'bg-[#FAF6EE] text-[#24201D] border-[#D4AF37]/50 hover:border-[#D4AF37]'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    {guestNames.map((name, idx) => (
                      <div key={idx}>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7A7265] mb-1">
                          Attendee {idx + 1} Name
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => handleGuestNameChange(idx, e.target.value)}
                          className="calligraphy-input w-full py-1.5 text-base text-[#24201D]"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Banquet Dining Selection */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-2">
                    <span className="label-caps text-[#5B1425]">
                      4. Banquet Entrée Selection
                    </span>
                    <span className="text-xs font-serif italic text-[#7A7265]">
                      5-Course State Banquet
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {DINING_COURSES.map((course) => {
                      const isSelected = diningCourse === course.id;
                      return (
                        <div
                          key={course.id}
                          onClick={() => setDiningCourse(course.id)}
                          className={`p-4 rounded-[2px] border transition-all cursor-pointer flex items-start gap-4 ${
                            isSelected
                              ? 'bg-gradient-to-r from-[#FAF6EE] to-[#F7F1DF] border-[#D4AF37] ring-1 ring-[#D4AF37]/40'
                              : 'bg-[#FAF6EE] border-[#D4AF37]/30 hover:border-[#D4AF37]'
                          }`}
                        >
                          {/* Custom Diamond Checkbox */}
                          <div className="pt-1">
                            <div
                              className={`w-4 h-4 border transition-all flex items-center justify-center diamond-check ${
                                isSelected
                                  ? 'border-[#D4AF37] bg-[#1B3B2B]'
                                  : 'border-[#D4AF37]/60 bg-transparent'
                              }`}
                            >
                              {isSelected && (
                                <Check
                                  size={10}
                                  className="text-[#FAF6EE] transform -rotate-45"
                                  strokeWidth={3}
                                />
                              )}
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="font-serif text-base font-medium text-[#1B3B2B]">
                                {course.title}
                              </h4>
                              {/* Thin gold chip */}
                              <span className="px-2 py-0.5 rounded-[2px] border border-[#D4AF37]/50 text-[9px] uppercase tracking-[0.14em] text-[#7A7265] bg-[#FAF6EE]">
                                {course.dietary}
                              </span>
                            </div>
                            <p className="font-serif italic text-xs text-[#7A7265] mt-1 leading-relaxed">
                              {course.subtext}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Dietary Allergies calligraphic note */}
                  <div className="pt-2">
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#7A7265] mb-2 font-medium">
                      Specific Dietary Restrictions or Allergies
                    </label>
                    <input
                      type="text"
                      value={dietaryNotes}
                      onChange={(e) => setDietaryNotes(e.target.value)}
                      placeholder="e.g. Shellfish allergy, celiac gluten-free, no dairy"
                      className="calligraphy-input w-full py-2 text-sm text-[#24201D] placeholder:italic placeholder:font-serif"
                    />
                  </div>
                </div>

                {/* Transportation & Dedication */}
                <div className="space-y-4">
                  <div className="label-caps text-[#5B1425] border-b border-[#D4AF37]/30 pb-2">
                    5. Royal Carriage Transfer &amp; Dedication
                  </div>

                  {/* Shuttle Option */}
                  <div 
                    onClick={() => setShuttleRequired(!shuttleRequired)}
                    className="p-4 rounded-[2px] border border-[#D4AF37]/30 bg-[#FAF6EE] flex items-center gap-4 cursor-pointer select-none hover:border-[#D4AF37]"
                  >
                    <div
                      className={`w-4 h-4 border transition-all flex items-center justify-center diamond-check ${
                        shuttleRequired
                          ? 'border-[#D4AF37] bg-[#1B3B2B]'
                          : 'border-[#D4AF37]/60 bg-transparent'
                      }`}
                    >
                      {shuttleRequired && (
                        <Check
                          size={10}
                          className="text-[#FAF6EE] transform -rotate-45"
                          strokeWidth={3}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 text-sm font-medium text-[#1B3B2B]">
                        <Car size={15} className="text-[#D4AF37]" />
                        <span>Reserve Executive Coach Shuttle</span>
                      </div>
                      <p className="text-xs text-[#7A7265] font-serif italic mt-0.5">
                        Complimentary private coach service between Oxford hotels and Blenheim Palace.
                      </p>
                    </div>
                  </div>

                  {shuttleRequired && (
                    <div className="pl-8 pt-1">
                      <label className="block text-[11px] uppercase tracking-wider text-[#7A7265] mb-1">
                        Select Preferred Pick-up Location
                      </label>
                      <select
                        value={shuttleLocation}
                        onChange={(e) => setShuttleLocation(e.target.value)}
                        className="w-full bg-[#FAF6EE] border border-[#D4AF37]/50 rounded-[2px] p-2 text-sm text-[#24201D] outline-none font-serif"
                      >
                        <option value="The Feathers Hotel, Woodstock">The Feathers Hotel, Woodstock (5 min)</option>
                        <option value="The Randolph Hotel, Oxford">The Randolph Hotel, Oxford Central (25 min)</option>
                        <option value="The Bear Hotel, Woodstock">The Bear Hotel, Woodstock (6 min)</option>
                        <option value="Oxford Parkway Railway Station">Oxford Parkway Railway Station (15 min)</option>
                        <option value="Private Helipad Coordination">Private Helipad Arrival Coordination</option>
                      </select>
                    </div>
                  )}

                  {/* Song Request & Blessing */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.14em] text-[#7A7265] mb-2 font-medium">
                        Song Request for the Imperial Ball
                      </label>
                      <input
                        type="text"
                        value={songDedication}
                        onChange={(e) => setSongDedication(e.target.value)}
                        placeholder="e.g. Can't Help Falling in Love - Elvis Presley"
                        className="calligraphy-input w-full py-1.5 text-sm text-[#24201D] placeholder:italic placeholder:font-serif"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.14em] text-[#7A7265] mb-2 font-medium">
                        Personal Blessing or Note
                      </label>
                      <input
                        type="text"
                        value={personalBlessing}
                        onChange={(e) => setPersonalBlessing(e.target.value)}
                        placeholder="e.g. Wishing you a lifetime of joy!"
                        className="calligraphy-input w-full py-1.5 text-sm text-[#24201D] placeholder:italic placeholder:font-serif"
                      />
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* Submission Section with Royal Burgundy Wax Seal */}
            <div className="pt-8 border-t border-[#D4AF37]/35 text-center flex flex-col items-center">
              
              <div className="label-caps text-[#7A7265] tracking-[0.24em] mb-4">
                Affix Your Royal Seal to Submit
              </div>

              <div className="my-2">
                <WaxSeal
                  onClick={() => {
                    const fakeEvent = { preventDefault: () => {} } as React.FormEvent;
                    handleSubmit(fakeEvent);
                  }}
                  size="md"
                  label={isSubmitting ? 'Affixing Seal...' : 'Press to Dispatch RSVP'}
                  sublabel="Submit your official correspondence"
                  interactive={!isSubmitting && attending !== null}
                />
              </div>

              {!attending && (
                <p className="mt-3 text-xs font-serif italic text-[#5B1425]">
                  Please select whether you accept or decline before dispatching your seal.
                </p>
              )}
            </div>

          </form>
        </OrnateFrame>

      </div>
    </div>
  );
};
