"use client";
import content from "@/data/content.json";

export default function About() {
  const { about } = content;

  return (
    <section id="apropos" className="relative py-24 lg:py-36 bg-[#FBFCFD] border-y border-slate-200/60">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-slate-600 mb-6">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              {about.eyebrow}
            </div>

            <h2 className="text-[32px] lg:text-[46px] font-[650] leading-[1.05] tracking-[-0.02em] text-slate-900 max-w-[600px]">
              {about.title}
            </h2>

            <p className="mt-6 text-[18px] leading-[1.6] text-slate-700 font-[450] max-w-[560px]">
              {about.description}
            </p>

            <div className="mt-8 space-y-4 max-w-[560px]">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-[1.7] text-slate-600">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-6 border-t border-slate-200 pt-10">
              {about.values.map((v) => (
                <div key={v.title}>
                  <h4 className="text-[14px] font-semibold text-slate-900">{v.title}</h4>
                  <p className="mt-2 text-[13px] leading-[1.6] text-slate-500">{v.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right card */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28">
              <div className="relative rounded-[24px] overflow-hidden bg-slate-900 p-[1px]">
                <div className="rounded-[23px] bg-white overflow-hidden">
                  <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                    <img src={about.image} alt="SITNOR Studio" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="inline-flex items-center rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[11px] font-medium border border-white/20">
                        Studio • Casablanca
                      </div>
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-900 text-white grid place-items-center font-bold text-[14px] flex-shrink-0">
                        H
                      </div>
                      <div>
                        <div className="font-semibold text-[14px] text-slate-900">{about.author.name}</div>
                        <div className="text-[12px] text-slate-500">{about.author.role}</div>
                      </div>
                      <div className="ml-auto">
                        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 grid place-items-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
                        </div>
                      </div>
                    </div>

                    <blockquote className="mt-5 text-[15px] leading-[1.6] text-slate-700 italic border-l-2 border-slate-900 pl-4">
                      “{about.author.quote}”
                    </blockquote>

                    <div className="mt-6 flex items-center gap-3 text-[12px]">
                      <div className="flex -space-x-2">
                        <div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white" />
                        <div className="w-7 h-7 rounded-full bg-slate-300 border-2 border-white" />
                        <div className="w-7 h-7 rounded-full bg-slate-900 border-2 border-white text-white grid place-items-center text-[10px] font-bold">+2</div>
                      </div>
                      <span className="text-slate-500">Équipe senior • 4 designers & devs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decor dots */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 opacity-20">
                <div className="w-full h-full grid grid-cols-6 gap-2">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-slate-400 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
