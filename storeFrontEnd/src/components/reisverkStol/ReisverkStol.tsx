import { Shape } from "three";

const ReisverkStol = () => {
  const roofIndex = 0;
  const lumberWidth = 98 / 1000;
  const lubmerDebth = 48 / 1000;
  const frameWith = 3000 / 1000;
  const frameHeight = 2400 / 1000;

  if (false)
    return (
      <mesh>
        <shapeGeometry args={[getShape(frameWith, frameHeight, lumberWidth)]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    );

  return (
    <mesh>
      <extrudeGeometry
        args={[
          getShapeTwo(frameWith, frameHeight, lumberWidth),
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

const getShapeTwo = (width: number, height: number, lumberWidth: number) => {
  const offset = 1;
  const shape = new Shape();

  shape.moveTo(0, 0);
  shape.lineTo(width, 0);
  shape.lineTo(width, height);
  shape.lineTo(0, height - offset);

  shape.lineTo(0, lumberWidth);

  shape.lineTo(lumberWidth, lumberWidth);
  shape.lineTo(lumberWidth, height - offset - lumberWidth);
  shape.lineTo(width - lumberWidth, height - lumberWidth);
  shape.lineTo(width - lumberWidth, lumberWidth);
  shape.lineTo(0, lumberWidth);

  return shape;
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
