import Link from 'next/link';

export default function Dashboard() {
  const modules = [
    { id: 1, title: "Modul 1: Variabel & Tipe Data", desc: "Mengenal cara menyimpan data dan tipe dasar di Python.", status: "Mulai" },
    { id: 2, title: "Modul 2: Percabangan (If-Else)", desc: "Membuat alur logika keputusan sesuai standar PEP 8.", status: "Segera" },
    { id: 3, title: "Modul 3: Perulangan (Looping)", desc: "Mengulang aksi otomatis dengan for & while loop.", status: "Segera" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
          <h1 className="text-xl font-bold font-mono text-emerald-400">StudiKoding &bull; Dashboard</h1>
          <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
            &larr; Kembali ke Beranda
          </Link>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Peta Belajar Python</h2>
          <p className="text-slate-400">Pilih modul harianmu dan bangun logika tanpa pusing.</p>
        </div>

        <div className="grid gap-4">
          {modules.map((m) => (
            <div key={m.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-emerald-500/50 transition-all">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Modul 0{m.id}</span>
                <h3 className="text-xl font-semibold mt-1">{m.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{m.desc}</p>
              </div>
              <Link href={`/belajar/modul-${m.id}`} className="bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all border border-slate-700 text-center">
                Mulai Belajar
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}