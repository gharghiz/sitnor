"use client";
import { useState } from "react";
import content from "@/data/content.json";

export default function FAQ() {
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-slate-600 mb-6">
                {faq.eyebrow}
              </div>
              <h2 className="text-[32px] lg:text-[42px] font-[650] leading-[1.05] tracking-[-0.02em] text-slate-900">{faq.title}</h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-slate-600">{faq.subtitle}</p>

              <div className="mt-10 rounded-[16px] bg-slate-900 text-white p-6">
                <div className="w-10 h-10 rounded-full bg-white/10 grid place-items-center mb-4">💬</div>
                <h4 className="font-semibold">Encore une question ?</h4>
                <p className="mt-2 text-[13px] leading-[1.6] text-white/60">On répond en moyenne en 27 minutes sur WhatsApp en journée ouvrée.</p>
                <a href={`https://wa.me/${content.site.contact.phone.replace(/\D/g,'')}`} target="_blank" className="mt-4 inline-flex h-9 items-center justify-center rounded-full bg-white text-slate-900 px-4 text-[13px] font-medium hover:bg-slate-100 transition-colors">
                  Discuter sur WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faq.items.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="group">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-start justify-between gap-6 py-6 text-left"
                    >
                      <span className={`text-[17px] font-[500] leading-[1.4] tracking-tight transition-colors ${isOpen ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"}`}>
                        {item.question}
                      </span>
                      <span className={`w-8 h-8 rounded-full border grid place-items-center flex-shrink-0 transition-all ${isOpen ? "bg-slate-900 text-white border-slate-900 rotate-45" : "bg-white border-slate-200 text-slate-500 group-hover:border-slate-300"}`}>
                        +
                      </span>
                    </button>
                    <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <p className="text-[14px] leading-[1.7] text-slate-600 pr-12">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
