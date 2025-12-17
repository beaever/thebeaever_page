'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useThemeStore } from '@/stores/useThemeStore';

interface FloatingShapeProps {
  position: [number, number, number];
  speed: number;
  rotationIntensity: number;
  floatIntensity: number;
  scale: number;
  shape:
    | 'torusKnot'
    | 'torus'
    | 'octahedron'
    | 'icosahedron'
    | 'ring'
    | 'cone'
    | 'cylinder';
  isDark: boolean;
}

function FloatingShape({
  position,
  speed,
  rotationIntensity,
  floatIntensity,
  scale,
  shape,
  isDark,
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const lineColor = isDark ? '#e5e5e5' : '#171717';

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002 * speed;
      meshRef.current.rotation.y += 0.003 * speed;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case 'torusKnot':
        return new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
      case 'torus':
        return new THREE.TorusGeometry(1, 0.3, 16, 50);
      case 'octahedron':
        return new THREE.OctahedronGeometry(1, 0);
      case 'icosahedron':
        return new THREE.IcosahedronGeometry(1, 0);
      case 'ring':
        return new THREE.TorusGeometry(1, 0.02, 8, 50);
      case 'cone':
        return new THREE.ConeGeometry(0.8, 1.5, 8);
      case 'cylinder':
        return new THREE.CylinderGeometry(0.5, 0.5, 1.5, 12);
      default:
        return new THREE.OctahedronGeometry(1, 0);
    }
  }, [shape]);

  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);

  return (
    <Float
      speed={speed}
      rotationIntensity={rotationIntensity}
      floatIntensity={floatIntensity}
    >
      <group ref={meshRef} position={position} scale={scale}>
        <lineSegments geometry={edges}>
          <lineBasicMaterial color={lineColor} transparent opacity={0.6} />
        </lineSegments>
      </group>
    </Float>
  );
}

interface SceneProps {
  isDark: boolean;
}

function Scene({ isDark }: SceneProps) {
  const shapes = useMemo(
    () => [
      {
        position: [-8, 5, -8] as [number, number, number],
        speed: 0.6,
        rotationIntensity: 0.25,
        floatIntensity: 0.3,
        scale: 4.0,
        shape: 'torusKnot' as const,
      },
      {
        position: [9, -5, -10] as [number, number, number],
        speed: 0.5,
        rotationIntensity: 0.2,
        floatIntensity: 0.35,
        scale: 4.5,
        shape: 'torusKnot' as const,
      },
    ],
    []
  );

  return (
    <>
      {shapes.map((props, index) => (
        <FloatingShape key={index} {...props} isDark={isDark} />
      ))}
    </>
  );
}

export function FloatingObjects() {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <div className='fixed inset-0 -z-10 pointer-events-none'>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene isDark={isDark} />
      </Canvas>
    </div>
  );
}
