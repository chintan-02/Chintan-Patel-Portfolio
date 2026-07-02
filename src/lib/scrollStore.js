// Lightweight scroll state shared between Lenis (writer) and R3F useFrame (reader).
// A plain mutable object avoids React re-renders on every scroll tick — the 3D
// scene reads `scroll.progress` inside the render loop instead.
export const scroll = {
  progress: 0, // 0 at top → 1 at bottom of page
  velocity: 0
};
