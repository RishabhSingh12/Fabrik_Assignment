import { useGLTF } from "@react-three/drei";

const retailmodels = [
  {
    id: "P1",
    imgsrc: "../../../../assets/P1.jpg",
    name: "ModelP1",
    Model: function Model(props) {
      const { nodes, materials } = useGLTF("/P1.glb");
      return (
        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
            <mesh
              geometry={nodes.mesh_92_0.geometry}
              material={materials["Material.011"]}
            />
            <mesh
              geometry={nodes.mesh_92_2.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              geometry={nodes.mesh_92_4.geometry}
              material={materials["Material.007"]}
            />
            <mesh
              geometry={nodes.mesh_92_5.geometry}
              material={materials["Material.010"]}
            />
            <mesh
              geometry={nodes.mesh_92_1.geometry}
              material={materials["Material.008"]}
            />
            <mesh
              geometry={nodes.mesh_92_3.geometry}
              material={materials["Material.012"]}
            />
          </group>
        </group>
      );
    },
  },

  {
    id: "P2",
    name: "ModelP2",
    imgsrc: "../../../../assets/P2.jpg",
    Model: function Model(props) {
      const { nodes, materials } = useGLTF("/P2.glb");
      return (
        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
            <mesh
              geometry={nodes.mesh_95_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              geometry={nodes.mesh_95_5.geometry}
              material={materials["Material.006"]}
            />
            <mesh
              geometry={nodes.mesh_95_2.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              geometry={nodes.mesh_95_1.geometry}
              material={materials["Material.013"]}
            />
            <mesh
              geometry={nodes.mesh_95_3.geometry}
              material={materials["Material.014"]}
            />
            <mesh
              geometry={nodes.mesh_95_4.geometry}
              material={materials["Material.003"]}
            />
          </group>
        </group>
      );
    },
  },

  {
    id: "P3",
    name: "ModelP3",
    imgsrc: "../../../../assets/P3.jpg",
    Model: function Model(props) {
      const { nodes, materials } = useGLTF("/P3.glb");
      return (
        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
            <mesh
              geometry={nodes.mesh_98_0.geometry}
              material={materials["Material.044"]}
            />
            <mesh
              geometry={nodes.mesh_98_4.geometry}
              material={materials["Material.042"]}
            />
            <mesh
              geometry={nodes.mesh_98_5.geometry}
              material={materials["Material.043"]}
            />
            <mesh
              geometry={nodes.mesh_98_2.geometry}
              material={materials["Material.045"]}
            />
            <mesh
              geometry={nodes.mesh_98_3.geometry}
              material={materials["Material.047"]}
            />
            <mesh
              geometry={nodes.mesh_98_1.geometry}
              material={materials["Material.046"]}
            />
          </group>
        </group>
      );
    },
  },

  {
    id: "P4",
    name: "ModelP4",
    imgsrc: "../../../../assets/P4.jpg",
    Model: function Model(props) {
      const { nodes, materials } = useGLTF("/P4.glb");
      return (
        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
            <mesh
              geometry={nodes.mesh_11_2.geometry}
              material={materials["Material.033"]}
            />
            <mesh
              geometry={nodes.mesh_11_3.geometry}
              material={materials["Material.035"]}
            />
            <mesh
              geometry={nodes.mesh_11_4.geometry}
              material={materials["Material.030"]}
            />
            <mesh
              geometry={nodes.mesh_11_5.geometry}
              material={materials["Material.031"]}
            />
            <mesh
              geometry={nodes.mesh_11_0.geometry}
              material={materials["Material.032"]}
            />
            <mesh
              geometry={nodes.mesh_11_1.geometry}
              material={materials["Material.034"]}
            />
          </group>
        </group>
      );
    },
  },

  {
    id: "P6",
    name: "ModelP6",
    imgsrc: "../../../../assets/P6.jpg",
    Model: function Model(props) {
      const { nodes, materials } = useGLTF("/P6.glb");
      return (
        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
            <mesh
              geometry={nodes.mesh_15_4.geometry}
              material={materials["Material.072"]}
            />
            <mesh
              geometry={nodes.mesh_15_0.geometry}
              material={materials["Material.074"]}
            />
            <mesh
              geometry={nodes.mesh_15_2.geometry}
              material={materials["Material.075"]}
            />
            <mesh
              geometry={nodes.mesh_15_5.geometry}
              material={materials["Material.073"]}
            />
            <mesh
              geometry={nodes.mesh_15_1.geometry}
              material={materials["Material.076"]}
            />
            <mesh
              geometry={nodes.mesh_15_3.geometry}
              material={materials["Material.077"]}
            />
          </group>
        </group>
      );
    },
  },

  {
    id: "P7",
    name: "ModelP7",
    imgsrc: "../../../../assets/P7.jpg",
    Model: function Model(props) {
      const { nodes, materials } = useGLTF("/P7.glb");
      return (
        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
            <mesh
              geometry={nodes.mesh_45_0.geometry}
              material={materials["Material.026"]}
            />
            <mesh
              geometry={nodes.mesh_45_2.geometry}
              material={materials["Material.026"]}
            />
            <mesh
              geometry={nodes.mesh_45_7.geometry}
              material={materials["Material.026"]}
            />
            <mesh
              geometry={nodes.mesh_45_9.geometry}
              material={materials["Material.026"]}
            />
            <mesh
              geometry={nodes.mesh_45_11.geometry}
              material={materials["Material.026"]}
            />
            <mesh
              geometry={nodes.mesh_45_13.geometry}
              material={materials["Material.026"]}
            />
            <mesh
              geometry={nodes.mesh_45_15.geometry}
              material={materials["Material.026"]}
            />
            <mesh
              geometry={nodes.mesh_45_1.geometry}
              material={materials["Material.027"]}
            />
            <mesh
              geometry={nodes.mesh_45_8.geometry}
              material={materials["Material.027"]}
            />
            <mesh
              geometry={nodes.mesh_45_12.geometry}
              material={materials["Material.027"]}
            />
            <mesh
              geometry={nodes.mesh_45_14.geometry}
              material={materials["Material.027"]}
            />
            <mesh
              geometry={nodes.mesh_45_3.geometry}
              material={materials["Material.028"]}
            />
            <mesh
              geometry={nodes.mesh_45_6.geometry}
              material={materials["Material.028"]}
            />
            <mesh
              geometry={nodes.mesh_45_10.geometry}
              material={materials["Material.028"]}
            />
            <mesh
              geometry={nodes.mesh_45_16.geometry}
              material={materials["Material.028"]}
            />
            <mesh
              geometry={nodes.mesh_45_4.geometry}
              material={materials["Material.023"]}
            />
            <mesh
              geometry={nodes.mesh_45_5.geometry}
              material={materials["Material.024"]}
            />
          </group>
        </group>
      );
    },
  },

  {
    id: "P8",
    name: "ModelP8",
    imgsrc: "../../../../assets/P8.jpg",
    Model: function Model(props) {
      const { nodes, materials } = useGLTF("/P8.glb");
      return (
        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
            <mesh
              geometry={nodes.mesh_39_1.geometry}
              material={materials["Material.040"]}
            />
            <mesh
              geometry={nodes.mesh_39_2.geometry}
              material={materials["Material.039"]}
            />
            <mesh
              geometry={nodes.mesh_39_0.geometry}
              material={materials["Material.038"]}
            />
            <mesh
              geometry={nodes.mesh_39_4.geometry}
              material={materials["Material.036"]}
            />
            <mesh
              geometry={nodes.mesh_39_5.geometry}
              material={materials["Material.037"]}
            />
            <mesh
              geometry={nodes.mesh_39_3.geometry}
              material={materials["Material.041"]}
            />
          </group>
        </group>
      );
    },
  },

  {
    id: "P9",
    name: "ModelP9",
    imgsrc: "../../../../assets/P9.jpg",
    Model: function Model(props) {
      const { nodes, materials } = useGLTF("/P9.glb");
      return (
        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
            <mesh
              geometry={nodes.mesh_79_2.geometry}
              material={materials["Material.019"]}
            />
            <mesh
              geometry={nodes.mesh_79_4.geometry}
              material={materials["Material.016"]}
            />
            <mesh
              geometry={nodes.mesh_79_0.geometry}
              material={materials["Material.018"]}
            />
            <mesh
              geometry={nodes.mesh_79_1.geometry}
              material={materials["Material.020"]}
            />
            <mesh
              geometry={nodes.mesh_79_5.geometry}
              material={materials["Material.017"]}
            />
            <mesh
              geometry={nodes.mesh_79_3.geometry}
              material={materials["Material.021"]}
            />
          </group>
        </group>
      );
    },
  },

  {
    id: "P12",
    name: "ModelP12",
    imgsrc: "../../../../assets/P12.jpg",
    Model: function Model(props) {
      const { nodes, materials } = useGLTF("/P12.glb");
      return (
        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
            <mesh
              geometry={nodes.mesh_35_0.geometry}
              material={materials["Material.050"]}
            />
            <mesh
              geometry={nodes.mesh_35_2.geometry}
              material={materials["Material.051"]}
            />
            <mesh
              geometry={nodes.mesh_35_3.geometry}
              material={materials["Material.053"]}
            />
            <mesh
              geometry={nodes.mesh_35_4.geometry}
              material={materials["Material.048"]}
            />
            <mesh
              geometry={nodes.mesh_35_5.geometry}
              material={materials["Material.049"]}
            />
            <mesh
              geometry={nodes.mesh_35_1.geometry}
              material={materials["Material.052"]}
            />
          </group>
        </group>
      );
    },
  },

  {
    id: "P13",
    name: "ModelP13",
    imgsrc: "../../../../assets/P13.jpg",
    Model: function Model(props) {
      const { nodes, materials } = useGLTF("/P13.glb");
      return (
        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
            <mesh
              geometry={nodes.mesh_25_4.geometry}
              material={materials["Material.060"]}
            />
            <mesh
              geometry={nodes.mesh_25_1.geometry}
              material={materials["Material.064"]}
            />
            <mesh
              geometry={nodes.mesh_25_3.geometry}
              material={materials["Material.065"]}
            />
            <mesh
              geometry={nodes.mesh_25_5.geometry}
              material={materials["Material.061"]}
            />
            <mesh
              geometry={nodes.mesh_25_2.geometry}
              material={materials["Material.063"]}
            />
            <mesh
              geometry={nodes.mesh_25_0.geometry}
              material={materials["Material.062"]}
            />
          </group>
        </group>
      );
    },
  },

  {
    id: "P17",
    name: "ModelP17",
    imgsrc: "../../../../assets/P17.jpg",
    Model: function Model(props) {
      const { nodes, materials } = useGLTF("/P17.glb");
      return (
        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
            <mesh
              geometry={nodes.mesh_31_4.geometry}
              material={materials["Material.054"]}
            />
            <mesh
              geometry={nodes.mesh_31_0.geometry}
              material={materials["Material.056"]}
            />
            <mesh
              geometry={nodes.mesh_31_5.geometry}
              material={materials["Material.055"]}
            />
            <mesh
              geometry={nodes.mesh_31_2.geometry}
              material={materials["Material.057"]}
            />
            <mesh
              geometry={nodes.mesh_31_3.geometry}
              material={materials["Material.059"]}
              position={[0, 0, -0.02]}
            />
            <mesh
              geometry={nodes.mesh_31_1.geometry}
              material={materials["Material.058"]}
            />
          </group>
        </group>
      );
    },
  },

  {
    id: "P18",
    name: "ModelP18",
    imgsrc: "../../../../assets/P18.jpg",
    Model: function Model(props) {
      const { nodes, materials } = useGLTF("/P18.glb");
      return (
        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
            <mesh
              geometry={nodes.mesh_21_1.geometry}
              material={materials["Material.070"]}
            />
            <mesh
              geometry={nodes.mesh_21_2.geometry}
              material={materials["Material.069"]}
            />
            <mesh
              geometry={nodes.mesh_21_4.geometry}
              material={materials["Material.066"]}
            />
            <mesh
              geometry={nodes.mesh_21_0.geometry}
              material={materials["Material.068"]}
            />
            <mesh
              geometry={nodes.mesh_21_3.geometry}
              material={materials["Material.071"]}
            />
            <mesh
              geometry={nodes.mesh_21_5.geometry}
              material={materials["Material.067"]}
            />
          </group>
        </group>
      );
    },
  },
];

export default retailmodels;
