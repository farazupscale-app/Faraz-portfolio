'use client';

import React from 'react';

// Official Technology SVGs matching the reference screenshot with 1:1 pixel fidelity

function HTML5Logo({ className = 'h-[105px] w-auto' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      aria-label="HTML5"
      role="img"
    >
      {/* Orange shield body */}
      <path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z" />
      <path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076H64z" />
      {/* The 5 numeral */}
      <path
        fill="#EBEBEB"
        d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z"
      />
      <path
        fill="#FFFFFF"
        d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z"
      />
      {/* HTML text on top in crisp white */}
      <path
        fill="#FFFFFF"
        d="M28.034 1.627h5.622v5.556H38.8V1.627h5.623v16.822H38.8v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.591V1.627z"
      />
    </svg>
  );
}

function CSS3Logo({ className = 'h-[105px] w-auto' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      aria-label="CSS3"
      role="img"
    >
      {/* CSS text on top in crisp white */}
      <path
        fill="#FFFFFF"
        d="M89.234 5.856H81.85l7.679 8.333v3.967H73.713v-4.645h7.678l-7.678-8.333V1.207h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967H55.055v-4.645h7.679l-7.679-8.333V1.207h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839H38.471V1.207h13.632v4.839z"
      />
      {/* Blue shield body */}
      <path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z" />
      <path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591H64.001v85.753z" />
      {/* The 3 numeral */}
      <path fill="#FFFFFF" d="M64 66.22h14.738l1.019-11.405H64V43.677h27.929l-.267 2.988-2.737 30.692H64V66.22z" />
      <path
        fill="#EBEBEB"
        d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883H39.641l1.561 17.488 22.814 6.333.052-.015V95.146z"
      />
      <path
        fill="#FFFFFF"
        d="M77.792 76.886L76.45 91.802l-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647H77.792z"
      />
      <path
        fill="#EBEBEB"
        d="M64.039 43.677v11.137H37.136l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138H51.753l-.223-2.503-.508-5.647-.267-2.988H64z"
      />
    </svg>
  );
}

