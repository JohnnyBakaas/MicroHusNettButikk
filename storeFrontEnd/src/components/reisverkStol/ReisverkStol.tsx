import { Shape } from "three";

const ReisverkStol = () => {
  const roofIndex = 0;
  const lubmerWidth = 98 / 1000;
  const lubmerDebth = 48 / 1000;
  const frameWith = 3000 / 1000;
  const frameHeight = 2400 / 1000;

  if (false)
    return (
      <mesh>
        <shapeGeometry args={[getShape(frameWith, frameHeight, lubmerWidth)]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    );

  return (
    <mesh>
      <extrudeGeometry
        args={[
          getShape(frameWith, frameHeight, lubmerWidth),
          getExtrudeSettings(lubmerDebth),
        ]}
      />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default ReisverkStol;

const getShape = (width: number, height: number, lubmerWidth: number) => {
  const heartShape = new Shape();

  heartShape.moveTo(0, 0);
  heartShape.lineTo(width, 0);
  heartShape.lineTo(width, height);
  heartShape.lineTo(0, height);

  heartShape.lineTo(lubmerWidth, lubmerWidth);
  heartShape.lineTo(lubmerWidth, height - lubmerWidth);
  heartShape.lineTo(width - lubmerWidth, height - lubmerWidth);
  heartShape.lineTo(width - lubmerWidth, lubmerWidth);
  heartShape.lineTo(width, lubmerWidth);
  heartShape.lineTo(lubmerWidth, lubmerWidth);
  heartShape.lineTo(lubmerWidth, height);
  heartShape.lineTo(0, height);

  return heartShape;
};

const getExtrudeSettings = (d: number) => {
  const extrudeSettings = {
    steps: 0,
    depth: d,
    bevelEnabled: true,
    bevelThickness: 0,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 1,
  };
  return extrudeSettings;
};
