// Avatar with a subtle rotating glow ring — replaces the radar.
// Pure CSS: one conic-gradient ring that slowly rotates.
// Respects prefers-reduced-motion (animation disabled globally in globals.css).
export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">
      {/* outer glow ring — slow rotation, very subtle */}
      <div className="hero-glow-ring absolute h-[148px] w-[148px] rounded-full" />
      {/* soft halo behind avatar */}
      <div className="absolute h-[150px] w-[150px] rounded-full bg-gradient-to-br from-sky-300/35 via-teal-300/25 to-transparent blur-xl" />
      {/* avatar */}
      <div className="relative z-10 h-[120px] w-[120px] overflow-hidden rounded-full border-2 border-white shadow-[0_8px_28px_rgba(15,23,42,0.14)]">
        <img
          src="/profile.JPG"
          alt="Chintan Patel"
          width="120"
          height="120"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-[50%_15%]"
        />
      </div>
    </div>
  );
}
