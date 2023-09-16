import styles from "./ReisverkRender.module.css";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ReisverkStol from "../reisverkStol/ReisverkStol";

const ReisverkRender = ({ x, y, z }: TestBoxProps) => {
  const [test, setTest] = useState(1.2);
  return (
    <div className={styles.canvasWrapper}>
      <Canvas camera={{ position: [5, 3, 10] }}>
        <ambientLight />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[10, 10, 10]} />
        <ReisverkStol />
        <OrbitControls />
      </Canvas>
    </div>
  );
  return (
    <div className={styles.canvasWrapper}>
      <Canvas camera={{ position: [5, 3, 10] }}>
        <ambientLight />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[10, 10, 10]} />
        <TestBox x={x} y={y} z={z} />
        <OrbitControls />
      </Canvas>
    </div>
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

  /*
  return (
    <mesh
      visible // object gets render if true
      userData={{ test: "hello" }} // An object that can be used to store custom data about the Object3d
      position={[0, 0, 0]} // The position on the canvas of the object [x,y,x]
      rotation={[0, 0, 0]} // The rotation of the object
      castShadow // Sets whether or not the object cats a shadow
      // There are many more props.....
      >
     
      <sphereGeometry attach="geometry" args={[1, 16, 200]} />
      
      <meshStandardMaterial
      attach="material" // How the element should attach itself to its parent
      color="#7222D3" // The color of the material
      transparent // Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects. When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
      roughness={0.1} // The roughness of the material - Defaults to 1
      metalness={0.1} // The metalness of the material - Defaults to 0
      />
      </mesh>
      );
      */

  return (
    <mesh position={[0, z / 2 - 2, 0]}>
      <boxGeometry args={[x, z, y]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};
