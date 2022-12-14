/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/P7.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.04, 0.03]}>
        <mesh geometry={nodes.mesh_45_0.geometry} material={materials['Material.026']} />
        <mesh geometry={nodes.mesh_45_2.geometry} material={materials['Material.026']} />
        <mesh geometry={nodes.mesh_45_7.geometry} material={materials['Material.026']} />
        <mesh geometry={nodes.mesh_45_9.geometry} material={materials['Material.026']} />
        <mesh geometry={nodes.mesh_45_11.geometry} material={materials['Material.026']} />
        <mesh geometry={nodes.mesh_45_13.geometry} material={materials['Material.026']} />
        <mesh geometry={nodes.mesh_45_15.geometry} material={materials['Material.026']} />
        <mesh geometry={nodes.mesh_45_1.geometry} material={materials['Material.027']} />
        <mesh geometry={nodes.mesh_45_8.geometry} material={materials['Material.027']} />
        <mesh geometry={nodes.mesh_45_12.geometry} material={materials['Material.027']} />
        <mesh geometry={nodes.mesh_45_14.geometry} material={materials['Material.027']} />
        <mesh geometry={nodes.mesh_45_3.geometry} material={materials['Material.028']} />
        <mesh geometry={nodes.mesh_45_6.geometry} material={materials['Material.028']} />
        <mesh geometry={nodes.mesh_45_10.geometry} material={materials['Material.028']} />
        <mesh geometry={nodes.mesh_45_16.geometry} material={materials['Material.028']} />
        <mesh geometry={nodes.mesh_45_4.geometry} material={materials['Material.023']} />
        <mesh geometry={nodes.mesh_45_5.geometry} material={materials['Material.024']} />
      </group>
    </group>
  )
}

useGLTF.preload('/P7.glb')
