'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { easeCustom, fadeUp, staggerContainer, staggerItem } from '../utils/animations';

export const defaultFaqData = [
  {
    number: '01',
    question: 'WHAT SERVICES DO YOU OFFER?',
    answer:
      'I build modern, responsive and user-friendly websites using React, Next.js, JavaScript, HTML, CSS and Tailwind CSS. My focus is on creating clean interfaces and smooth user experiences.',
  },
  {
    number: '02',
    question: 'WHAT IS YOUR TYPICAL DEVELOPMENT PROCESS?',
    answer:
      'I start by understanding the project requirements, then plan the structure and design, develop the website, test responsiveness and functionality, and prepare the final result.',
  },
  {
    number: '03',
    question: 'WHICH TECHNOLOGIES DO YOU WORK WITH?',
    answer:
      'My primary technologies include React, Next.js, JavaScript, HTML, CSS and Tailwind CSS. I also work with Git and GitHub for development and version control.',
  },
  {
    number: '04',
    question: 'WILL MY WEBSITE WORK ON MOBILE DEVICES?',
    answer:
      'Yes. I focus on responsive layouts that adapt to desktops, tablets and mobile devices, with attention to readability, navigation and usability.',
  },
  {
    number: '05',
    question: 'HOW CAN I CONTACT YOU FOR A PROJECT?',
    answer:
      'You can contact me through the contact form, email or social media links available on this portfolio. Share your project idea and requirements, and we can discuss the next steps.',
  },
];

export default function FAQ({ faqs = defaultFaqData }) {
  // Single-open accordion state: only one answer open at a time
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[#F3F0E8] py-20 sm:py-28 md:py-32 border-b border-[#E2DDD2] overflow-hidden"
    >
      {/* Subtle light-grey architectural grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, #E2DDD2 1px, transparent 1px), linear-gradient(to bottom, #E2DDD2 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Subtle oversized low-opacity decorative FAQ typography watermark */}
      <div
        className="absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2 font-heading font-black text-[140px] sm:text-[220px] md:text-[300px] text-[#171717]/[0.025] select-none pointer-events-none tracking-tighter leading-none"
        aria-hidden="true"
      >
        FAQ
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN — 40% WIDTH (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65, ease: easeCustom }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            {/* Small orange indicator: ● FAQ with clay tactility */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ED6B38] shadow-[1px_1px_3px_rgba(237,107,56,0.4),-1px_-1px_2px_rgba(255,255,255,0.8),inset_0.5px_0.5px_1px_rgba(255,255,255,0.6)]" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-[#171717]">
                FAQ
              </span>
            </div>

            {/* Large heading on two lines */}
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-[52px] leading-[1.02] tracking-tight uppercase">
              <span className="block text-[#171717]">FREQUENT</span>
              <span className="block text-[#98A2B3]">QUESTIONS.</span>
            </h2>

            {/* Description underneath */}
            <p className="mt-6 text-xs sm:text-[14px] uppercase font-mono sm:font-sans font-medium text-[#98A2B3] tracking-[1px] leading-relaxed max-w-[400px]">
              COMMON QUESTIONS REGARDING PROJECT TIMELINES, TECHNOLOGY STACK, DELIVERABLES, AND CLIENT COLLABORATION.
            </p>
          </motion.div>

          {/* RIGHT COLUMN — 60% WIDTH (lg:col-span-7) */}
          <motion.div
            variants={staggerContainer(0.08, 0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="lg:col-span-7 border-t border-[#E2DDD2]"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const contentId = `faq-content-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <motion.div
                  key={faq.number}
                  variants={staggerItem}
                  className="border-b border-[#E2DDD2] transition-colors"
                >
                  {/* Accordion Header / Question Trigger */}
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full flex items-center justify-between text-left py-6 sm:py-7 group focus:outline-hidden cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-3.5 sm:gap-5 pr-4">
                      {/* Number: 01 to 05 */}
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#777777] group-hover:text-[#171717] transition-colors mt-0.5 sm:mt-0 shrink-0">
                        {faq.number}.
                      </span>

                      {/* Question Text */}
                      <span className="font-heading font-black text-base sm:text-lg lg:text-[18px] tracking-wide text-[#171717] uppercase leading-snug group-hover:text-black transition-colors">
                        {faq.question}
                      </span>
                    </div>

                    {/* Circular Plus Icon Button on the Far Right (Tactile Clay styling) */}
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/60 flex items-center justify-center shrink-0 ml-3 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#B9F36A] text-[#171717] shadow-[inset_2px_2px_4px_rgba(90,140,20,0.35),inset_-2px_-2px_4px_rgba(255,255,255,0.7)]'
                          : 'bg-[#F8F6EF] text-[#171717] shadow-[3px_3px_8px_rgba(70,60,45,0.1),-3px_-3px_8px_rgba(255,255,255,0.95)] group-hover:bg-[#ECE8DF]'
                      }`}
                      aria-hidden="true"
                    >
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: easeCustom }}
                      >
                        <Plus className="w-4 h-4 stroke-[2.2]" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Accordion Expandable Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={contentId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                          transition: {
                            height: { duration: 0.35, ease: easeCustom },
                            opacity: { duration: 0.25, delay: 0.08 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3, ease: easeCustom },
                            opacity: { duration: 0.15 },
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 sm:pb-7 pl-7 sm:pl-9 pr-4 text-sm sm:text-base text-[#667085] leading-relaxed font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
