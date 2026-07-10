"use client";
import { useState } from "react";
import content from "@/data/content.json";

export default function Portfolio() {
  const { portfolio } = content;
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = activeCategory === "Tous"
    ? portfolio.items
    : portfolio.items.filter((i) => i.category === activeCategory);

  const selectedItem = portfolio.items.find((i) => i.id === selected);

  return (
    <section id="portfolio" className="py-24 lg:py-36 bg-slate-950 text-white relative overflow-hidden">
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-[640px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur mb-6">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              {portfolio.eyebrow}
            </div>
            <h2 className="text-[32px] lg:text-[48px] font-[650] leading-[1.05] tracking-[-0.02em]">{portfolio.title}</h2>
            <p className="mt-4 text-[17px] leading-[1.6] text-white/60">{portfolio.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {portfolio.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`h-9 px-4 rounded-full text-[13px] font-medium border transition-all ${
                  activeCategory === cat
                    ? "bg-white text-slate-900 border-white"
                    : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item.id)}
              className="group relative rounded-[20px] overflow-hidden bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] hover:border-white/15 transition-all cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-800 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80" />
                
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className="inline-flex items-center rounded-full bg-white text-slate-900 px-3 py-1 text-[11px] font-semibold">
                    {item.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-900/60 backdrop-blur border border-white/10 text-white px-3 py-1 text-[11px] font-medium">
                    {item.year} • {item.result}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-[18px] font-semibold leading-tight">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.5] text-white/60 line-clamp-2">{item.description}</p>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-slate-900 grid place-items-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                  ↗
                </div>
              </div>

              <div className="p-4 flex items-center gap-2 overflow-x-auto">
                {item.tags.map((tag) => (
                  <span key={tag} className="whitespace-nowrap text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[20px] border border-white/10 bg-white/[0.03] p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h4 className="text-[20px] font-semibold">Vous voulez des résultats similaires ?</h4>
            <p className="mt-2 text-white/60 text-[14px] max-w-[520px]">Chaque projet commence par un audit de 20 minutes. On analyse votre situation actuelle et on vous montre exactement où vous perdez de l'argent.</p>
          </div>
          <a href="#contact" className="inline-flex h-11 items-center justify-center rounded-full bg-white text-slate-900 px-6 text-[14px] font-medium hover:bg-slate-100 transition-colors">
            Voir si on peut vous aider →
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-end lg:items-center justify-center p-4 lg:p-8">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative w-full max-w-4xl bg-white rounded-[24px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.4)] animate-slideIn max-h-[90vh] overflow-y-auto">
            <div className="aspect-[16/9] relative bg-slate-100">
              <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900 text-white grid place-items-center hover:bg-black"
              >
                ✕
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-white text-slate-900 text-[11px] font-semibold">{selectedItem.category}</span>
                  <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-[11px]">{selectedItem.result}</span>
                </div>
                <h3 className="text-[24px] lg:text-[30px] font-bold tracking-tight">{selectedItem.title}</h3>
                <p className="mt-2 text-white/70 max-w-2xl">{selectedItem.description}</p>
              </div>
            </div>
            <div className="p-6 lg:p-8 text-slate-900">
              <h4 className="font-semibold">Technologies utilisées</h4>
              <div className="mt-3 flex gap-2 flex-wrap">
                {selectedItem.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[13px]">{t}</span>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <a href="#contact" onClick={() => setSelected(null)} className="h-11 px-6 rounded-full bg-slate-900 text-white grid place-items-center text-[14px] font-medium">Demander un projet similaire</a>
                <button onClick={() => setSelected(null)} className="h-11 px-6 rounded-full border border-slate-200 text-[14px] font-medium">Fermer</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
