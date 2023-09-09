import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { dispose } from "@react-three/fiber";

export const WoodenFence = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/woodenFence/woodenFence.glb");
  const PATH =  "/assets/textures/wood/"

  const propTexture = useTexture({
   // map: PATH + 'woodColor.jpg',
    normalMap: PATH + 'woodNormal.jpg',
    roughnessMap: PATH + 'woodRoughness.jpg',
    aoMap: PATH + 'woodAO.jpg',
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WoodenFence.geometry}
        material={nodes.WoodenFence.material}
      >
        <meshStandardMaterial {...propTexture}/>
      </mesh>
    </group>
  );
}

useGLTF.preload("/assets/models/woodenFence/woodenFence.glb");