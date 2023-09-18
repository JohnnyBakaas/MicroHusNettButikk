import { Shape } from "three";

type ReisverkStolProps = {
  width: number;
  height: number;
  yOffset: number;
};

const ReisverkStol = ({ width, height, yOffset }: ReisverkStolProps) => {
  const roofIndex = 0;
  const roofStyles = [pulttak];
  const lumberWidth = 98 / 1000;
  const lubmerDebth = 48 / 1000;
  const frameWith = width;
  const frameHeight = height;

  return (
    <mesh position={[0, 0, yOffset / 10]}>
      <extrudeGeometry
        args={[
          roofStyles[roofIndex](frameWith, frameHeight, lumberWidth),
          getExtrudeSettings(lubmerDebth),
        ]}
      />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default ReisverkStol;

const getShape = (width: number, height: number, lumberWidth: number) => {
  const shape = new Shape();

  shape.moveTo(0, 0);
  shape.lineTo(width, 0);
  shape.lineTo(width, height);
  shape.lineTo(0, height + 1);
  shape.lineTo(lumberWidth, lumberWidth);
  shape.lineTo(lumberWidth, height - lumberWidth);
  shape.lineTo(width - lumberWidth, height - lumberWidth);
  shape.lineTo(width - lumberWidth, lumberWidth);
  shape.lineTo(width, lumberWidth);
  shape.lineTo(lumberWidth, lumberWidth);
  shape.lineTo(lumberWidth, height);
  shape.lineTo(0, 0);

  return shape;
};

const pulttak = (width: number, height: number, lumberWidth: number) => {
  const angle = 20;

  const offset = width * Math.tan((angle * Math.PI) / 180);
  const innerOffsetRight = lumberWidth * Math.tan((angle * Math.PI) / 180);

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
