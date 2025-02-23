import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import './cube.css';

function Box({ position }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const targetScale = clicked ? 1.4 : hovered ? 1.1 : 0.9;

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );

      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime + position[0] + position[2]) * 0.1;

      if (clicked) {
        meshRef.current.rotation.x += delta * 0.5;
        meshRef.current.rotation.y += delta * 0.7;
      }
    }
  });

  // Define colors for gradient transition
  const colorBottom = new THREE.Color("#FFFFFF"); // Black at the bottom
  const colorMiddle = new THREE.Color("#FFFFFF"); // Blue in the middle
  const colorTop = new THREE.Color("#FFFFFF"); // White at the top

  // Interpolating colors based on position height
  const mixFactor = (position[1] + 3) / 6;
  let color;
  if (mixFactor < 0.5) {
    color = colorBottom.clone().lerp(colorMiddle, mixFactor * 2); // Black to Blue
  } else {
    color = colorMiddle.clone().lerp(colorTop, (mixFactor - 0.5) * 2); // Blue to White
  }

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerDown={() => setClicked(true)}
      onPointerUp={() => setClicked(false)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => {
        setHovered(false);
        setClicked(false);
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        color={clicked ? 'white' : hovered ? 'black' : color}
        metalness={0.8}
        roughness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.05}
        transmission={0.3}
        thickness={2}
        opacity={1}
        transparent={true}
        envMapIntensity={1.2}
      />
    </mesh>
  );
}

function CubeGrid({ size }) {
  const cubes = [];

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      for (let z = 0; z < size; z++) {
        cubes.push(
          <Box
            key={`${x}-${y}-${z}`}
            position={[
              x - size / 2 + 0.5,
              y - size / 2 + 0.5,
              z - size / 2 + 0.5,
            ]}
          />
        );
      }
    }
  }

  return <>{cubes}</>;
}

export function Cube() {
  return (
    <div className="cube" style={{ height: '32em', width: '32em' }}>
      <Canvas
        camera={{ position: [6, 6, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.25} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#FFFFFF" />
        <spotLight
          position={[5, 5, 5]}
          angle={0.4}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <CubeGrid size={6} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.75} />
      </Canvas>
    </div>
  );
}

export default Cube;
