'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { easeCustom } from '../utils/animations';
import MagneticButton from './MagneticButton';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [serverError, setServerError] = useState('');
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please write a message (at least 10 characters).';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverError) {
      setServerError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      return;
    }

    setErrors({});
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setStatus('success');

      // Trigger celebratory confetti burst
      try {
        confetti({
          particleCount: 75,
          spread: 65,
          origin: { y: 0.65 },
          colors: ['#171717', '#B9F36A', '#ffffff'],
        });
      } catch {
        // ignore
      }
    } catch (err) {
      console.error('Submission error:', err);
      setServerError(err.message || 'Something went wrong while sending to Google Sheets. Please try again.');
      setStatus('error');
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative bg-[#B9F36A] text-[#171717] py-14 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Architectural Grid Subtlety */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, #171717 1px, transparent 1px), linear-gradient(to bottom, #171717 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-[2px] bg-[#171717]" />
          <span className="text-xs sm:text-sm font-mono tracking-widest uppercase font-bold text-[#171717]">
            06 / GET IN TOUCH
          </span>
        </motion.div>

        {/* Section Heading & Subtitle */}
        <div className="max-w-4xl mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65, ease: easeCustom }}
            className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-[#171717]"
          >
            HAVE AN IDEA?<br />
            LET'S MAKE IT REAL.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.08, ease: easeCustom }}
            className="mt-3 text-sm sm:text-base font-medium text-[#171717]/85 max-w-xl"
          >
            Have a project in mind or want to collaborate? Reach out directly or send a message below.
          </motion.p>
        </div>

        {/* Grid: Left Contact Info / Right Contact Form with Soft Clay Surfaces */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Contact Links (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65, ease: easeCustom }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="p-6 sm:p-7 clay-dark-card rounded-2xl text-[#FFFFFF] border border-white/5">
              <span className="text-xs font-mono text-[#B9F36A] tracking-wider uppercase block mb-1.5">
                DIRECT CONTACT
              </span>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#FFFFFF] mb-3.5">
                Reach out directly
              </h3>

              <div className="space-y-3">
                {/* Email item */}
                <div className="flex items-center justify-between p-3.5 bg-[#171717] rounded-xl border border-white/5 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),inset_-1px_-1px_2px_rgba(255,255,255,0.06)] hover:border-[#B9F36A]/50 transition-colors">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-[#B9F36A] shrink-0" />
                    <span className="text-xs sm:text-sm font-mono truncate text-[#ECE8DF]">
                      {personal.email}
                    </span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={copyEmail}
                    className="p-1.5 text-[#B9F36A] hover:text-white transition-colors focus:outline-hidden cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </motion.button>
                </div>

                {/* GitHub link */}
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#171717] rounded-xl border border-white/5 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),inset_-1px_-1px_2px_rgba(255,255,255,0.06)] hover:border-[#B9F36A] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[#B9F36A]" />
                    <span className="text-xs sm:text-sm font-semibold text-[#FFFFFF]">GitHub</span>
                  </div>
                  <span className="text-xs font-mono text-[#777777] group-hover:text-[#B9F36A] transition-colors">
                    @farazkhan-dev ↗
                  </span>
                </a>

                {/* LinkedIn link */}
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#171717] rounded-xl border border-white/5 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),inset_-1px_-1px_2px_rgba(255,255,255,0.06)] hover:border-[#B9F36A] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[#B9F36A]" />
                    <span className="text-xs sm:text-sm font-semibold text-[#FFFFFF]">LinkedIn</span>
                  </div>
                  <span className="text-xs font-mono text-[#777777] group-hover:text-[#B9F36A] transition-colors">
                    farazkhan-dev ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-4 sm:p-5 bg-black/10 rounded-2xl border border-black/10 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.08),inset_-1px_-1px_2px_rgba(255,255,255,0.2)]">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#171717] block mb-1">
                CURRENT STATUS
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#171717]/85">
                {personal.availability}. Typical turnaround &lt; 24h.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form with Soft Inset Fields */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.08, ease: easeCustom }}
            className="lg:col-span-7 clay-card rounded-3xl p-6 sm:p-8"
          >
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#171717] mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-[#777777] mb-4">
              Fill in your details below and I'll respond as soon as possible.
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-[#ECE8DF] border border-white/60 shadow-[inset_2px_2px_5px_rgba(70,60,45,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.9)] rounded-2xl text-center space-y-3"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[#B9F36A] border border-white/60 shadow-[2px_2px_6px_rgba(110,160,30,0.3),-2px_-2px_6px_rgba(255,255,255,0.9)] flex items-center justify-center text-[#171717]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-[#171717]">
                  Inquiry Sent Successfully!
                </h4>
                <p className="text-xs text-[#777777] max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your message has been saved to my Google Sheet log and I will respond to <strong>{formData.email}</strong> shortly.
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setServerError('');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-5 py-3 clay-btn-dark text-[#FFFFFF] text-xs font-bold uppercase rounded-xl transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={`mailto:${personal.email}?subject=${encodeURIComponent(
                      formData.subject
                    )}&body=${encodeURIComponent(
                      `Hi Faraz,\n\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`
                    )}`}
                    className="inline-flex items-center gap-2 px-5 py-3 clay-btn-white text-[#171717] text-xs font-bold uppercase rounded-xl transition-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Also Open Email App</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                {serverError && (
                  <div className="p-3 bg-red-100/90 border border-red-300 rounded-xl text-red-700 text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                    <span>{serverError}</span>
                  </div>
                )}
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-wider text-[#171717] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-2.5 bg-[#ECE8DF] border text-[#171717] text-xs sm:text-sm rounded-xl shadow-[inset_2px_2px_5px_rgba(70,60,45,0.09),inset_-2px_-2px_5px_rgba(255,255,255,0.9)] focus:bg-[#F8F6EF] focus:outline-hidden transition-all ${
                        errors.name ? 'border-red-500' : 'border-white/50'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-[#171717] mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-2.5 bg-[#ECE8DF] border text-[#171717] text-xs sm:text-sm rounded-xl shadow-[inset_2px_2px_5px_rgba(70,60,45,0.09),inset_-2px_-2px_5px_rgba(255,255,255,0.9)] focus:bg-[#F8F6EF] focus:outline-hidden transition-all ${
                        errors.email ? 'border-red-500' : 'border-white/50'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-[11px] font-bold uppercase tracking-wider text-[#171717] mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Inquiry / Frontend Scope"
                    className={`w-full px-4 py-2.5 bg-[#ECE8DF] border text-[#171717] text-xs sm:text-sm rounded-xl shadow-[inset_2px_2px_5px_rgba(70,60,45,0.09),inset_-2px_-2px_5px_rgba(255,255,255,0.9)] focus:bg-[#F8F6EF] focus:outline-hidden transition-all ${
                      errors.subject ? 'border-red-500' : 'border-white/50'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-wider text-[#171717] mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className={`w-full px-4 py-2.5 bg-[#ECE8DF] border text-[#171717] text-xs sm:text-sm rounded-xl shadow-[inset_2px_2px_5px_rgba(70,60,45,0.09),inset_-2px_-2px_5px_rgba(255,255,255,0.9)] focus:bg-[#F8F6EF] focus:outline-hidden transition-all ${
                      errors.message ? 'border-red-500' : 'border-white/50'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button with Tactile Raised Dark Clay */}
                <div className="pt-1">
                  <motion.button
                    whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 clay-btn-dark text-[#FFFFFF] text-xs font-bold uppercase tracking-wider rounded-xl focus:outline-hidden cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>RECORDING TO GOOGLE SHEET...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>SUBMIT INQUIRY</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
