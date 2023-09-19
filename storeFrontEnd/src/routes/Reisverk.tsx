import { useState } from "react";
import ReisverkInputs from "../components/reisverkInputs/ReisverkInputs";
import ReisverkRender from "../components/reisverkRender/ReisverkRender";

const Reisverk = () => {
  const [maxM2, setMaxM2] = useState(30);
  const [x, setX] = useState(5);
  const [y, setY] = useState(6);
  const [z, setZ] = useState(4);
  const [roofIndex, setRoofIndex] = useState(0);

  return (
    <main>
      <ReisverkRender x={x} y={y} z={z} roofIndex={roofIndex} />

      <ReisverkInputs
        maxM2={maxM2}
        setMaxM2={setMaxM2}
        x={x}
        setX={setX}
        y={y}
        setY={setY}
        z={z}
        setZ={setZ}
        roofIndex={roofIndex}
        setRoofIndex={setRoofIndex}
      />
    </main>
  );
};

export default Reisverk;

/*
Hva vi trenger av data:
input for størelse (m2)
x og y input for m2
max og min høyde
Tak stil
*/
