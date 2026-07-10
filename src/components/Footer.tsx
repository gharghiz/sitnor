import content from "@/data/content.json";

export default function Footer() {
  const { site, footer, navigation } = content;

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <a href="#accueil" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-[10px] bg-slate-950 grid place-items-center text-white font-bold text-[15px]">S</div>
              <span className="font-semibold tracking-tight text-[17px] text-slate-900">{site.shortName}</span>
            </a>
            <p className="mt-4 text-[14px] leading-[1.6] text-slate-600 max-w-[380px]">{footer.tagline}</p>

            <div className="mt-6 flex gap-2">
              <a href={site.contact.instagram} target="_blank" className="w-9 h-9 rounded-full bg-white border border-slate-200 grid place-items-center hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="6"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
              </a>
              <a href={`mailto:${site.contact.email}`} className="w-9 h-9 rounded-full bg-white border border-slate-200 grid place-items-center hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16v16H4z"/><path d="M4 7l8 6l8-6"/></svg>
              </a>
              <a href={`https://wa.me/${site.contact.phone.replace(/\D/g,'')}`} target="_blank" className="w-9 h-9 rounded-full bg-white border border-slate-200 grid place-items-center hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
              </a>
            </div>

            <div className="mt-8 text-[13px] text-slate-500">
              <div>{site.contact.email}</div>
              <div className="mt-1">{site.contact.phoneDisplay} • {site.contact.location}</div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-widest text-slate-900">Navigation</h4>
              <ul className="mt-4 space-y-2.5">
                {navigation.map((item) => (
                  <li key={item.href}><a href={item.href} className="text-[14px] text-slate-600 hover:text-slate-900 transition-colors">{item.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-widest text-slate-900">Services</h4>
              <ul className="mt-4 space-y-2.5">
                {footer.links.services.map((l) => (
                  <li key={l}><a href="#services" className="text-[14px] text-slate-600 hover:text-slate-900 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-widest text-slate-900">Entreprise</h4>
              <ul className="mt-4 space-y-2.5">
                {footer.links.company.map((l) => (
                  <li key={l}><a href="#" className="text-[14px] text-slate-600 hover:text-slate-900 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-slate-500">{footer.copyright}</p>
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"/> Systèmes opérationnels</span>
            <span>•</span>
            <span>Fait avec Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
