"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, MeshDistortMaterial, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';

function SwirlingRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Ring */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh>
          <torusGeometry args={[3, 0.02, 16, 100]} />
          <meshStandardMaterial color="#D4AF37" roughness={0.1} metalness={1} emissive="#D4AF37" emissiveIntensity={0.2} />
        </mesh>
      </Float>

      {/* Inner Distorted Core */}
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#2B211C"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0.2}
            metalness={0.9}
            wireframe
          />
        </mesh>
      </Float>

      {/* Secondary Orbit */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.5, 0.01, 16, 100]} />
        <meshStandardMaterial color="#F5EFEB" opacity={0.5} transparent />
      </mesh>
    </group>
  );
}

function FloatingParticles() {
  return (
    <group>
      <Sparkles count={500} scale={12} size={2} speed={0.4} opacity={0.3} color="#D4AF37" />
      <Sparkles count={300} scale={10} size={1.5} speed={0.2} opacity={0.2} color="#F5EFEB" />
    </group>
  );
}

export function HeroCanvas() {
  return (
    <div className="fixed inset-0 z-0 opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <fog attach="fog" args={['#110C0A', 5, 15]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#F5EFEB" />
        <spotLight position={[-5, -5, -5]} intensity={2} color="#D4AF37" penumbra={1} />
        
        <Stars radius={50} depth={20} count={3000} factor={3} saturation={1} fade speed={0.5} />
        <FloatingParticles />
        <SwirlingRings />
        
      </Canvas>
    </div>
  );
}
