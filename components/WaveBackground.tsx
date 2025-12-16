import React from 'react';

export const WaveBackground: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0 V100 H30 Q60 50 30 0 Z"
          fill="url(#gradient)"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#004D40" />
            <stop offset="100%" stopColor="#26C6DA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const SideWave: React.FC = () => {
    return (
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1/4 h-full z-0 overflow-hidden pointer-events-none">
             {/* Simulating the PDF layers */}
             <div className="absolute top-0 left-0 h-full w-full bg-brand-teal transform -skew-x-12 -translate-x-1/2 opacity-90"></div>
             <div className="absolute top-0 left-8 h-full w-full bg-brand-cyan transform -skew-x-12 -translate-x-1/2 opacity-60"></div>
             <div className="absolute top-0 left-16 h-full w-full bg-teal-200 transform -skew-x-12 -translate-x-1/2 opacity-30"></div>
        </div>
    )
}