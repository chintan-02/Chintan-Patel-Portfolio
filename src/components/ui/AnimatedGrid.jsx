export function AnimatedGrid() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="site-grid absolute inset-0 opacity-80" />
      <div className="absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute right-[-7rem] top-40 h-[24rem] w-[24rem] rounded-full bg-indigo-200/35 blur-3xl" />
    </div>
  );
}
