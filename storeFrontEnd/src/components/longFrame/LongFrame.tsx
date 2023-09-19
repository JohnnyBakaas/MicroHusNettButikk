import { useFrame } from "@react-three/fiber";
import { Shape } from "three";

const renderOffset = 0.0001;

type LongFrameProps = {
  width: number;
  height: number;
  depth: number;
  roofAngle: number;
  roofIndex: number;
};

const LongFrame = ({
  width,
  height,
  depth,
  roofAngle,
  roofIndex,
}: LongFrameProps) => {
  useFrame((state, delta) => {});
  const lumberWidth = 98 / 1000;
  const lubmerDebth = 48 / 1000;

  if (roofIndex == 0)
    return (
      <>
        <mesh position={[0, 0, -renderOffset]}>
          <extrudeGeometry
            args={[
              plank(lubmerDebth, lumberWidth, lumberWidth),
              getExtrudeSettings(depth),
            ]}
          />
        </mesh>
        <mesh position={[width - lubmerDebth, 0, -renderOffset]}>
          <extrudeGeometry
            args={[
              plank(lubmerDebth, lumberWidth, lumberWidth),
              getExtrudeSettings(depth),
            ]}
          />
        </mesh>
        <mesh
          position={[
            width - lubmerDebth,
            height -
              (width / 2) * Math.tan((roofAngle * Math.PI) / 180) -
              lumberWidth * 2,
            -renderOffset,
          ]}
        >
          <extrudeGeometry
            args={[
              plank(lubmerDebth, lumberWidth, lumberWidth),
              getExtrudeSettings(depth),
            ]}
          />
        </mesh>
        <mesh
          position={[
            0,
            height -
              (width / 2) * Math.tan((roofAngle * Math.PI) / 180) -
              lumberWidth * 2,
            -renderOffset,
          ]}
        >
          <extrudeGeometry
            args={[
              plank(lubmerDebth, lumberWidth, lumberWidth),
              getExtrudeSettings(depth),
            ]}
          />
        </mesh>
      </>
    );

  if (roofIndex == 1)
    return (
      <>
        <mesh position={[0, 0, -renderOffset]}>
          <extrudeGeometry
            args={[
              plank(lubmerDebth, lumberWidth, lumberWidth),
              getExtrudeSettings(depth),
            ]}
          />
        </mesh>
        <mesh position={[width - lubmerDebth, 0, -renderOffset]}>
          <extrudeGeometry
            args={[
              plank(lubmerDebth, lumberWidth, lumberWidth),
              getExtrudeSettings(depth),
            ]}
          />
        </mesh>
        <mesh
          position={[
            width - lubmerDebth,
            height - lumberWidth - lumberWidth - lumberWidth,
            -renderOffset,
          ]}
        >
          <extrudeGeometry
            args={[
              plank(lubmerDebth, lumberWidth, lumberWidth),
              getExtrudeSettings(depth),
            ]}
          />
        </mesh>
        <mesh
          position={[
            0,
            height -
              width * Math.tan((roofAngle * Math.PI) / 180) -
              lumberWidth * 2,
            -renderOffset,
          ]}
        >
          <extrudeGeometry
            args={[
              plank(lubmerDebth, lumberWidth, lumberWidth),
              getExtrudeSettings(depth),
            ]}
          />
        </mesh>
      </>
    );
  if (roofIndex == 2)
    return (
      <>
        <mesh position={[0, 0, -renderOffset]}>
          <extrudeGeometry
            args={[
              plank(lubmerDebth, lumberWidth, lumberWidth),
              getExtrudeSettings(depth),
            ]}
          />
        </mesh>
        <mesh position={[width - lubmerDebth, 0, -renderOffset]}>
          <extrudeGeometry
            args={[
              plank(lubmerDebth, lumberWidth, lumberWidth),
              getExtrudeSettings(depth),
            ]}
          />
        </mesh>
        <mesh
          position={[
            width - lubmerDebth,
            height - width * Math.tan((22 * Math.PI) / 180) - lumberWidth * 2,
            -renderOffset,
          ]}
        >
          <extrudeGeometry
            args={[
              plank(lubmerDebth, lumberWidth, lumberWidth),
              getExtrudeSettings(depth),
            ]}
          />
        </mesh>
        <mesh
          position={[
            0,
            height - width * Math.tan((22 * Math.PI) / 180) - lumberWidth * 2,
            -renderOffset,
          ]}
        >
          <extrudeGeometry
            args={[
              plank(lubmerDebth, lumberWidth, lumberWidth),
              getExtrudeSettings(depth),
            ]}
          />
        </mesh>
      </>
    );

  return (
    <>
      <mesh position={[0, 0, -renderOffset]}>
        <extrudeGeometry
          args={[
            plank(lubmerDebth, lumberWidth, lumberWidth),
            getExtrudeSettings(depth),
          ]}
        />
      </mesh>
      <mesh position={[width - lubmerDebth, 0, -renderOffset]}>
        <extrudeGeometry
          args={[
            plank(lubmerDebth, lumberWidth, lumberWidth),
            getExtrudeSettings(depth),
          ]}
        />
      </mesh>
      <mesh
        position={[
          width - lubmerDebth,
          height -
            (width / 2) * Math.tan((roofAngle * Math.PI) / 180) -
            lumberWidth * 2,
          -renderOffset,
        ]}
      >
        <extrudeGeometry
          args={[
            plank(lubmerDebth, lumberWidth, lumberWidth),
            getExtrudeSettings(depth),
          ]}
        />
      </mesh>
      <mesh
        position={[
          0,
          height -
            (width / 2) * Math.tan((roofAngle * Math.PI) / 180) -
            lumberWidth * 2,
          -renderOffset,
        ]}
      >
        <extrudeGeometry
          args={[
            plank(lubmerDebth, lumberWidth, lumberWidth),
            getExtrudeSettings(depth),
          ]}
        />
      </mesh>
    </>
  );
};

export default LongFrame;

const plank = (width: number, height: number, lumberWidth: number) => {
  const shape = new Shape();

  shape.moveTo(-renderOffset, -renderOffset);
  shape.lineTo(width + renderOffset, -renderOffset);
  shape.lineTo(width + renderOffset, height + renderOffset);
  shape.lineTo(-renderOffset, height + renderOffset);

  return shape;
};

const getExtrudeSettings = (length: number) => {
  const extrudeSettings = {
    steps: 0,
    depth: length + renderOffset + renderOffset,
    bevelEnabled: true,
    bevelThickness: 0,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 1,
  };
  return extrudeSettings;
};
