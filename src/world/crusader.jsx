import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'


const crusader = () => {
    const crusaderRef= useRef();
    const crusaderModel = useGLTF('/assets/models/crusader/scene.gltf')
    const {animations} = crusaderModel;
    const { actions } = useAnimations(animations, crusaderRef);
    console.log(animations);

    useEffect(() => {
        const action = actions["ArmatureAction.001"]
        action.play()
    }, [])

  return(
    <mesh ref={crusaderRef} position-x={2} position-y={0} rotation-y={-Math.PI * 0.15} scale={0.5}>
    <primitive object={crusaderModel.scene}/>
  </mesh>
  )
}

export default crusader;
useGLTF.preload("/assets/model/crusader/scene.gltf");
