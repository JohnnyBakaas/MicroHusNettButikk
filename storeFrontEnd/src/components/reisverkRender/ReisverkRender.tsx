import styles from "./ReisverkRender.module.css";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ReisverkStol from "../reisverkStol/ReisverkStol";
import LongFrame from "../longFrame/LongFrame";

export type TestBoxProps = {
  x: number;
  y: number;
  z: number;
  roofIndex: number;
};

const ReisverkRender = ({ x, y, z, roofIndex }: TestBoxProps) => {
  const [positions, setPositions] = useState<number[]>([]);
  const roofAngle = 20;

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

    positions[positions.length - 1] =
      positions[positions.length - 1] - 48 / 100;

    return positions;
  };

  useEffect(() => {
    setPositions(calcPositiions());
  }, [x, y, z, roofIndex]);

  return (
    <div className={styles.canvasWrapper}>
      <Canvas camera={{ position: [5, 3, 10] }}>
        <ambientLight />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[10, 10, 10]} />
        <group position={[-x / 2, -2, -y / 2]}>
          {positions.map((e) => {
            return (
              <ReisverkStol
                width={x}
                height={z}
                key={e}
                yOffset={e}
                roofAngle={roofAngle}
                roofIndex={roofIndex}
              />
            );
          })}
          <LongFrame
            width={x}
            height={z}
            depth={y}
            roofAngle={roofAngle}
            roofIndex={roofIndex}
          />
        </group>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ReisverkRender;
