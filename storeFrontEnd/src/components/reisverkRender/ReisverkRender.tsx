import styles from "./ReisverkRender.module.css";
import * as THREE from "three";
import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { cameraPosition } from "three/examples/jsm/nodes/Nodes.js";

function Box(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const ReisverkRender = ({ x, y, z }: TestBoxProps) => {
  const [test, setTest] = useState(1.2);
  return (
    <>
      <div className={styles.canvasWrapper}>
        <Canvas camera={{ position: [5, 3, 10] }}>
          <ambientLight />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[10, 10, 10]} />
          <TestBox x={x} y={y} z={z} />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
};

export default ReisverkRender;

export type TestBoxProps = {
  x: number;
  y: number;
  z: number;
};

const TestBox = ({ x, y, z }: TestBoxProps) => {
  useFrame((state, delta) => {});
  return (
    <mesh position={[0, z / 2, 0]}>
      <boxGeometry args={[x, z, y]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};
