"use client";
import { useState } from "react";
import content from "@/data/content.json";

export default function Contact() {
  const { contact, site } = content;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: contact.form.serviceOptions[0],
    budget: contact.form.budgetOptions[1],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Nouveau projet SITNOR — ${formState.service} — ${formState.name}`;
    const body = `Bonjour SITNOR,

Nom: ${formState.name}
Email: ${formState.email}
Service: ${formState.service}
Budget: ${formState.budget}

Message:
${formState.message}

---
Envoyé depuis sitnor.com
`;
    const mailto = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-blue-700 mb-6">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
              {contact.eyebrow}
            </div>

            <h2 className="text-[34px] lg:text-[46px] font-[650] leading-[1.05] tracking-[-0.02em] text-slate-900">
              {contact.title}
            </h2>
            <p className="mt-4 text-[17px] leading-[1.6] text-slate-600">{contact.subtitle}</p>

            <div className="mt-10 rounded-[20px] bg-slate-50 border border-slate-200 p-6 lg:p-7">
              <h3 className="font-semibold text-slate-900">{contact.infoTitle}</h3>
              <p className="mt-2 text-[14px] text-slate-600">{contact.infoSubtitle}</p>

              <div className="mt-6 space-y-4">
                <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 group">
                  <span className="w-10 h-10 rounded-full bg-white border border-slate-200 grid place-items-center group-hover:border-slate-900 transition-colors">✉️</span>
                  <span>
                    <span className="block text-[12px] text-slate-500">Email</span>
                    <span className="text-[14px] font-medium text-slate-900 group-hover:text-blue-600">{site.contact.email}</span>
                  </span>
                </a>
                <a href={`tel:${site.contact.phone}`} className="flex items-center gap-3 group">
                  <span className="w-10 h-10 rounded-full bg-white border border-slate-200 grid place-items-center group-hover:border-slate-900 transition-colors">📞</span>
                  <span>
                    <span className="block text-[12px] text-slate-500">Téléphone / WhatsApp</span>
                    <span className="text-[14px] font-medium text-slate-900">{site.contact.phoneDisplay}</span>
                  </span>
                </a>
                <a href={site.contact.instagram} target="_blank" className="flex items-center gap-3 group">
                  <span className="w-10 h-10 rounded-full bg-white border border-slate-200 grid place-items-center group-hover:border-slate-900 transition-colors">📸</span>
                  <span>
                    <span className="block text-[12px] text-slate-500">Instagram</span>
                    <span className="text-[14px] font-medium text-slate-900 group-hover:text-blue-600">@sitnor1</span>
                  </span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-white border border-slate-200 grid place-items-center">📍</span>
                  <span>
                    <span className="block text-[12px] text-slate-500">Basé à</span>
                    <span className="text-[14px] font-medium text-slate-900">{site.contact.location}</span>
                  </span>
                </div>
              </div>

              <div className="mt-8 rounded-[12px] bg-white border border-slate-200 p-4 flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[13px] font-medium text-slate-700">Temps de réponse moyen : 27 minutes</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="rounded-[24px] border border-slate-200 bg-white shadow-[0_16px_48px_rgba(15,23,42,0.06)] p-6 lg:p-8">
              {sent && (
                <div className="mb-6 rounded-[12px] bg-emerald-50 border border-emerald-200 p-4 text-[13px] leading-[1.6] text-emerald-800">
                  <div className="font-semibold">✅ {contact.form.successMessage}</div>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block text-[13px] font-medium text-slate-700 mb-2">{contact.form.nameLabel} *</span>
                  <input
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder={contact.form.namePlaceholder}
                    className="w-full h-11 rounded-[12px] border border-slate-200 bg-white px-4 text-[14px] placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-900/10 transition-all"
                  />
                </label>
                <label className="block">
                  <span className="block text-[13px] font-medium text-slate-700 mb-2">{contact.form.emailLabel} *</span>
                  <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder={contact.form.emailPlaceholder}
                    className="w-full h-11 rounded-[12px] border border-slate-200 bg-white px-4 text-[14px] placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-900/10 transition-all"
                  />
                </label>

                <label className="block">
                  <span className="block text-[13px] font-medium text-slate-700 mb-2">{contact.form.serviceLabel}</span>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full h-11 rounded-[12px] border border-slate-200 bg-white px-4 text-[14px] focus:border-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-900/10"
                  >
                    {contact.form.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="block text-[13px] font-medium text-slate-700 mb-2">{contact.form.budgetLabel}</span>
                  <select
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                    className="w-full h-11 rounded-[12px] border border-slate-200 bg-white px-4 text-[14px] focus:border-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-900/10"
                  >
                    {contact.form.budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block mt-5">
                <span className="block text-[13px] font-medium text-slate-700 mb-2">{contact.form.messageLabel} *</span>
                <textarea
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder={contact.form.messagePlaceholder}
                  rows={5}
                  className="w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-[14px] placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-900/10 transition-all resize-none"
                />
              </label>

              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-[12px] leading-[1.5] text-slate-500 max-w-[320px]">{contact.form.privacy}</p>
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-7 text-[14px] font-medium text-white hover:bg-black transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:-translate-y-[1px] w-full sm:w-auto"
                >
                  {contact.form.submitLabel}
                </button>
              </div>
            </form>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-[12px] border border-slate-200 bg-slate-50 p-4 text-center">
                <div className="text-[20px] font-bold tracking-tight">100%</div>
                <div className="text-[11px] text-slate-500 mt-1 uppercase tracking-widest font-semibold">Sans engagement</div>
              </div>
              <div className="rounded-[12px] border border-slate-200 bg-slate-50 p-4 text-center">
                <div className="text-[20px] font-bold tracking-tight">24h</div>
                <div className="text-[11px] text-slate-500 mt-1 uppercase tracking-widest font-semibold">Devis gratuit</div>
              </div>
              <div className="rounded-[12px] border border-slate-200 bg-slate-50 p-4 text-center">
                <div className="text-[20px] font-bold tracking-tight">NDA</div>
                <div className="text-[11px] text-slate-500 mt-1 uppercase tracking-widest font-semibold">Confidentialité</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
