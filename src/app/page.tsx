'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col selection:bg-emerald-500 selection:text-slate-950 scroll-smooth">
      
      {/* NAVBAR */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* LOGO DARI FOLDER PUBLIC */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="StudiKoding Logo" 
              className="w-10 h-10 object-contain rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-1 group-hover:scale-105 transition-transform" 
            />
            <span className="font-bold text-base sm:text-lg tracking-tight">StudiKoding</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#fitur" className="hover:text-emerald-400 transition-colors">Fitur</a>
            <a href="#kurikulum" className="hover:text-emerald-400 transition-colors">Kurikulum</a>
            <a href="#standar" className="hover:text-emerald-400 transition-colors">Standar PEP 8</a>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/dashboard"
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              Mulai Belajar &rarr;
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-5 space-y-3">
            <a href="#fitur" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-300 hover:text-white py-1">Fitur</a>
            <a href="#kurikulum" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-300 hover:text-white py-1">Kurikulum</a>
            <a href="#standar" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-300 hover:text-white py-1">Standar PEP 8</a>
            <div className="pt-2">
              <Link 
                href="/dashboard"
                className="block w-full text-center bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/20"
              >
                Mulai Belajar &rarr;
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-24 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10 w-full">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full text-emerald-400 text-[11px] sm:text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Python 3.13 &bull; Standar PEP 8 Enforced
          </div>

          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug sm:leading-tight">
            Belajar Python Modern, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Bersih, & Profesional.
            </span>
          </h1>

          <p className="text-slate-300 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            Platform belajar pemrograman interaktif berbasis web. Dilengkapi live sandbox instan, tantangan bertingkat (Easy, Medium, Hard), dan penegakan aturan kode bersih standar industri.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 px-4 sm:px-0">
            <Link 
              href="/dashboard"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-sm sm:text-base transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-center"
            >
              Buka Dashboard Belajar &rarr;
            </Link>
            <a 
              href="#fitur"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium px-6 py-3.5 rounded-xl text-sm sm:text-base transition-all border border-slate-800 text-center"
            >
              Pelajari Fitur
            </a>
          </div>

          {/* Code Preview Card */}
          <div className="mt-8 sm:mt-16 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 text-left shadow-2xl max-w-xl mx-auto overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">main.py</span>
            </div>
            <pre className="font-mono text-[11px] sm:text-sm text-emerald-300 overflow-x-auto">
              <code>{`# Contoh kode sesuai standar PEP 8
nama_pengguna = "Developer"
status_aktif = True

if status_aktif:
    print(f"Halo, {nama_pengguna}!")`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* 1. FITUR SECTION */}
      <section id="fitur" className="py-16 sm:py-24 bg-slate-900/50 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Keunggulan Platform</span>
            <h2 className="text-xl sm:text-3xl font-bold">Kenapa Belajar di StudiKoding?</h2>
            <p className="text-slate-400 text-xs sm:text-sm">Dirancang khusus untuk pembelajar yang mengutamakan kualitas kode bersih.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-base font-bold">⚡</div>
              <h3 className="text-sm sm:text-base font-bold">Live Sandbox Instan</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Eksekusi kode Python langsung di browser tanpa instalasi rumit.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-base font-bold">🎯</div>
              <h3 className="text-sm sm:text-base font-bold">Tantangan Bertingkat</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Uji logika pemrogramanmu dari Level Easy, Medium, hingga Hard.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-base font-bold">📜</div>
              <h3 className="text-sm sm:text-base font-bold">Standar Resmi PEP 8</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Dilengkapi sistem validasi yang menegakkan aturan kode bersih.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KURIKULUM SECTION */}
      <section id="kurikulum" className="py-16 sm:py-24 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Alur Belajar</span>
            <h2 className="text-xl sm:text-3xl font-bold">Kurikulum Terstruktur</h2>
            <p className="text-slate-400 text-xs sm:text-sm">Modul dirancang bertahap agar mudah dipahami oleh pemula.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
              <span className="text-xs font-mono text-emerald-400">MODUL 01</span>
              <h3 className="text-base font-bold">Variabel & Tipe Data</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Belajar menyimpan data dan memahami aturan penamaan snake_case sesuai PEP 8.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
              <span className="text-xs font-mono text-emerald-400">MODUL 02</span>
              <h3 className="text-base font-bold">Percabangan (If-Else)</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Membuat program mengambil keputusan logis berdasarkan kondisi tertentu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STANDAR PEP 8 SECTION */}
      <section id="standar" className="py-16 sm:py-24 bg-slate-900/50 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <div className="space-y-2">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Gaya Penulisan Kode</span>
            <h2 className="text-xl sm:text-3xl font-bold">Komitmen pada Standar PEP 8</h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              PEP 8 adalah panduan gaya resmi penulisan kode Python yang dibuat oleh pembuat Python sendiri. Di StudiKoding, setiap baris kode latihan divalidasi agar terbiasa menulis kode yang bersih, rapi, dan mudah dibaca oleh tim developer profesional.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <img 
              src="/logo.png" 
              alt="StudiKoding Logo" 
              className="w-8 h-8 object-contain rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-0.5" 
            />
            <span className="font-bold text-xs sm:text-sm tracking-tight">&copy; 2026 StudiKoding. All rights reserved.</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://github.com/cutzhraa/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-all" aria-label="GitHub">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/cutazizahzahraaa/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-all" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@ynwmes" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-all" aria-label="TikTok">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a href="https://x.com/callmejijiii" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-all" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}