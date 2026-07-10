"use client";
import content from "@/data/content.json";

export default function Blog() {
  const { blog } = content;

  return (
    <section id="blog" className="py-24 lg:py-32 bg-[#FBFCFD] border-y border-slate-200/60">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-slate-600 mb-6">
              {blog.eyebrow}
            </div>
            <h2 className="text-[32px] lg:text-[42px] font-[650] leading-[1.05] tracking-[-0.02em] text-slate-900">
              {blog.title}
            </h2>
            <p className="mt-3 text-[16px] text-slate-600 max-w-[560px]">{blog.subtitle}</p>
          </div>
          <a href="#" className="hidden lg:inline-flex h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-[14px] font-medium text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors">
            Voir tous les articles →
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
          {blog.items.map((post) => (
            <a
              key={post.id}
              href={post.slug}
              className="group rounded-[20px] overflow-hidden bg-white border border-slate-200 hover:border-slate-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-white text-slate-900 text-[11px] font-semibold border border-slate-200">{post.category}</span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur text-white text-[11px]">{post.readTime}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-[12px] font-medium text-slate-500">{post.date}</div>
                <h3 className="mt-2 text-[18px] font-semibold leading-[1.3] tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-slate-600 line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-900">
                  Lire l'article <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 lg:hidden flex justify-center">
          <a href="#" className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-[14px] font-medium text-slate-700">
            Voir tous les articles →
          </a>
        </div>
      </div>
    </section>
  );
}
