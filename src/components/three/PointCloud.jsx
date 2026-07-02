import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { scroll } from '../../lib/scrollStore.js';
import { useTheme } from '../../lib/themeStore.jsx';

/* ------------------------------------------------------------------
   Latent-space point cloud.
   Points are sampled from three loosely-overlapping Gaussian clusters.
   In the hero they read as one diffuse amber manifold (raw embedding
   space). Each point remembers its home cluster (homePos) so later
   sections can splay the clusters apart = the three domains. That
   "data → structure" behaviour is what the models actually do; the
   visual is meaningful, not decorative.
------------------------------------------------------------------ */

// box-muller gaussian
function gaussian() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

// soft round sprite so points are glowing dots, not squares
function makeSprite() {
  const size = 64;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(255,255,255,0.85)');
  g.addColorStop(0.6, 'rgba(255,255,255,0.18)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const CLUSTERS = [
  { center: [-1.25, 0.35, 0.0], spread: 1.05 },
  { center: [1.15, -0.2, -0.6], spread: 1.0 },
  { center: [0.1, -0.95, 0.7], spread: 1.0 }
];

// Two complete palettes, not just a recolour: additive blending (dark theme)
// makes light particle colours glow against deep space — the same trick does
// nothing on a cream background, so light theme uses deeper, more saturated
// bronze/plum tones with normal blending instead, so points read as solid
// warm dust rather than disappearing into the page.
const PALETTES = {
  dark: { core: '#E8A87C', edge: '#FFF3E6', depth: '#8B7FE8', blending: THREE.AdditiveBlending, opacity: 0.92 },
  light: { core: '#B8763E', edge: '#7D4D26', depth: '#6B5BC4', blending: THREE.NormalBlending, opacity: 0.85 }
};

export function PointCloud() {
  const ref = useRef();
  const { theme } = useTheme();
  const palette = PALETTES[theme] ?? PALETTES.dark;

  const count = useMemo(() => {
    if (typeof window === 'undefined') return 3000;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    return window.innerWidth < 768 || coarse ? 1400 : 3200;
  }, []);

  const { geometry, sprite } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const tmp = new THREE.Color();
    const core = new THREE.Color(palette.core);
    const edge = new THREE.Color(palette.edge);
    const depth = new THREE.Color(palette.depth);

    for (let i = 0; i < count; i++) {
      const cl = CLUSTERS[i % CLUSTERS.length];
      const [cx, cy, cz] = cl.center;
      const x = cx + gaussian() * cl.spread;
      const y = cy + gaussian() * cl.spread * 0.8;
      const z = cz + gaussian() * cl.spread;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // colour: core → edge tone, with a few depth-accent points mixed in
      const r = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2 + (z - cz) ** 2);
      const t = Math.min(1, r / (cl.spread * 2.2));
      if (Math.random() < 0.08) {
        tmp.copy(depth);
      } else {
        tmp.copy(core).lerp(edge, t * 0.7);
      }
      colors[i * 3] = tmp.r;
      colors[i * 3 + 1] = tmp.g;
      colors[i * 3 + 2] = tmp.b;
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return { geometry: g, sprite: makeSprite() };
  }, [count, theme]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const d = Math.min(delta, 0.05); // clamp to avoid jumps after tab-away

    // slow ambient rotation + gentle wobble
    ref.current.rotation.y += d * 0.06;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.06;

    // pointer parallax — subtle tilt toward cursor (the "interactive" feel)
    const px = state.pointer.x * 0.18;
    const py = state.pointer.y * 0.12;
    ref.current.rotation.y += (px - ref.current.rotation.y * 0) * 0; // keep base spin
    ref.current.position.x += (px - ref.current.position.x) * 0.04;
    ref.current.position.y += (-py - ref.current.position.y) * 0.04;

    // scroll dolly — camera eases back as you leave the hero (parallax depth)
    const targetZ = 9 + scroll.progress * 3.5;
    state.camera.position.z += (targetZ - state.camera.position.z) * 0.05;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        map={sprite}
        size={0.055}
        sizeAttenuation
        vertexColors
        transparent
        opacity={palette.opacity}
        depthWrite={false}
        blending={palette.blending}
      />
    </points>
  );
}
