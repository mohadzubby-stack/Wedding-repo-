import React, { useState } from 'react';
import { ItineraryItem, ScreenId } from '../../types.ts';
import { Calendar, Clock, MapPin, Music, Car, ChevronDown, ChevronUp, Download, Sparkles } from 'lucide-react';

interface ItineraryScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const ItineraryScreen: React.FC<ItineraryScreenProps> = ({ onNavigate }) => {
  const [expandedId, setExpandedId] = useState<string | null>('ceremony');

  const events: ItineraryItem[] = [
    {
      id: 'welcome',
      day: 'Friday',
      date: 'October 23, 2026',
      time: '6:30 PM — 10:00 PM',
      title: 'The Twilight Welcome Soirée',
      subtitle: 'Champagne, Caviar & Classical Guitar amongst the Fountains',
      location: 'The Italian Water Terraces',
      venueDetails: 'Overlooking the cascading lake fountains and baroque stone balustrades. Torches and candlelit braziers will illuminate the terraces.',
      dressCode: 'Black Tie Optional',
      dressDescription: 'Gentlemen in dark dinner jackets or tailored suits; Ladies in floor-length or elevated cocktail dresses with warm cashmere wraps.',
      music: 'Oxford Chamber Guitar Duo & Spanish Cello',
      transportNote: 'Executive coaches depart The Randolph Hotel (Oxford) at 17:45 and The Feathers (Woodstock) at 18:00.',
      mapCoordinates: '51.8419° N, 1.3614° W',
    },
    {
      id: 'arrival',
      day: 'Saturday',
      date: 'October 24, 2026',
      time: '12:15 PM — 12:45 PM',
      title: 'Prelude & Guest Arrival',
      subtitle: 'Assembly under the Great West Portico',
      location: 'The Great West Portico & Chapel Anteroom',
      venueDetails: 'Guests are received by heraldic ushers. Warm spiced cider and vintage elderflower cordials offered upon arrival.',
      dressCode: 'White Tie & Morning Dress',
      dressDescription: 'Traditional morning coat or full military mess dress; Ladies in formal day dresses with millinery / hats.',
      music: 'Choral Carillon & Baroque Trumpet Fanfare',
      transportNote: 'Private carriage arrivals access via the Hensington Gate. Valet parking provided at the North Court.',
      mapCoordinates: '51.8414° N, 1.3608° W',
    },
    {
      id: 'ceremony',
      day: 'Saturday',
      date: 'October 24, 2026',
      time: '1:00 PM — 2:30 PM',
      title: 'The Holy Matrimony & Nuptial Blessing',
      subtitle: 'Solemnization of the Montfort & Hastings Union',
      location: 'The Chapel of Marlborough',
      venueDetails: 'Under the historic high vaulted ceilings and sculpted marble monuments of the Duke of Marlborough. Procession begins strictly at 13:00.',
      dressCode: 'White Tie & Morning Dress',
      dressDescription: 'White tie or formal morning dress. Shoulders draped in the chapel.',
      music: 'The Choir of Christ Church Cathedral & Grand Pipe Organ',
      transportNote: 'Direct internal access to the Rose Colonnade immediately following the benediction.',
      mapCoordinates: '51.8418° N, 1.3612° W',
    },
    {
      id: 'reception',
      day: 'Saturday',
      date: 'October 24, 2026',
      time: '3:00 PM — 5:30 PM',
      title: 'Champagne & Rose Colonnade Promenade',
      subtitle: 'Pol Roger Cuvée Sir Winston Churchill & Artisanal Canapés',
      location: 'The Rose Garden & South Lawn Colonnade',
      venueDetails: 'Strolling string quartet, lawn croquet, portraiture by society artists, and oyster shucking pavilion.',
      dressCode: 'Formal Afternoon Attire',
      dressDescription: 'Transitioning into the evening festivities.',
      music: 'St. James String Quartet performing classical waltzes and romance airs',
      transportNote: 'Golf carts available for guests requesting mobility assistance throughout the garden grounds.',
      mapCoordinates: '51.8407° N, 1.3625° W',
    },
    {
      id: 'banquet',
      day: 'Saturday',
      date: 'October 24, 2026',
      time: '6:00 PM — 9:30 PM',
      title: 'The Royal Banquet & Grand State Toasts',
      subtitle: 'A Five-Course Gastronomic Feast & Heirloom Cellar Vintages',
      location: 'The Long Library & Saloon State Rooms',
      venueDetails: 'Surrounded by 10,000 historic leather-bound volumes under 18th-century gilded barrel ceilings. Candlelight banquet tables.',
      dressCode: 'White Tie & Evening Gown',
      dressDescription: 'White tie with decorations or full formal evening tails. Ladies in floor-length gowns and heirloom jewellery / tiaras.',
      music: 'Symphony Ensemble & Grand Piano Concerto',
      transportNote: 'Dedicated table ushers will escort guests from the champagne salon.',
      mapCoordinates: '51.8416° N, 1.3610° W',
    },
    {
      id: 'revelry',
      day: 'Saturday',
      date: 'October 24, 2026',
      time: '9:30 PM — 2:00 AM',
      title: 'The Imperial Ball & Fireworks over the Lake',
      subtitle: 'First Waltz, 12-Piece Big Band & Midnight Fireworks',
      location: 'The Orangery Ballroom & Great Courtyard',
      venueDetails: 'The historic glass Orangery transformed into an enchanted starlit ballroom. Spectacular fireworks display at 22:30.',
      dressCode: 'White Tie & Tiara',
      dressDescription: 'Dancing slippers provided for ladies.',
      music: 'The London Imperial 12-Piece Swing & Jazz Orchestra, followed by late-night vinyl lounge',
      transportNote: 'Continuous private shuttle service every 20 minutes returning to partner hotels until 02:30.',
      mapCoordinates: '51.8423° N, 1.3605° W',
    },
    {
      id: 'brunch',
      day: 'Sunday',
      date: 'October 25, 2026',
      time: '11:00 AM — 2:30 PM',
      title: 'The Farewell Rose Garden Brunch',
      subtitle: 'Artisanal Viennoiserie, Pressed Juices & Mimosa Bar',
      location: 'The Sunken Garden Pavilion',
      venueDetails: 'A relaxed morning gathering to exchange parting embraces and cherish wedding memories before journeys home.',
      dressCode: 'Garden Party Chic',
      dressDescription: 'Tailored knitwear, linen jackets, effortless floral dresses.',
      music: 'Acoustic Harp & French Chanson Quintet',
      transportNote: 'Luggage concierge service provided; direct transfers to Oxford Parkway Station and Heathrow Airport.',
      mapCoordinates: '51.8402° N, 1.3630° W',
    },
  ];

