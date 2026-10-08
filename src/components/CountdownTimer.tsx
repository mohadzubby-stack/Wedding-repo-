import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  // Nuptials: Saturday, October 24, 2026 at 13:00 GMT
  targetDate = new Date('2026-10-24T13:00:00Z'),
  className = '',
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'Hours', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'Minutes', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'Seconds', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <div className={`flex items-center justify-center gap-3 sm:gap-6 ${className}`}>
      {units.map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div className="flex flex-col items-center">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24201D] tabular-nums tracking-tight">
              {unit.value}
            </span>
            <span className="label-caps text-[#7A7265] mt-1 text-[10px] sm:text-[11px]">
              {unit.label}
            </span>
          </div>

          {index < units.length - 1 && (
            <div className="flex flex-col gap-1.5 self-center pb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
