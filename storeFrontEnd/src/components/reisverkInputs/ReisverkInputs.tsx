import { useEffect, useState } from "react";
import styles from "./ReisverkInputs.module.css";

type ReisverkInputsProps = {
  maxM2: number;
  setMaxM2: (e: number) => void;
  x: number;
  setX: (e: number) => void;
  y: number;
  setY: (e: number) => void;
  z: number;
  setZ: (e: number) => void;
  roofIndex: number;
  setRoofIndex: (e: number) => void;
};

const ReisverkInputs = ({
  maxM2,
  setMaxM2,
  x,
  setX,
  y,
  setY,
  z,
  setZ,
  roofIndex,
  setRoofIndex,
}: ReisverkInputsProps) => {
  const [maxX, setMaxX] = useState(5);
  const [maxY, setMaxY] = useState(6);
  const [isMikrohus, setIsMikrohus] = useState(true);
  const [m2, setM2] = useState(30);

  const clacMaxImputs = () => {
    console.log("endringXDDD");
    setMaxX(maxM2 / y);
    setMaxY(maxM2 / x);
    calcM2();
  };

  const calcM2 = () => {
    setM2(x * y);
  };

  useEffect(() => {
    clacMaxImputs();
  }, [maxM2, x, y, z, roofIndex]);

  useEffect(() => {
    if (isMikrohus && maxM2 > 30) {
      setMaxM2(30);
    }
  }, [isMikrohus]);

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.mSqareWrapper}>
        <label htmlFor="squareInput">
          <h3>max m2</h3>
          <input
            id="squareInput"
            type="number"
            min={10}
            value={maxM2}
            onChange={(e) => {
              const newVal = Number(e.target.value);
              if (!isMikrohus) {
                setMaxM2(newVal);
              } else {
                if (newVal <= 30) {
                  setMaxM2(newVal);
                }
              }
            }}
          />
        </label>
        <label htmlFor="microHus" className={styles.container}>
          <h3>Microhus?</h3>
          <input
            type="checkbox"
            id="microHus"
            className={styles.microHusCheckbox}
            checked={isMikrohus}
            onChange={() => {
              setIsMikrohus((pre) => !pre);
            }}
          />
          <span className={styles.checkmark}></span>
        </label>
        <div className={styles.m2wrapper}>
          <h3>m2: </h3>
          <p>{m2}</p>
        </div>
      </div>

      <div className={styles.rangeWrapper}>
        <label htmlFor="x">
          <h3 className={styles.h3}>X</h3>
          <input
            className={styles.slider}
            id="x"
            type="range"
            min={1}
            max={maxX}
            value={x}
            step="0.1"
            onChange={(e) => setX(Number(e.target.value))}
          />
          <input
            type="number"
            min={1}
            max={maxX}
            value={x}
            step="0.1"
            onChange={(e) => setX(Number(e.target.value))}
          />
        </label>

        <label htmlFor="y">
          <h3 className={styles.h3}>Y</h3>
          <input
            className={styles.slider}
            id="y"
            type="range"
            min={1}
            max={maxY}
            value={y}
            step="0.1"
            onChange={(e) => setY(Number(e.target.value))}
          />
          <input
            type="number"
            min={1}
            max={maxY}
            value={y}
            step="0.1"
            onChange={(e) => setY(Number(e.target.value))}
          />
        </label>

        <label htmlFor="z">
          <h3 className={styles.h3}>Z</h3>
          <input
            className={styles.slider}
            id="z"
            type="range"
            min={2.5}
            max={4.4}
            value={z}
            step="0.1"
            onChange={(e) => setZ(Number(e.target.value))}
          />
          <input
            type="number"
            min={2.5}
            max={4.4}
            value={z}
            step="0.1"
            onChange={(e) => setZ(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
};

export default ReisverkInputs;
