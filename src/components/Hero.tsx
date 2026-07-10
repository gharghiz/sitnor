"use client";
import content from "@/data/content.json";

export default function Hero() {
  const { hero } = content;

  return (
    <section id="accueil" className="relative pt-[120px] lg:pt-[160px] pb-20 lg:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-br from-blue-50 via-indigo-50/50 to-transparent blur-3xl opacity-70 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute top-[400px] left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-50 to-blue-50/30 blur-3xl opacity-60 -translate-x-1/3" />
        <div className="absolute inset-0 grid-pattern opacity-[0.4]" />
      </div>

      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-start">
          {/* Left */}
          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[12.5px] font-medium text-slate-700 shadow-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {hero.badge}
            </div>

            <h1 className="text-[40px] lg:text-[64px] font-[650] leading-[0.95] tracking-[-0.03em] text-slate-950">
              {hero.title}
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {hero.titleHighlight}
              </span>
            </h1>

            <p className="mt-6 text-[17px] lg:text-[19px] leading-[1.6] text-slate-600 max-w-[560px] font-[400]">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={hero.ctaPrimary.href}
                className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-7 text-[15px] font-medium text-white hover:bg-black transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-[1px]"
              >
                {hero.ctaPrimary.label}
                <span className="ml-2">→</span>
              </a>
              <a
                href={hero.ctaSecondary.href}
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-[15px] font-medium text-slate-900 hover:bg-slate-50 transition-colors"
              >
                {hero.ctaSecondary.label}
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8 max-w-[480px]">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-[28px] font-[700] tracking-tight text-slate-900">{stat.value}</div>
                  <div className="mt-1 text-[13px] font-medium text-slate-500 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Clients marquee */}
            <div className="mt-12">
              <p className="text-[11px] uppercase tracking-widest font-semibold text-slate-400 mb-4">Ils nous font confiance</p>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {hero.clients.map((client) => (
                  <span key={client} className="text-[14px] font-semibold tracking-tight text-slate-500">
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative lg:sticky lg:top-28">
            <div className="relative mx-auto max-w-[520px] lg:ml-auto">
              {/* Main browser mock */}
              <div className="relative rounded-[20px] bg-white border border-slate-200 shadow-[0_20px_80px_rgba(15,23,42,0.08),0_0_0_1px_rgba(15,23,42,0.04)] overflow-hidden">
                {/* Browser header */}
                <div className="flex items-center justify-between h-11 px-4 border-b border-slate-100 bg-slate-50/50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-slate-500 bg-white border border-slate-200 rounded-full px-3 py-1">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                    sitnor.com
                  </div>
                  <div className="w-16" />
                </div>

                {/* Content mock */}
                <div className="p-6">
                  <div className="h-3 w-24 bg-slate-900 rounded-full mb-4" />
                  <div className="h-8 w-3/4 bg-slate-100 rounded-lg mb-3" />
                  <div className="h-4 w-full bg-slate-50 rounded-lg mb-2" />
                  <div className="h-4 w-5/6 bg-slate-50 rounded-lg mb-6" />

                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-8 h-32 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-4 text-white flex flex-col justify-between">
                      <div className="w-8 h-8 bg-white/20 rounded-lg" />
                      <div>
                        <div className="h-2 w-16 bg-white/60 rounded-full mb-2" />
                        <div className="h-3 w-24 bg-white rounded-full" />
                      </div>
                    </div>
                    <div className="col-span-4 space-y-3">
                      <div className="h-[60px] rounded-xl bg-slate-50 border border-slate-100 p-3">
                        <div className="h-2 w-8 bg-slate-900 rounded-full mb-2" />
                        <div className="h-2 w-12 bg-slate-200 rounded-full" />
                      </div>
                      <div className="h-[60px] rounded-xl bg-slate-900 p-3 text-white">
                        <div className="h-2 w-12 bg-white/40 rounded-full mb-2" />
                        <div className="h-3 w-8 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="h-9 w-24 bg-slate-900 rounded-full" />
                    <div className="flex gap-2">
                      <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200" />
                      <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200" />
                    </div>
                  </div>
                </div>

                {/* Floating metrics cards */}
                <div className="absolute -right-6 top-[30%] hidden lg:flex bg-white border border-slate-200 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] p-4 w-[200px] animate-float">
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">Conversion</span>
                      <span className="text-[11px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-medium">+42%</span>
                    </div>
                    <div className="text-[24px] font-bold tracking-tight text-slate-900">4.8%</div>
                    <div className="mt-2 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[78%] bg-slate-900 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="absolute -left-8 bottom-[20%] hidden lg:flex bg-slate-900 text-white rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.2)] p-4 w-[180px] animate-float" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 grid place-items-center">⚡</div>
                    <div>
                      <div className="text-[12px] text-white/60">Performance</div>
                      <div className="font-semibold">100/100</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background glow */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
