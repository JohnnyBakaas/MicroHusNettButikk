import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { LoaderUtils, LoadingManager, Object3D } from "three";

const ModelTest = () => {
  return (
    <div>
      <Canvas camera={{ position: [150, 13, 10] }}>
        <ambientLight color="#ffffff" intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <ObjModel url="public/models/husXDDDD.obj" />
          <meshStandardMaterial color="orange" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ModelTest;

function ObjModel({ url }: any) {
  // @ts-ignore
  const obj = useLoader(OBJLoader, url);
  console.log("kake");
  return <primitive object={obj} />;
}
