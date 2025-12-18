import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

/**
 * Rotating cube animation
 */
function RotatingCube() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.7;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#ff7a18" />
    </mesh>
  );
}

/**
 * Floating sphere animation
 */
function FloatingSphere() {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    sphereRef.current.position.y = Math.sin(clock.elapsedTime) * 1.2;
  });

  return (
    <mesh ref={sphereRef} position={[3, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#4facfe" />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
        {/* LIGHTS */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* OBJECTS */}
        <RotatingCube />
        <FloatingSphere />

        {/* CONTROLS */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
