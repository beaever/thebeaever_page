'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Float,
  MeshTransmissionMaterial,
  Environment,
} from '@react-three/drei';
import * as THREE from 'three';
import { useThemeStore } from '@/stores/useThemeStore';

interface GlassSphereProps {
  position: [number, number, number];
  scale: number;
  speed: number;
  isDark: boolean;
}

function GlassSphere({ position, scale, speed, isDark }: GlassSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
      meshRef.current.rotation.y += 0.003 * speed;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.5;
    }
  });

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={8}
          resolution={256}
          transmission={0.95}
          roughness={0.1}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color={isDark ? '#a0a0ff' : '#4040a0'}
        />
      </mesh>
    </Float>
  );
}

interface AbstractMeshProps {
  position: [number, number, number];
  scale: number;
  speed: number;
  isDark: boolean;
  type: 'torusKnot' | 'torus';
}

function AbstractMesh({
  position,
  scale,
  speed,
  isDark,
  type,
}: AbstractMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001 * speed;
      meshRef.current.rotation.y += 0.002 * speed;
      meshRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const geometry = useMemo(() => {
    if (type === 'torusKnot') {
      return new THREE.TorusKnotGeometry(1, 0.25, 128, 16, 2, 3);
    }
    return new THREE.TorusGeometry(1, 0.4, 24, 64);
  }, [type]);

  const baseColor = isDark ? '#c8c8ff' : '#3030a0';
  const emissiveColor = isDark ? '#4040a0' : '#2020a0';

  return (
    <Float speed={speed * 0.3} rotationIntensity={0.15} floatIntensity={0.2}>
      <mesh ref={meshRef} position={position} scale={scale} geometry={geometry}>
        <meshStandardMaterial
          color={baseColor}
          emissive={emissiveColor}
          emissiveIntensity={0.1}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={isDark ? 0.15 : 0.12}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

interface ParticleFieldProps {
  count: number;
  isDark: boolean;
}

function ParticleField({ count, isDark }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (seededRandom(i * 3) - 0.5) * 30;
      positions[i * 3 + 1] = (seededRandom(i * 3 + 1) - 0.5) * 30;
      positions[i * 3 + 2] = (seededRandom(i * 3 + 2) - 0.5) * 20 - 10;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.03}
        color={isDark ? '#ffffff' : '#000000'}
        transparent
        opacity={isDark ? 0.4 : 0.3}
        sizeAttenuation
      />
    </points>
  );
}

interface FlowingRibbonProps {
  isDark: boolean;
}

function FlowingRibbon({ isDark }: FlowingRibbonProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const curve = useMemo(() => {
    const points = [];
    for (let i = 0; i < 100; i++) {
      const t = i / 99;
      const x = Math.sin(t * Math.PI * 4) * 3;
      const y = (t - 0.5) * 12;
      const z = Math.cos(t * Math.PI * 4) * 3 - 8;
      points.push(new THREE.Vector3(x, y, z));
    }
    return new THREE.CatmullRomCurve3(points);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[6, 0, 0]}>
      <tubeGeometry args={[curve, 64, 0.05, 8, false]} />
      <meshBasicMaterial
        color={isDark ? '#a0a0ff' : '#4040a0'}
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}

interface SceneProps {
  isDark: boolean;
}

function Scene({ isDark }: SceneProps) {
  const { viewport } = useThree();
  const scale = Math.min(viewport.width, viewport.height) / 10;

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.5}
        color='#ffffff'
      />
      <pointLight
        position={[-10, -10, -10]}
        intensity={0.3}
        color={isDark ? '#6060ff' : '#4040a0'}
      />
      <pointLight
        position={[10, 10, 10]}
        intensity={0.2}
        color={isDark ? '#a0a0ff' : '#6060a0'}
      />

      <GlassSphere
        position={[-6 * scale, 3 * scale, -5]}
        scale={1.8 * scale}
        speed={0.8}
        isDark={isDark}
      />

      <GlassSphere
        position={[7 * scale, -2 * scale, -8]}
        scale={2.2 * scale}
        speed={0.6}
        isDark={isDark}
      />

      <AbstractMesh
        position={[-5 * scale, -4 * scale, -10]}
        scale={2.5 * scale}
        speed={0.5}
        isDark={isDark}
        type='torusKnot'
      />

      <AbstractMesh
        position={[5 * scale, 4 * scale, -12]}
        scale={3.0 * scale}
        speed={0.4}
        isDark={isDark}
        type='torus'
      />

      <ParticleField count={150} isDark={isDark} />

      <FlowingRibbon isDark={isDark} />

      <Environment preset='night' />
    </>
  );
}

export function FloatingObjects() {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <div className='fixed inset-0 -z-10 pointer-events-none'>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Scene isDark={isDark} />
      </Canvas>
    </div>
  );
}