  const handleDownloadCalendar = (event: ItineraryItem) => {
    // Generate .ics calendar file
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Royal Heirloom//Lady Genevieve & Lord Alexander Wedding//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:${event.title} - Montfort & Hastings Wedding
DESCRIPTION:${event.subtitle}\\nDress Code: ${event.dressCode}\\nVenue: ${event.location}
LOCATION:${event.location}, Blenheim Palace, Woodstock, Oxfordshire
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.id}-montfort-hastings.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[860px] mx-auto">
        
        {/* Editorial Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="label-caps text-[#7A7265] tracking-[0.24em] mb-3">
            The Nuptial Ceremonies &amp; Festivities
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1B3B2B] mb-4">
            Order of Events
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-[#7A7265] max-w-xl mx-auto">
            A three-day chronicle of sacred matrimony, storied feasts, and midnight celebration across the historic estate.
          </p>
          <div className="flex items-center justify-center gap-3 pt-4">
            <span className="h-[0.5px] w-16 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">✦</span>
            <span className="h-[0.5px] w-16 bg-[#D4AF37]" />
          </div>
        </div>

        {/* The Vertical Central Gold Thread Timeline */}
        <div className="relative">
          {/* Central Gold Thread Line */}
          <div 
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[1px] transform sm:-translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, transparent, #D4AF37 10%, #D4AF37 90%, transparent)',
            }}
          />

          <div className="space-y-10 sm:space-y-12">
            {events.map((event, idx) => {
              const isEven = idx % 2 === 0;
              const isExpanded = expandedId === event.id;

              return (
                <div
                  key={event.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Central Botanical Node */}
                  <div 
                    className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center"
                    style={{ top: '24px' }}
                  >
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : event.id)}
                      className="w-8 h-8 rounded-full bg-[#FAF6EE] border border-[#D4AF37] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                      aria-label={`Toggle details for ${event.title}`}
                    >
                      <div className="w-3.5 h-3.5 rounded-full bg-[#1B3B2B] flex items-center justify-center">
                        <span className="text-[8px] text-[#D4AF37]">✦</span>
                      </div>
                    </button>
                  </div>

                  {/* Empty spacer on opposite side for desktop 50/50 balance */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div 
                      className={`paper-texture rounded-[3px] border transition-all duration-300 invitation-shadow ${
                        isExpanded
                          ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]/30'
                          : 'border-[#D4AF37]/35 hover:border-[#D4AF37]/80'
                      }`}
                    >
                      {/* Card Header */}
                      <div 
                        className="p-5 sm:p-6 cursor-pointer select-none"
                        onClick={() => setExpandedId(isExpanded ? null : event.id)}
                      >
                        {/* Day and Date Eyebrow */}
                        <div className="flex items-center justify-between gap-2 text-xs text-[#7A7265] mb-2">
                          <span className="label-caps text-[#5B1425] font-semibold">
                            {event.day} · {event.date}
                          </span>
                          <span className="flex items-center gap-1 font-mono text-[11px] text-[#7A7265]">
                            <Clock size={12} className="text-[#D4AF37]" /> {event.time}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-serif text-[#1B3B2B] mb-1.5 leading-snug">
                          {event.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="font-serif italic text-sm text-[#7A7265] mb-4">
                          {event.subtitle}
                        </p>

                        {/* Venue pill/label & Dress Code Badge */}
                        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#D4AF37]/20">
                          <div className="flex items-center gap-1.5 text-xs text-[#24201D]">
                            <MapPin size={13} className="text-[#D4AF37]" />
                            <span className="font-medium">{event.location}</span>
                          </div>

                          <span className="text-[#D4AF37] text-xs">·</span>

                          {/* Refined Dress Code Tag */}
                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[2px] border border-[#D4AF37]/60 bg-[#FAF6EE] text-[10px] font-sans uppercase tracking-[0.14em] text-[#1B3B2B] font-semibold">
                            <Sparkles size={10} className="text-[#D4AF37]" />
                            {event.dressCode}
                          </div>

                          <div className="ml-auto text-[#7A7265]">
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </div>
                        </div>
                      </div>

                      {/* Expandable Accordion Body */}
                      {isExpanded && (
                        <div className="px-5 pb-6 pt-2 border-t border-[#D4AF37]/20 space-y-4 animate-in fade-in duration-300">
                          
                          {/* Venue Details */}
                          <div>
                            <div className="label-caps text-[#7A7265] mb-1">Atmosphere &amp; Setting</div>
                            <p className="text-xs sm:text-sm font-sans text-[#24201D] leading-relaxed">
                              {event.venueDetails}
                            </p>
                          </div>

                          {/* Sartorial Details */}
                          <div>
                            <div className="label-caps text-[#7A7265] mb-1">Sartorial Guidance</div>
                            <p className="text-xs font-serif italic text-[#1B3B2B] leading-relaxed">
                              {event.dressDescription}
                            </p>
                          </div>

                          {/* Musical Accompaniment */}
                          <div className="flex items-start gap-2 text-xs text-[#24201D]">
                            <Music size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-[#1B3B2B]">Musical Repertoire: </span>
                              <span className="text-[#7A7265]">{event.music}</span>
                            </div>
                          </div>

                          {/* Transportation */}
                          <div className="flex items-start gap-2 text-xs text-[#24201D]">
                            <Car size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-[#1B3B2B]">Transportation: </span>
                              <span className="text-[#7A7265]">{event.transportNote}</span>
                            </div>
                          </div>

                          {/* Action Button: Download Calendar Event */}
                          <div className="pt-2 flex items-center justify-between">
                            <span className="text-[11px] font-mono text-[#7A7265]">
                              GPS: {event.mapCoordinates}
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDownloadCalendar(event);
                              }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#D4AF37]/50 hover:border-[#D4AF37] bg-[#FAF6EE] text-[11px] font-sans uppercase tracking-[0.12em] text-[#1B3B2B] hover:text-[#735C00] transition-colors rounded-[2px] cursor-pointer"
                            >
                              <Download size={12} />
                              Add to Calendar
                            </button>
                          </div>

                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Call to Action for RSVP */}
        <div className="mt-16 text-center paper-texture border border-[#D4AF37]/40 p-8 rounded-[3px] invitation-shadow">
          <h3 className="font-serif text-2xl text-[#1B3B2B] mb-2">
            Will You Grace Us with Your Presence?
          </h3>
          <p className="font-serif italic text-sm text-[#7A7265] mb-6 max-w-md mx-auto">
            Kindly confirm attendance for these celebratory days so our seneschal may prepare your personalized table setting.
          </p>
          <button
            onClick={() => onNavigate('rsvp')}
            className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#ECC867] text-[#24201D] text-xs font-semibold uppercase tracking-[0.18em] transition-all rounded-[2px] shadow-sm cursor-pointer"
          >
            Submit Formal RSVP
          </button>
        </div>

      </div>
    </div>
  );
};
