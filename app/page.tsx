'use client';

import React from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Download, ArrowUpRight, Zap, Shield, Cpu, BarChart3, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-on-surface antialiased overflow-x-hidden selection:bg-primary selection:text-on-primary">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-48 pb-24 px-6 overflow-hidden flex flex-col items-center text-center">
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-12"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Built for HeyGen Hackathon
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-[5.5rem] font-black tracking-[-0.04em] mb-8 leading-[1.0] font-headline max-w-4xl"
        >
          Turn Screen Records <br /> into <span className="text-primary italic">Viral</span> Product Demos
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-on-surface-variant text-lg md:text-xl font-medium max-w-2xl mb-12 leading-relaxed"
        >
          Rendr uses HyperFrames AI Video Generation to automatically transform your raw screen recordings into polished, high-converting product demonstrations.
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link 
            href="/download"
            className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 primary-glow hover:opacity-90 active:scale-95 transition-all mb-24"
          >
            <Download size={18} />
            Download Rendr Desktop
          </Link>
        </motion.div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse duration-[10s]" />
      </header>

      {/* Grid Section */}
      <section className="px-6 pb-48 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Feature 1: HyperFrames (Large Top Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 group relative h-[500px] md:h-[600px] bg-surface-container rounded-[2.5rem] overflow-hidden border border-outline-variant/10 hover:border-primary/20 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
            <div className="relative z-10 p-12 h-full flex flex-col justify-end">
              <div className="max-w-md">
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                  HyperFrames AI <ArrowUpRight className="text-on-surface-variant group-hover:text-primary transition-colors" />
                </h3>
                <p className="text-on-surface-variant font-medium leading-relaxed">
                  Our core AI engine that understands your UI and generates cinematic camera movements, zooms, and highlights automatically.
                </p>
              </div>
            </div>
            {/* Image Placeholder */}
            <div className="absolute top-12 left-12 right-12 bottom-48 bg-black/40 rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden">
               <span className="text-white/10 font-black uppercase tracking-widest text-sm">HyperFrames Engine Visual</span>
               {/* Decorative elements to look like a UI */}
               <div className="absolute top-4 left-4 right-4 h-8 bg-white/5 rounded-lg flex items-center px-4 gap-2">
                 <div className="w-2 h-2 rounded-full bg-red-500/50" />
                 <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                 <div className="w-2 h-2 rounded-full bg-green-500/50" />
               </div>
            </div>
          </motion.div>

          {/* Feature 2: Rendr Desktop App */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[600px] bg-surface-container rounded-[2.5rem] overflow-hidden border border-outline-variant/10 hover:border-primary/20 transition-colors"
          >
            <div className="relative z-10 p-12 h-full flex flex-col justify-end">
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                Desktop App <ArrowUpRight className="text-on-surface-variant group-hover:text-primary transition-colors" />
              </h3>
              <p className="text-on-surface-variant font-medium leading-relaxed">
                Native screen recording with low overhead. Capture your workflow and let Rendr handle the rest.
              </p>
            </div>
            {/* Image Placeholder */}
            <div className="absolute top-12 left-12 right-12 bottom-48 bg-black/40 rounded-3xl border border-white/5 flex items-center justify-center">
               <span className="text-white/10 font-black uppercase tracking-widest text-sm text-center px-8">Mobile App Mockup Placeholder</span>
            </div>
          </motion.div>

          {/* Feature 3: Agentic Wallet */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[600px] bg-surface-container rounded-[2.5rem] overflow-hidden border border-outline-variant/10 hover:border-primary/20 transition-colors"
          >
            <div className="relative z-10 p-12 h-full flex flex-col justify-end">
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                Extension <ArrowUpRight className="text-on-surface-variant group-hover:text-primary transition-colors" />
              </h3>
              <p className="text-on-surface-variant font-medium leading-relaxed">
                Coming soon. One-click demo generation directly from your web browser.
              </p>
            </div>
            {/* Image Placeholder */}
            <div className="absolute top-12 left-12 right-12 bottom-48 bg-black/40 rounded-3xl border border-white/5 flex items-center justify-center">
               <span className="text-white/10 font-black uppercase tracking-widest text-sm text-center px-8">Agentic Wallet Visual Placeholder</span>
            </div>
          </motion.div>

          {/* Feature 4: Research AI */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[500px] bg-surface-container rounded-[2.5rem] overflow-hidden border border-outline-variant/10 hover:border-primary/20 transition-colors"
          >
            <div className="relative z-10 p-12 h-full flex flex-col justify-end">
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                Research AI <ArrowUpRight className="text-on-surface-variant group-hover:text-primary transition-colors" />
              </h3>
              <p className="text-on-surface-variant font-medium leading-relaxed">
                Deep market insights instantly. Make informed decisions with AI-powered analysis of on-chain data.
              </p>
            </div>
            {/* Image Placeholder */}
            <div className="absolute top-12 left-12 right-12 bottom-48 bg-black/40 rounded-3xl border border-white/5 flex items-center justify-center">
               <BarChart3 className="text-white/5" size={100} />
            </div>
          </motion.div>

          {/* Feature 5: Built for Speed */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[500px] bg-surface-container rounded-[2.5rem] overflow-hidden border border-outline-variant/10 hover:border-primary/20 transition-colors"
          >
            <div className="relative z-10 p-12 h-full flex flex-col justify-end">
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
                Built for Speed <ArrowUpRight className="text-on-surface-variant group-hover:text-primary transition-colors" />
              </h3>
              <p className="text-on-surface-variant font-medium leading-relaxed">
                Lightning fast execution and data retrieval on 0G Ethereum. Zero lag, maximum efficiency.
              </p>
            </div>
            {/* Image Placeholder */}
            <div className="absolute top-12 left-12 right-12 bottom-48 bg-black/40 rounded-3xl border border-white/5 flex items-center justify-center">
               <Zap className="text-white/5" size={100} />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Values Section */}
      <section className="py-48 bg-surface-container-low border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-24">
           <div className="space-y-6">
             <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
               <Shield size={32} />
             </div>
             <h4 className="text-2xl font-black text-white">AI Automation</h4>
             <p className="text-on-surface-variant font-medium leading-relaxed">
               No more manual editing. Rendr identifies key moments in your recording and highlights them for you.
             </p>
           </div>
           <div className="space-y-6">
             <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
               <Cpu size={32} />
             </div>
             <h4 className="text-2xl font-black text-white">AI-First Engine</h4>
             <p className="text-on-surface-variant font-medium leading-relaxed">
               Powered by advanced Large Language Models tailored for the crypto ecosystem, providing real-time alpha.
             </p>
           </div>
           <div className="space-y-6">
             <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
               <Globe size={32} />
             </div>
             <h4 className="text-2xl font-black text-white">0G Native</h4>
             <p className="text-on-surface-variant font-medium leading-relaxed">
               Optimized specifically for the 0G data availability layer, offering unprecedented speed and scalability.
             </p>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}