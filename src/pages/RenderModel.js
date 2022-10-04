import { Canvas } from "@react-three/fiber";
import retailmodels from "../components/directory/Retail3dmodels";
import React, { Suspense } from "react";
// import { Model } from "../components/directory/Retailmodels/P1";
import { Link, useParams } from "react-router-dom";
import { OrbitControls } from "@react-three/drei";

const RenderModel = () => {
  const { id } = useParams();
  console.log(id);

  const viewmodels = retailmodels.map((el, i) => {
    return (
      el.id === id && (
        <Canvas key={i} camera={{ fov: 65, position: [0, 5, 10] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={2} />
            <pointLight intensity={2} position={[10, -10, 0]} angle={0.3} />
            <pointLight intensity={2} position={[10, 10, 0]} />
            {<el.Model />}
            <OrbitControls
              enablePan={true}
              enableRotate={true}
              enableZoom={true}
            />
            {/* <mesh position={[0, -4, 0]} rotation={[Math.PI / 2, 0, 0]}>
                  <planeGeometry args={[30, 30]} />
                  <pointLight intensity={1} position={[0, 0, 10]} angle={0.3} />
                  <meshStandardMaterial color="#1ea3d8" />
                </mesh> */}
          </Suspense>
        </Canvas>
      )
    );
  });

  return (
    <div className="text-black h-[100vh] overflow-hidden bg-slate-500">
      <Link to="/" className="font-semibold text-xl p-2 my-3 pl-[50px]">
        Back to homepage
      </Link>
      {viewmodels}
    </div>
  );
};

export default RenderModel;
