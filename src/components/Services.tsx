"use client";
import content from "@/data/content.json";

const icons: Record<string, React.ReactNode> = {
  layout: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M3 9h18M9 21V9"/></svg>
  ),
  shopping: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
  ),
  refresh: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
  ),
  pen: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 19l7-7a1.5 1.5 0 0 0-2-2l-7 7v2h2z"/><path d="M14 6l2-2"/><path d="M18 8l2-2"/><path d="M5 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>
  ),
  search: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="6"/><path d="M21 21l-4.3-4.3"/></svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ),
};

export default function Services() {
  const { services } = content;

  return (
    <section id="services" className="py-24 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-[11px] font-semibold uppercase tracking-widest mb-6">
            {services.eyebrow}
          </div>
          <h2 className="text-[32px] lg:text-[48px] font-[650] leading-[1.05] tracking-[-0.02em] text-slate-900">
            {services.title}
          </h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-slate-600">
            {services.subtitle}
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-slate-200 border border-slate-200 rounded-[24px] overflow-hidden">
          {services.items.map((service) => (
            <div
              key={service.id}
              className="group bg-white p-8 lg:p-9 hover:bg-[#FCFCFD] transition-colors relative"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-11 h-11 rounded-[12px] bg-slate-900 text-white grid place-items-center group-hover:bg-blue-600 transition-colors">
                  {icons[service.icon] || icons.layout}
                </div>
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600">
                  {service.price}
                </span>
              </div>

              <h3 className="text-[18px] font-semibold tracking-tight text-slate-900">{service.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.6] text-slate-600">{service.description}</p>

              <ul className="mt-6 space-y-2.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 grid place-items-center">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5l10 -10"/></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-2 text-[13px] font-medium text-slate-900">
                <span className="group-hover:gap-2 flex items-center gap-1.5 transition-all">
                  En savoir plus <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
              </div>

              {/* hover gradient */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity bg-gradient-to-br from-blue-600 to-indigo-600" />
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[16px] border border-dashed border-slate-300 bg-slate-50/50 p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h4 className="font-semibold text-slate-900">Pas sûr du service dont vous avez besoin ?</h4>
            <p className="mt-1 text-[14px] text-slate-600">Audit gratuit de votre site actuel en 24h, avec recommandations priorisées.</p>
          </div>
          <a href="#contact" className="inline-flex h-10 items-center justify-center rounded-full bg-white border border-slate-200 px-5 text-[14px] font-medium text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors self-start lg:self-auto">
            Demander mon audit gratuit
          </a>
        </div>
      </div>
    </section>
  );
}
