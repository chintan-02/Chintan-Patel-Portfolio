import { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { PointCloud } from './PointCloud.jsx';
import { useTheme } from '../../lib/themeStore.jsx';

const FOG_COLOR = { dark: '#0A0A0F', light: '#F6F1E9' };

// onCreated only fires once at canvas mount, so a theme switch *after* mount
// wouldn't otherwise touch the fog — this small inner component re-applies it
// reactively whenever theme changes (it has no visual output of its own).
function FogSync() {
  const { theme } = useTheme();
  const { scene } = useThree();
  useEffect(() => {
    scene.fog = new THREE.Fog(FOG_COLOR[theme] ?? FOG_COLOR.dark, 6, 16);
  }, [theme, scene]);
  return null;
}

/* The heavy part (three.js + fiber) lives here so it can be code-split via
   React.lazy in Scene.jsx — three is only downloaded when WebGL is available
   and motion is allowed. Default export for lazy import. */
export default function SceneCanvas() {
  const { theme } = useTheme();
  return (
    <div
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}
    >
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 9], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={({ scene }) => {
          scene.fog = new THREE.Fog(FOG_COLOR[theme] ?? FOG_COLOR.dark, 6, 16);
        }}
      >
        <FogSync />
        <Suspense fallback={null}>
          <PointCloud />
        </Suspense>
      </Canvas>
    </div>
  );
}
