'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ModulSatu() {
  const [code, setCode] = useState("a = 1\nprint(a)");
  const [output, setOutput] = useState("1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<'easy' | 'medium' | 'hard' | null>(null);

  const handleRun = () => {
    try {
      const lines = code.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));
      const memory: { [key: string]: string | number } = {};
      let resultOutput = "";

      for (let line of lines) {
        if (line.includes('=') && !line.startsWith('print')) {
          const parts = line.split('=').map(p => p.trim());
          if (parts.length === 2) {
            const varName = parts[0];
            let varVal: string | number = parts[1];

            if (/[A-Z]/.test(varName)) {
              resultOutput += `⚠️ Peringatan PEP 8: Variabel "${varName}" sebaiknya menggunakan snake_case.\n`;
            }

            if (!isNaN(Number(varVal))) {
              varVal = Number(varVal);
            } else if ((varVal.startsWith('"') && varVal.endsWith('"')) || (varVal.startsWith("'") && varVal.endsWith("'"))) {
              varVal = varVal.slice(1, -1);
            }

            memory[varName] = varVal;
          }
        } else if (line.startsWith('print(') && line.endsWith(')')) {
          const content = line.slice(6, -1).trim();
          
          if (memory[content] !== undefined) {
            resultOutput += `${memory[content]}\n`;
          } else if ((content.startsWith('"') && content.endsWith('"')) || (content.startsWith("'") && content.endsWith("'"))) {
            resultOutput += `${content.slice(1, -1)}\n`;
          } else if (!isNaN(Number(content))) {
            resultOutput += `${content}\n`;
          } else {
            resultOutput += `NameError: name '${content}' is not defined\n`;
          }
        } else {
          resultOutput += `SyntaxError: format kode tidak dikenali\n`;
        }
      }

      // --- VALIDASI TANTANGAN HANYA JALAN KALAO LEVEL DIPILIH ---
      let challengeValidation = "";

      if (selectedLevel === 'easy') {
        const hasVar = code.includes("nama_depan") && !code.includes("namaDepan");
        const hasPrint = code.includes("print(nama_depan)");
        if (hasVar && hasPrint) {
          challengeValidation = "\n-----------------------------------\n🟢 STATUS: CORRECT (EASY LEVEL SELESAI) 🎉\nHebat! Variabel 'nama_depan' sesuai standar PEP 8.";
        } else {
          challengeValidation = "\n-----------------------------------\n🔴 STATUS: WRONG\nPetunjuk Easy: Buat variabel 'nama_depan' (snake_case) lalu print(nama_depan).";
        }
      } else if (selectedLevel === 'medium') {
        const hasVar = code.includes("umur_sekarang") && !code.includes("umurSekarang");
        const hasCalc = code.includes("umur_depan") || code.includes("+");
        const hasPrint = code.includes("print(");
        if (hasVar && hasCalc && hasPrint) {
          challengeValidation = "\n-----------------------------------\n🟢 STATUS: CORRECT (MEDIUM LEVEL SELESAI) 🔥\nKeren! Operasi matematika variabel & snake_case berhasil.";
        } else {
          challengeValidation = "\n-----------------------------------\n🔴 STATUS: WRONG\nPetunjuk Medium: Buat variabel 'umur_sekarang', hitung umur tahun depan dengan operasi (+), lalu print.";
        }
      } else if (selectedLevel === 'hard') {
        const hasVar1 = code.includes("nama_depan");
        const hasVar2 = code.includes("umur");
        const hasMultiplePrints = (code.match(/print\(/g) || []).length >= 2;
        if (hasVar1 && hasVar2 && hasMultiplePrints) {
          challengeValidation = "\n-----------------------------------\n🟢 STATUS: CORRECT (HARD LEVEL SELESAI) 🏆\nLuar biasa! Master logika variabel & standar PEP 8 tercapai!";
        } else {
          challengeValidation = "\n-----------------------------------\n🔴 STATUS: WRONG\nPetunjuk Hard: Buat minimal 2 variabel (nama_depan & umur) dengan snake_case, lalu cetak keduanya menggunakan beberapa print().";
        }
      } else {
        challengeValidation = "\n-----------------------------------\n💡 Info: Anda sedang dalam Mode Bebas (Coba-coba). Klik tombol 'Mulai Mode Tantangan' di atas jika ingin menguji kemampuan!";
      }

      setOutput((resultOutput.trim() || "Kode berhasil dieksekusi tanpa output.") + challengeValidation);
    } catch {
      setOutput("Terjadi kesalahan saat mengeksekusi kode.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 sm:p-6 lg:p-12 pb-24 relative">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* HEADER BERSIH + TOMBOL PILIH LEVEL TANTANGAN */}
        <div className="border-b border-slate-800/80 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">StudiKoding</span>
            <h1 className="text-lg sm:text-xl font-bold">Modul 01: Variabel & Tipe Data</h1>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-mono px-4 py-2 rounded-xl border border-emerald-500/30 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>🎯</span> 
              <span>{selectedLevel ? `Mode Tantangan: ${selectedLevel.toUpperCase()}` : 'Mulai Mode Tantangan'}</span>
            </button>
            <span className="text-xs font-mono text-slate-500 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
              Python 3.13
            </span>
          </div>
        </div>

        {/* GRID KONTEN UTAMA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* KIRI: MATERI & STANDAR RESMI */}
          <div className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-2xl space-y-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Teori Dasar</span>
              <h2 className="text-xl font-bold mt-0.5">Konsep Variabel</h2>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              Variabel itu seperti kotak tempat menyimpan data. Di Python, lu nggak perlu repot deklarasi tipe data secara manual di awal. Cukup tulis nama variabel dan isi nilainya.
            </p>
            
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl font-mono text-xs sm:text-sm text-emerald-300 whitespace-pre-line overflow-x-auto">
              {`# Contoh penulisan benar sesuai PEP 8
nilai_angka = 10
pesan_teks = "Halo Dunia"`}
            </div>

            {/* Kotak Standar Resmi PEP 8 */}
            <div className="bg-emerald-950/20 border border-emerald-800/40 p-4 rounded-xl">
              <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1 font-bold">📜 Standar Resmi (PEP 8)</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Penulisan nama variabel di Python wajib menggunakan huruf kecil dan dipisah dengan garis bawah (<code className="text-emerald-400">snake_case</code>), bukan spasi atau kapital di tengah (<code className="text-red-400">camelCase</code>).
              </p>
            </div>
          </div>

          {/* KANAN: PLAYGROUND INTERAKTIF */}
          <div className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-2xl flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-slate-400">💻 Python Playground</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded-md border border-emerald-800/50">
                  {selectedLevel ? `Level: ${selectedLevel.toUpperCase()}` : 'Mode Bebas (Eksperimen)'}
                </span>
              </div>
              
              <textarea 
                value={code}
                onChange={(e) => setCode(e.target.value)}
                rows={6}
                className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl font-mono text-sm text-emerald-300 focus:outline-none focus:border-emerald-500 transition-all resize-none shadow-inner"
              />

              <button 
                onClick={handleRun}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 rounded-xl transition-all shadow-lg shadow-emerald-500/20 text-sm active:scale-[0.99]"
              >
                Jalankan Kode (Run)
              </button>
            </div>

            {/* OUTPUT TERMINAL */}
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1.5">Output Terminal:</span>
              <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-xl font-mono text-xs text-slate-300 min-h-[100px] whitespace-pre-line overflow-x-auto">
                {output}
              </div>
            </div>
          </div>

        </div>

        {/* TOMBOL NAVIGASI DI PALING BAWAH */}
        <div className="pt-6 border-t border-slate-800/80 flex justify-between items-center">
          <Link 
            href="/dashboard" 
            className="bg-slate-900 hover:bg-slate-800 text-slate-300 text-sm font-medium px-6 py-3 rounded-xl transition-all border border-slate-800 flex items-center gap-2 shadow-md"
          >
            <span>&larr;</span> <span>Kembali ke Dashboard</span>
          </Link>

          <span className="text-xs text-slate-500 hidden sm:inline">StudiKoding &bull; Modul 1 dari 3</span>
        </div>

      </div>

      {/* --- MODAL / POP-UP PILIH LEVEL TANTANGAN --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-lg p-6 rounded-2xl shadow-2xl space-y-5 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-500 text-slate-950 text-xs font-bold px-2 py-0.5 rounded-md">TANTANGAN</span>
                <h3 className="text-base font-bold">Pilih Level Kesulitan Modul 1</h3>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white text-sm font-mono px-2 py-1 rounded-lg bg-slate-800/50"
              >
                ✕ Tutup
              </button>
            </div>

            <p className="text-slate-300 text-xs">
              Pilih tingkat kesulitan jika ingin menguji kemampuan kode Anda, atau pilih opsi mode bebas:
            </p>

            {/* PILIHAN LEVEL */}
            <div className="space-y-3">
              
              {/* OPSI MODE BEBAS */}
              <div 
                onClick={() => setSelectedLevel(null)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${selectedLevel === null ? 'bg-slate-800 border-slate-600' : 'bg-slate-950 border-slate-800 hover:border-slate-700'}`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold font-mono text-slate-300">⚪ MODE BEBAS (TANPA TANTANGAN)</span>
                  {selectedLevel === null && <span className="text-xs bg-slate-200 text-slate-950 px-2 py-0.5 rounded font-bold">Aktif</span>}
                </div>
                <p className="text-slate-400 text-xs">Coba-coba kode secara bebas tanpa validasi benar/salah.</p>
              </div>

              {/* EASY */}
              <div 
                onClick={() => setSelectedLevel('easy')}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${selectedLevel === 'easy' ? 'bg-emerald-950/40 border-emerald-500' : 'bg-slate-950 border-slate-800 hover:border-slate-700'}`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold font-mono text-emerald-400">🟢 LEVEL: EASY (DASAR)</span>
                  {selectedLevel === 'easy' && <span className="text-xs bg-emerald-500 text-slate-950 px-2 py-0.5 rounded font-bold">Dipilih</span>}
                </div>
                <p className="text-slate-300 text-xs">Buat variabel <code className="text-emerald-400">nama_depan</code> (snake_case) isi dengan namamu, lalu cetak pakai <code className="text-emerald-400">print()</code>.</p>
              </div>

              {/* MEDIUM */}
              <div 
                onClick={() => setSelectedLevel('medium')}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${selectedLevel === 'medium' ? 'bg-amber-950/40 border-amber-500' : 'bg-slate-950 border-slate-800 hover:border-slate-700'}`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold font-mono text-amber-400">🟡 LEVEL: MEDIUM (MENENGAH)</span>
                  {selectedLevel === 'medium' && <span className="text-xs bg-amber-500 text-slate-950 px-2 py-0.5 rounded font-bold">Dipilih</span>}
                </div>
                <p className="text-slate-300 text-xs">Buat variabel angka <code className="text-amber-400">umur_sekarang</code>, lakukan operasi matematika tambah (+) untuk tahun depan, lalu cetak hasilnya.</p>
              </div>

              {/* HARD */}
              <div 
                onClick={() => setSelectedLevel('hard')}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${selectedLevel === 'hard' ? 'bg-rose-950/40 border-rose-500' : 'bg-slate-950 border-slate-800 hover:border-slate-700'}`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold font-mono text-rose-400">🔴 LEVEL: HARD (TANTANGAN LOGIKA)</span>
                  {selectedLevel === 'hard' && <span className="text-xs bg-rose-500 text-slate-950 px-2 py-0.5 rounded font-bold">Dipilih</span>}
                </div>
                <p className="text-slate-300 text-xs">Buat minimal 2 variabel (<code className="text-rose-400">nama_depan</code> dan <code className="text-rose-400">umur</code>) dengan aturan snake_case, lalu cetak keduanya.</p>
              </div>

            </div>

            <div className="pt-2 flex justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs transition-all cursor-pointer"
              >
                Simpan & Lanjutkan 🚀
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}