/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/P4.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.03, 0.17]}>
        <mesh geometry={nodes.mesh_11_2.geometry} material={materials['Material.033']} />
        <mesh geometry={nodes.mesh_11_3.geometry} material={materials['Material.035']} />
        <mesh geometry={nodes.mesh_11_4.geometry} material={materials['Material.030']} />
        <mesh geometry={nodes.mesh_11_5.geometry} material={materials['Material.031']} />
        <mesh geometry={nodes.mesh_11_0.geometry} material={materials['Material.032']} />
        <mesh geometry={nodes.mesh_11_1.geometry} material={materials['Material.034']} />
      </group>
    </group>
  )
}

useGLTF.preload('/P4.glb')
