import { useFrame } from "@react-three/fiber";
import { Shape } from "three";

type ReisverkStolProps = {
  width: number;
  height: number;
  yOffset: number;
  roofIndex: number;
  roofAngle: number;
};

const ReisverkStol = ({
  width,
  height,
  yOffset,
  roofAngle,
  roofIndex,
}: ReisverkStolProps) => {
  useFrame((state, delta) => {});
  const roofStyles = [saltak, pulttak];
  const lumberWidth = 98 / 1000;
  const lubmerDebth = 48 / 1000;
  const frameWith = width;
  const frameHeight = height;

  return (
    <>
      <mesh position={[0, 0, yOffset / 10]}>
        <extrudeGeometry
          args={[
            roofStyles[roofIndex](frameWith, frameHeight, lumberWidth),
            getExtrudeSettings(lubmerDebth),
          ]}
        />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
};

export default ReisverkStol;

const getExtrudeSettings = (thickness: number) => {
  const extrudeSettings = {
    steps: 0,
    depth: thickness,
    bevelEnabled: true,
    bevelThickness: 0,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 1,
  };
  return extrudeSettings;
};

const pulttak = (width: number, height: number, lumberWidth: number) => {
  const roofAngle = 20;

  const offset = width * Math.tan((roofAngle * Math.PI) / 180);
  const innerOffsetRight = lumberWidth * Math.tan((roofAngle * Math.PI) / 180);

  const shape = new Shape();

  shape.moveTo(0, 0);
  shape.lineTo(width, 0);
  shape.lineTo(width, height);
  shape.lineTo(0, height - offset);

  shape.lineTo(0, lumberWidth);

  shape.lineTo(lumberWidth, lumberWidth);
  shape.lineTo(lumberWidth, height - offset - lumberWidth);
  shape.lineTo(
    width - lumberWidth,
    height - lumberWidth - innerOffsetRight - innerOffsetRight
  );
  shape.lineTo(width - lumberWidth, lumberWidth);
  shape.lineTo(0, lumberWidth);

  return shape;
  // https://www.youtube.com/watch?v=PUB0TaZ7bhA
  // 11:20
};

const saltak = (width: number, height: number, lumberWidth: number) => {
  const roofAngle = 20;

  const offset = (width / 2) * Math.tan((roofAngle * Math.PI) / 180);
  const innerOffsetRight = lumberWidth * Math.tan((roofAngle * Math.PI) / 180);

  const shape = new Shape();

  shape.moveTo(0, 0);
  shape.lineTo(width, 0);
  shape.lineTo(width, height - offset);
  shape.lineTo(width / 2, height);
  shape.lineTo(0, height - offset);

  shape.lineTo(0, lumberWidth);

  shape.lineTo(lumberWidth, lumberWidth);
  shape.lineTo(lumberWidth, height - offset - lumberWidth);
  shape.lineTo(width / 2, height - lumberWidth);
  shape.lineTo(width - lumberWidth, height - offset - lumberWidth);
  shape.lineTo(width - lumberWidth, lumberWidth);
  shape.lineTo(0, lumberWidth);

  return shape;
  // https://www.youtube.com/watch?v=PUB0TaZ7bhA
  // 11:20
};
