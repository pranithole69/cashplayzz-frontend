import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FloatingOrb from './FloatingOrb';

export default function Guardian() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={1.5} />
        <FloatingOrb />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
