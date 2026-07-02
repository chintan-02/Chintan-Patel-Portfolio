import { motion } from 'framer-motion';

export function ProjectPreviewMockup({ project }) {
  return (
    <div className="rounded-panel border border-slate-200 bg-slate-950 p-4 text-white shadow-2xl shadow-slate-900/20">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-300" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-auto rounded-full bg-white/10 px-3 py-1 font-mono text-[10px] text-slate-300">{project.slug}.system</span>
      </div>
      <div className="rounded-3xl bg-white/6 p-4 ring-1 ring-white/10">
        <p className="font-mono text-xs text-sky-200">ARCHITECTURE_PREVIEW</p>
        <div className="mt-4 grid gap-2">
          {project.pipeline.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3 rounded-2xl bg-white/8 p-3 ring-1 ring-white/10"
            >
              <span className="grid h-7 w-7 place-items-center rounded-xl bg-sky-400/20 font-mono text-xs font-bold text-sky-200">{index + 1}</span>
              <span className="text-sm font-semibold text-slate-100">{step}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="rounded-2xl bg-white/8 p-3 ring-1 ring-white/10">
          <p className="font-mono text-[10px] text-slate-400">STATUS</p>
          <p className="mt-1 text-xs font-bold text-emerald-300">Live</p>
        </div>
        <div className="rounded-2xl bg-white/8 p-3 ring-1 ring-white/10">
          <p className="font-mono text-[10px] text-slate-400">STACK</p>
          <p className="mt-1 text-xs font-bold text-sky-200">AI App</p>
        </div>
        <div className="rounded-2xl bg-white/8 p-3 ring-1 ring-white/10">
          <p className="font-mono text-[10px] text-slate-400">FOCUS</p>
          <p className="mt-1 text-xs font-bold text-indigo-200">Product</p>
        </div>
      </div>
    </div>
  );
}