function JavaScriptLogo({ className = 'h-[105px] w-auto' }) {
  return (
    <div className={`relative flex items-center justify-center rounded-[8px] overflow-hidden ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        className="w-full h-full"
        aria-label="JavaScript"
        role="img"
      >
        <path fill="#F7DF1E" d="M1.408 1.408h125.184v125.185H1.408z" />
        <path
          fill="#000000"
          d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
        />
      </svg>
    </div>
  );
}

function ReactLogo({ className = 'h-[105px] w-auto' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      aria-label="React"
      role="img"
    >
      <g fill="#61DAFB">
        <circle cx="64" cy="64" r="11.4" />
        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
      </g>
    </svg>
  );
}

// Four pill row datasets configured with unique starting offsets (Figma, Angular, Premiere Pro, Photoshop removed)
const row1Items = [
  'ReactJS',
  'Next.js',
  'JavaScript',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Node JS',
  'ReactJS',
  'Next.js',
];

const row2Items = [
  'Next.js',
  'JavaScript',
  'Tailwind CSS',
  'ReactJS',
  'Node JS',
  'HTML',
  'CSS',
  'JavaScript',
  'Tailwind CSS',
];

const row3Items = [
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJS',
  'Next.js',
  'Tailwind CSS',
  'Node JS',
  'HTML',
  'CSS',
];

const row4Items = [
  'Tailwind CSS',
  'Node JS',
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJS',
  'Next.js',
  'Tailwind CSS',
  'Node JS',
];

// Technology logos sequence: HTML5, CSS3, JavaScript, React (Angular and Figma removed)
const logoSequence = [
  { id: 'html5-1', Component: HTML5Logo },
  { id: 'css3-1', Component: CSS3Logo },
  { id: 'javascript-1', Component: JavaScriptLogo },
  { id: 'react-1', Component: ReactLogo },
  { id: 'html5-2', Component: HTML5Logo },
  { id: 'css3-2', Component: CSS3Logo },
  { id: 'javascript-2', Component: JavaScriptLogo },
  { id: 'react-2', Component: ReactLogo },
];

export default function InfiniteTechMarquee() {
  return (
    <section
      id="marquee"
      className="relative w-full bg-[#000000] text-[#FFFFFF] overflow-hidden select-none"
      style={{ backgroundColor: '#000000' }}
      aria-label="Infinite Scrolling Technology Showcase"
    >
      {/* Edge Fades: Pure black gradients at left and right boundaries blending seamlessly */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-44 md:w-64 bg-gradient-to-r from-[#000000] via-[#000000]/90 to-transparent z-20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-44 md:w-64 bg-gradient-to-l from-[#000000] via-[#000000]/90 to-transparent z-20"
        aria-hidden="true"
      />

      <div className="w-full mx-auto pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24">
        {/* 1. Large Centered Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 px-4">
          <h2
            className="text-2xl sm:text-3xl md:text-[44px] uppercase text-[#FFFFFF] leading-tight"
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontWeight: 900,
              letterSpacing: '1px',
            }}
          >
            INFINITE SCROLLING
          </h2>
        </div>

        {/* 2. Four Horizontal Rows of Technology Text Pills */}
        <div className="space-y-3.5 sm:space-y-4 md:space-y-4 w-full overflow-hidden">
          {/* Row 1: Move from right to left */}
          <div className="w-full overflow-hidden">
            <div
              className="animate-marquee-left hover:[animation-play-state:paused]"
              style={{ '--marquee-duration': '32s' }}
            >
              {/* Sequence A */}
              <div className="flex items-center gap-3.5 sm:gap-4 md:gap-4 pr-3.5 sm:pr-4 md:pr-4 shrink-0">
                {row1Items.map((text, idx) => (
                  <span
                    key={`r1-a-${idx}`}
                    className="inline-flex items-center justify-center h-[38px] sm:h-[44px] md:h-[45px] px-3.5 sm:px-4.5 md:px-5 bg-[#202020] text-[#FFFFFF] text-xs sm:text-[16px] md:text-[18px] font-semibold tracking-[1.5px] rounded-[10px] whitespace-nowrap shadow-[3px_3px_8px_rgba(0,0,0,0.6),-2px_-2px_6px_rgba(255,255,255,0.06),inset_1px_1px_1px_rgba(255,255,255,0.12)] border border-white/5"
                  >
                    {text}
                  </span>
                ))}
              </div>
              {/* Sequence B (identical duplication for seamless infinite loop) */}
              <div
                className="flex items-center gap-3.5 sm:gap-4 md:gap-4 pr-3.5 sm:pr-4 md:pr-4 shrink-0"
                aria-hidden="true"
              >
                {row1Items.map((text, idx) => (
                  <span
                    key={`r1-b-${idx}`}
                    className="inline-flex items-center justify-center h-[38px] sm:h-[44px] md:h-[45px] px-3.5 sm:px-4.5 md:px-5 bg-[#202020] text-[#FFFFFF] text-xs sm:text-[16px] md:text-[18px] font-semibold tracking-[1.5px] rounded-[10px] whitespace-nowrap shadow-[3px_3px_8px_rgba(0,0,0,0.6),-2px_-2px_6px_rgba(255,255,255,0.06),inset_1px_1px_1px_rgba(255,255,255,0.12)] border border-white/5"
                  >
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Move from left to right */}
          <div className="w-full overflow-hidden">
            <div
              className="animate-marquee-right hover:[animation-play-state:paused]"
              style={{ '--marquee-duration': '38s' }}
            >
              {/* Sequence A */}
              <div className="flex items-center gap-3.5 sm:gap-4 md:gap-4 pr-3.5 sm:pr-4 md:pr-4 shrink-0">
                {row2Items.map((text, idx) => (
                  <span
                    key={`r2-a-${idx}`}
                    className="inline-flex items-center justify-center h-[38px] sm:h-[44px] md:h-[45px] px-3.5 sm:px-4.5 md:px-5 bg-[#202020] text-[#FFFFFF] text-xs sm:text-[16px] md:text-[18px] font-semibold tracking-[1.5px] rounded-[10px] whitespace-nowrap shadow-[3px_3px_8px_rgba(0,0,0,0.6),-2px_-2px_6px_rgba(255,255,255,0.06),inset_1px_1px_1px_rgba(255,255,255,0.12)] border border-white/5"
                  >
                    {text}
                  </span>
                ))}
              </div>
              {/* Sequence B (identical duplication) */}
              <div
                className="flex items-center gap-3.5 sm:gap-4 md:gap-4 pr-3.5 sm:pr-4 md:pr-4 shrink-0"
                aria-hidden="true"
              >
                {row2Items.map((text, idx) => (
                  <span
                    key={`r2-b-${idx}`}
                    className="inline-flex items-center justify-center h-[38px] sm:h-[44px] md:h-[45px] px-3.5 sm:px-4.5 md:px-5 bg-[#202020] text-[#FFFFFF] text-xs sm:text-[16px] md:text-[18px] font-semibold tracking-[1.5px] rounded-[10px] whitespace-nowrap shadow-[3px_3px_8px_rgba(0,0,0,0.6),-2px_-2px_6px_rgba(255,255,255,0.06),inset_1px_1px_1px_rgba(255,255,255,0.12)] border border-white/5"
                  >
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3: Move from right to left */}
          <div className="w-full overflow-hidden">
            <div
              className="animate-marquee-left hover:[animation-play-state:paused]"
              style={{ '--marquee-duration': '30s' }}
            >
              {/* Sequence A */}
              <div className="flex items-center gap-3.5 sm:gap-4 md:gap-4 pr-3.5 sm:pr-4 md:pr-4 shrink-0">
                {row3Items.map((text, idx) => (
                  <span
                    key={`r3-a-${idx}`}
                    className="inline-flex items-center justify-center h-[38px] sm:h-[44px] md:h-[45px] px-3.5 sm:px-4.5 md:px-5 bg-[#202020] text-[#FFFFFF] text-xs sm:text-[16px] md:text-[18px] font-semibold tracking-[1.5px] rounded-[10px] whitespace-nowrap shadow-[3px_3px_8px_rgba(0,0,0,0.6),-2px_-2px_6px_rgba(255,255,255,0.06),inset_1px_1px_1px_rgba(255,255,255,0.12)] border border-white/5"
                  >
                    {text}
                  </span>
                ))}
              </div>
              {/* Sequence B (identical duplication) */}
              <div
                className="flex items-center gap-3.5 sm:gap-4 md:gap-4 pr-3.5 sm:pr-4 md:pr-4 shrink-0"
                aria-hidden="true"
              >
                {row3Items.map((text, idx) => (
                  <span
                    key={`r3-b-${idx}`}
                    className="inline-flex items-center justify-center h-[38px] sm:h-[44px] md:h-[45px] px-3.5 sm:px-4.5 md:px-5 bg-[#202020] text-[#FFFFFF] text-xs sm:text-[16px] md:text-[18px] font-semibold tracking-[1.5px] rounded-[10px] whitespace-nowrap shadow-[3px_3px_8px_rgba(0,0,0,0.6),-2px_-2px_6px_rgba(255,255,255,0.06),inset_1px_1px_1px_rgba(255,255,255,0.12)] border border-white/5"
                  >
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Row 4: Move from left to right */}
          <div className="w-full overflow-hidden">
            <div
              className="animate-marquee-right hover:[animation-play-state:paused]"
              style={{ '--marquee-duration': '34s' }}
            >
              {/* Sequence A */}
              <div className="flex items-center gap-3.5 sm:gap-4 md:gap-4 pr-3.5 sm:pr-4 md:pr-4 shrink-0">
                {row4Items.map((text, idx) => (
                  <span
                    key={`r4-a-${idx}`}
                    className="inline-flex items-center justify-center h-[38px] sm:h-[44px] md:h-[45px] px-3.5 sm:px-4.5 md:px-5 bg-[#202020] text-[#FFFFFF] text-xs sm:text-[16px] md:text-[18px] font-semibold tracking-[1.5px] rounded-[10px] whitespace-nowrap shadow-[3px_3px_8px_rgba(0,0,0,0.6),-2px_-2px_6px_rgba(255,255,255,0.06),inset_1px_1px_1px_rgba(255,255,255,0.12)] border border-white/5"
                  >
                    {text}
                  </span>
                ))}
              </div>
              {/* Sequence B (identical duplication) */}
              <div
                className="flex items-center gap-3.5 sm:gap-4 md:gap-4 pr-3.5 sm:pr-4 md:pr-4 shrink-0"
                aria-hidden="true"
              >
                {row4Items.map((text, idx) => (
                  <span
                    key={`r4-b-${idx}`}
                    className="inline-flex items-center justify-center h-[38px] sm:h-[44px] md:h-[45px] px-3.5 sm:px-4.5 md:px-5 bg-[#202020] text-[#FFFFFF] text-xs sm:text-[16px] md:text-[18px] font-semibold tracking-[1.5px] rounded-[10px] whitespace-nowrap shadow-[3px_3px_8px_rgba(0,0,0,0.6),-2px_-2px_6px_rgba(255,255,255,0.06),inset_1px_1px_1px_rgba(255,255,255,0.12)] border border-white/5"
                  >
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. One Horizontal Row of Large Technology Logos */}
        <div className="mt-12 sm:mt-14 md:mt-16 w-full overflow-hidden">
          <div
            className="animate-marquee-left hover:[animation-play-state:paused]"
            style={{ '--marquee-duration': '28s' }}
          >
            {/* Logo Sequence A */}
            <div className="flex items-center gap-8 sm:gap-11 md:gap-14 pr-8 sm:pr-11 md:pr-14 shrink-0">
              {logoSequence.map((item, idx) => {
                const LogoComponent = item.Component;
                return (
                  <div
                    key={`logo-a-${idx}`}
                    className="flex items-center justify-center shrink-0 h-[70px] sm:h-[90px] md:h-[105px]"
                  >
                    <LogoComponent className="h-[70px] sm:h-[90px] md:h-[105px] w-auto max-w-none" />
                  </div>
                );
              })}
            </div>

            {/* Logo Sequence B (identical duplication for seamless infinite loop) */}
            <div
              className="flex items-center gap-8 sm:gap-11 md:gap-14 pr-8 sm:pr-11 md:pr-14 shrink-0"
              aria-hidden="true"
            >
              {logoSequence.map((item, idx) => {
                const LogoComponent = item.Component;
                return (
                  <div
                    key={`logo-b-${idx}`}
                    className="flex items-center justify-center shrink-0 h-[70px] sm:h-[90px] md:h-[105px]"
                  >
                    <LogoComponent className="h-[70px] sm:h-[90px] md:h-[105px] w-auto max-w-none" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
