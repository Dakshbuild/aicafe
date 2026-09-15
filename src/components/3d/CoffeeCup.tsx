"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshPhysicalMaterial } from 'three';
import * as THREE from 'three';

export function CoffeeCup({ scale = 1, position = [0, 0, 0] }: { scale?: number, position?: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Ceramic Material for the cup
  const ceramicMaterial = new MeshPhysicalMaterial({
    color: '#F5EFEB',
    metalness: 0.1,
    roughness: 0.2,
    clearcoat: 0.8,
    clearcoatRoughness: 0.2,
  });

  // Dark Coffee Material
  const coffeeMaterial = new MeshPhysicalMaterial({
    color: '#110C0A',
    metalness: 0.2,
    roughness: 0.1,
    transmission: 0.5, // liquid feel
    thickness: 0.5,
  });

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
      // Note: Rotation will be primarily handled by GSAP in the parent component
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Cup Body (Tapered Cylinder) */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.2, 0.9, 2.5, 32]} />
        <primitive object={ceramicMaterial} attach="material" />
      </mesh>

      {/* Cup Inside (Hollow illusion) */}
      <mesh position={[0, 1.25, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.1, 32]} />
        <primitive object={ceramicMaterial} attach="material" />
      </mesh>

      {/* Coffee Liquid */}
      <mesh position={[0, 1.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.05, 32]} />
        <primitive object={coffeeMaterial} attach="material" />
      </mesh>

      {/* Cup Handle */}
      <mesh position={[1.2, 0.2, 0]} rotation={[0, 0, -Math.PI / 8]} castShadow>
        <torusGeometry args={[0.6, 0.15, 16, 32]} />
        <primitive object={ceramicMaterial} attach="material" />
      </mesh>
    </group>
  );
}
