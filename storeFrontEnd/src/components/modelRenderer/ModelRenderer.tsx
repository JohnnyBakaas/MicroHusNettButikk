import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

type ModelRendererProps = {
  modelURL: string;
};

const ModelRenderer = ({ modelURL }: ModelRendererProps) => {
  return (
    <div>
      <Canvas camera={{ position: [150, 13, 10] }}>
        <ambientLight color="#ffffff" intensity={1} />
        <mesh>
          <ObjModel url={modelURL} />
          <meshStandardMaterial color="orange" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ModelRenderer;

type ObjModelPros = {
  url: string;
};

function ObjModel({ url }: ObjModelPros) {
  // @ts-ignore
  const obj = useLoader(OBJLoader, url);
  return <primitive object={obj} />;
}
