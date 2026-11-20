import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, MeshDistortMaterial, Sparkles, Stars } from "@react-three/drei";
import type { Group } from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function Core({ reduced }: { reduced: boolean }) {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!group.current || reduced) return;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x += delta * 0.04;
  });

  return (
    <group ref={group}>
      <Float speed={reduced ? 0 : 1.4} rotationIntensity={reduced ? 0 : 0.5} floatIntensity={reduced ? 0 : 1.1}>
        <mesh>
          <sphereGeometry args={[1.45, 64, 64]} />
          <MeshDistortMaterial
            color="#0b1226"
            emissive="#4d7cff"
            emissiveIntensity={0.06}
            roughness={0.25}
            metalness={0.9}
            distort={reduced ? 0 : 0.32}
            speed={1.4}
          />
        </mesh>

        <mesh>
          <icosahedronGeometry args={[2.05, 2]} />
          <meshStandardMaterial
            color="#4d7cff"
            emissive="#4d7cff"
            emissiveIntensity={0.45}
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>

        <mesh rotation={[1.35, 0.2, 0]}>
          <torusGeometry args={[2.5, 0.012, 8, 128]} />
          <meshBasicMaterial color="#45e8dc" transparent opacity={0.65} />
        </mesh>
        <mesh rotation={[1.1, 0.9, 0.4]}>
          <torusGeometry args={[2.85, 0.008, 8, 128]} />
          <meshBasicMaterial color="#8b6bff" transparent opacity={0.45} />
        </mesh>
      </Float>
    </group>
  );
}

function Loader() {
  return (
    <Html center>
      <span className="mono-label whitespace-nowrap text-[10px] text-text-tertiary">
        Initializing 3D
      </span>
    </Html>
  );
}

export default function Scene() {
  const reduced = useReducedMotion();

  return (
    <Canvas
      camera={{ position: [0, 0, 8.5], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={2} />
      <pointLight position={[-4, -2, 2]} color="#45e8dc" intensity={30} />
      <pointLight position={[4, 2, -3]} color="#4d7cff" intensity={40} />

      <Suspense fallback={<Loader />}>
        <Core reduced={reduced} />
        <Stars radius={70} depth={45} count={reduced ? 300 : 1400} factor={3.5} fade speed={0.5} />
        {!reduced && <Sparkles count={60} scale={7} size={2} speed={0.35} color="#45e8dc" />}
      </Suspense>
    </Canvas>
  );
}
