"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function Sun() {
  const sunRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={sunRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        emissive="#FDB813"
        emissiveIntensity={2}
        color="#FDB813"
      />
      <pointLight color="#FDB813" intensity={2} distance={100} />
    </mesh>
  );
}

interface PlanetProps {
  size: number;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  emissive?: string;
}

function Planet({ size, color, orbitRadius, orbitSpeed, emissive }: PlanetProps) {
  const planetRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const time = clock.getElapsedTime() * orbitSpeed;
      planetRef.current.rotation.y = time;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={planetRef}>
      <mesh ref={meshRef} position={[orbitRadius, 0, 0]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={emissive || color}
          emissiveIntensity={0.3}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
    </group>
  );
}

export default function SolarSystem3D() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 20, 30], fov: 60 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.1} />
        
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <Sun />
        
        {/* Mercury */}
        <Planet size={0.3} color="#8C7853" orbitRadius={4} orbitSpeed={0.8} />
        
        {/* Venus */}
        <Planet size={0.5} color="#FFC649" orbitRadius={6} orbitSpeed={0.6} />
        
        {/* Earth */}
        <Planet size={0.6} color="#4169E1" orbitRadius={8} orbitSpeed={0.5} emissive="#1E90FF" />
        
        {/* Mars */}
        <Planet size={0.4} color="#CD5C5C" orbitRadius={10} orbitSpeed={0.4} />
        
        {/* Jupiter */}
        <Planet size={1.2} color="#DAA520" orbitRadius={14} orbitSpeed={0.2} />
        
        {/* Saturn */}
        <Planet size={1} color="#F4A460" orbitRadius={18} orbitSpeed={0.15} />
        
        {/* Uranus */}
        <Planet size={0.7} color="#4FD0E0" orbitRadius={22} orbitSpeed={0.1} />
        
        {/* Neptune */}
        <Planet size={0.7} color="#4169E1" orbitRadius={25} orbitSpeed={0.08} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
