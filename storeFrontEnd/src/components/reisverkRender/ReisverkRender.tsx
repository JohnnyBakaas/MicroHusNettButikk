import styles from "./ReisverkRender.module.css";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ReisverkStol from "../reisverkStol/ReisverkStol";

export type TestBoxProps = {
  x: number;
  y: number;
  z: number;
};

const ReisverkRender = ({ x, y, z }: TestBoxProps) => {
  const [positions, setPositions] = useState<number[]>([]);

  const calcPositiions = () => {
    let pos = 0;
    const positions = [];
    while (pos <= y * 10) {
      positions.push(pos);
      pos += 6;
    }

    if (positions[positions.length - 1] != y * 10) {
      positions.push(y * 10);
    }

    return positions;
  };

  useEffect(() => {
    setPositions(calcPositiions());
  }, [y]);

  return (
    <div className={styles.canvasWrapper}>
      <Canvas camera={{ position: [5, 3, 10] }}>
        <ambientLight />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[10, 10, 10]} />
        {positions.map((e) => {
          return <ReisverkStol width={x} height={z} key={e} yOffset={e} />;
        })}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ReisverkRender;
