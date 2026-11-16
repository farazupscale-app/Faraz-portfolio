'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ArrowLeft,
  Clock,
  MapPin,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MagneticButton from '../../components/MagneticButton';
import { GithubIcon, LinkedinIcon } from '../../components/Icons';
import { portfolioData } from '../../data/portfolioData';

export default function ContactPage() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'error'
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      return;
    }

    setErrors({});
    setStatus('success');

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#171717', '#B9F36A', '#ffffff'],
      });
    } catch {
      // ignore
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#F3F0E8] text-[#171717] selection:bg-[#B9F36A] selection:text-[#171717]">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back Navigation */}
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider text-[#777777] hover:text-[#171717] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO HOME</span>
            </Link>
            <span className="text-[#E2DDD2]">•</span>
            <span className="text-xs font-mono font-bold tracking-wider text-[#171717]">
              CONTACT
            </span>
          </div>

          {/* Section Heading & Subtitle */}
          <div className="max-w-4xl mb-14 sm:mb-18 pb-8 border-b border-[#E2DDD2]">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#171717]" />
              <span className="text-xs sm:text-sm font-mono tracking-widest uppercase font-bold text-[#777777]">
                06 / GET IN TOUCH
              </span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.04] text-[#171717]">
              HAVE AN IDEA?<br />
              <span className="inline-block relative">
                <span className="relative z-10 px-2 py-0.5 bg-[#B9F36A] text-[#171717] rounded-xl shadow-[3px_3px_10px_rgba(110,160,30,0.25),-2px_-2px_6px_rgba(255,255,255,0.8)] border border-white/40">
                  LET'S MAKE IT REAL.
                </span>
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#777777] max-w-xl font-normal leading-relaxed">
              Have a project in mind, a frontend inquiry, or want to explore collaboration? Reach out directly or complete the form below.
            </p>
          </div>

          {/* Two-Column Grid: Contact Information & Interactive Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Details & Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct channels card */}
              <div className="p-7 sm:p-8 clay-dark-card rounded-3xl text-[#FFFFFF]">
                <span className="text-xs font-mono text-[#B9F36A] tracking-wider uppercase block mb-2">
                  DIRECT TOUCHPOINTS
                </span>
                <h3 className="font-heading font-bold text-2xl text-[#FFFFFF] mb-5">
                  Let's Connect
                </h3>

                <div className="space-y-3.5">
                  {/* Email */}
                  <div className="flex items-center justify-between p-3.5 bg-[#171717] rounded-xl border border-white/5 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),inset_-1px_-1px_2px_rgba(255,255,255,0.06)]">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <Mail className="w-4 h-4 text-[#B9F36A] shrink-0" />
                      <span className="text-xs sm:text-sm font-mono truncate text-[#ECE8DF]">
                        {personal.email}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="p-1.5 text-[#B9F36A] hover:text-white transition-colors cursor-pointer"
                      title="Copy email to clipboard"
                      aria-label="Copy email"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* GitHub */}
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-[#171717] rounded-xl border border-white/5 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),inset_-1px_-1px_2px_rgba(255,255,255,0.06)] hover:border-[#B9F36A] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <GithubIcon className="w-4 h-4 text-[#B9F36A]" />
                      <span className="text-xs sm:text-sm font-semibold text-[#FFFFFF]">GitHub</span>
                    </div>
                    <span className="text-xs font-mono text-[#777777] group-hover:text-[#B9F36A] transition-colors">
                      @farazkhan-dev ↗
                    </span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-[#171717] rounded-xl border border-white/5 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),inset_-1px_-1px_2px_rgba(255,255,255,0.06)] hover:border-[#B9F36A] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <LinkedinIcon className="w-4 h-4 text-[#B9F36A]" />
                      <span className="text-xs sm:text-sm font-semibold text-[#FFFFFF]">LinkedIn</span>
                    </div>
                    <span className="text-xs font-mono text-[#777777] group-hover:text-[#B9F36A] transition-colors">
                      farazkhan-dev ↗
                    </span>
                  </a>
                </div>
              </div>

              {/* Status & Location Card */}
              <div className="p-6 sm:p-7 clay-card rounded-3xl space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono font-bold uppercase text-[#171717]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B9F36A] shadow-[0_0_3px_rgba(185,243,106,0.8)]" />
                  <span>CURRENT AVAILABILITY</span>
                </div>
                <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                  {personal.availability}. I am actively open to interesting frontend projects, design-to-code implementations, and full-time engineering roles.
                </p>

                <div className="pt-4 border-t border-[#ECE8DF] flex items-center justify-between text-xs text-[#777777] font-mono">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Response: &lt; 24h
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Remote / Global
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form with Soft Inset Inputs */}
            <div className="lg:col-span-7 clay-card p-7 sm:p-10 rounded-3xl">
              <h3 className="font-heading font-extrabold text-2xl text-[#171717] mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#777777] mb-6">
                Fill out the details below. All fields marked with * are required.
              </p>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-[#ECE8DF] border border-white/60 shadow-[inset_2px_2px_5px_rgba(70,60,45,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.9)] rounded-2xl text-center space-y-5"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#B9F36A] border border-white/60 shadow-[2px_2px_8px_rgba(110,160,30,0.3),-2px_-2px_6px_rgba(255,255,255,0.9)] flex items-center justify-center text-[#171717]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-[#171717]">
                    Inquiry Form Validated!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#777777] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your message is prepared. To send it immediately via your preferred mail client, click the button below:
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={`mailto:${personal.email}?subject=${encodeURIComponent(
                        formData.subject
                      )}&body=${encodeURIComponent(
                        `Hi Faraz,\n\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`
                      )}`}
                      className="inline-flex items-center gap-2 px-7 py-3.5 clay-btn-dark text-[#FFFFFF] text-xs font-bold uppercase rounded-xl transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Launch Email Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus('idle');
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-6 py-3.5 clay-btn-white text-[#171717] text-xs font-bold uppercase rounded-xl transition-all cursor-pointer"
                    >
                      Reset Form
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-3 bg-[#ECE8DF] border text-[#171717] text-sm rounded-xl shadow-[inset_2px_2px_5px_rgba(70,60,45,0.09),inset_-2px_-2px_5px_rgba(255,255,255,0.9)] focus:bg-[#F8F6EF] focus:outline-hidden transition-colors ${
                          errors.name ? 'border-red-500' : 'border-white/50'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        className={`w-full px-4 py-3 bg-[#ECE8DF] border text-[#171717] text-sm rounded-xl shadow-[inset_2px_2px_5px_rgba(70,60,45,0.09),inset_-2px_-2px_5px_rgba(255,255,255,0.9)] focus:bg-[#F8F6EF] focus:outline-hidden transition-colors ${
                          errors.email ? 'border-red-500' : 'border-white/50'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Website Development Project / Frontend Scope"
                      className={`w-full px-4 py-3 bg-[#ECE8DF] border text-[#171717] text-sm rounded-xl shadow-[inset_2px_2px_5px_rgba(70,60,45,0.09),inset_-2px_-2px_5px_rgba(255,255,255,0.9)] focus:bg-[#F8F6EF] focus:outline-hidden transition-colors ${
                        errors.subject ? 'border-red-500' : 'border-white/50'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and goals..."
                      className={`w-full px-4 py-3 bg-[#ECE8DF] border text-[#171717] text-sm rounded-xl shadow-[inset_2px_2px_5px_rgba(70,60,45,0.09),inset_-2px_-2px_5px_rgba(255,255,255,0.9)] focus:bg-[#F8F6EF] focus:outline-hidden transition-colors ${
                        errors.message ? 'border-red-500' : 'border-white/50'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit button with Tactile Dark Clay */}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 clay-btn-dark text-[#FFFFFF] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl focus:outline-hidden cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
