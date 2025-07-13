import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';

export default function FloatingOrb() {
  const mesh = useRef();

  useFrame(({ clock }) => {
    mesh.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
  });

  return (
    <mesh ref={mesh} scale={[1.5, 1.5, 1.5]}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshWobbleMaterial
        color="#00f2ff"
        factor={0.5}
        speed={2}
        metalness={0.9}
        roughness={0.2}
      />
    </mesh>
  );
}
