import "./style.css"
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MeshDepthMaterial, MeshLambertMaterial, MeshMatcapMaterial } from "@react-three/fiber";
import Crusader from "./world/crusader";
import crusader from "./world/crusader";
import { WoodenFence } from "./world/woodenFence";
import WelcomeText from "./world/WelcomeText";
import { Sign } from "./world/sign";



//comentario de prueba
const Experience = () => {

    const boxRef = useRef();
    const sphereRef = useRef();
    const coneRef = useRef();
    const torusRef = useRef();

{/*
useFrame((state, delta) => {
    boxRef.current.rotation.x += 1 * delta;
    sphereRef.current.rotation.x += 0.01;
    sphereRef.current.rotation.y += 0.01;
    coneRef.current.rotation.x += 0.01;
    coneRef.current.rotation.y += 0.01;
    torusRef.current.rotation.x += 0.01;
    torusRef.current.rotation.y += 0.01;
});
*/}


    return(
        
      <>
      <OrbitControls makeDefault />

      {/* Configura las posiciones para que estén una encima de la otra */}
      <group position={[0, 0, 0]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Crusader />
      </group>
      <WoodenFence position={[4,0,3]}/>
      <group position={[0, 0, 0]}>
          <mesh position-y={-2} rotation-x={-Math.PI / 2}>
            <planeGeometry attach="geometry" args={[12, 12]} />
            <meshStandardMaterial attach="material" color="green" />
          </mesh>
        </group>
      {/*
      <group position={[0, 0, 0]}>
        <mesh ref={sphereRef} position={[0, 1, 0]}> 
          <sphereGeometry args={[1, 32, 32]} />
          <meshDepthMaterial color="red" />
        </mesh>
      </group>

      <group position={[0, 0, 0]}>
        <mesh ref={coneRef} position={[0, 2, 0]}> 
          <coneGeometry args={[1, 2, 32]} />
          <meshLambertMaterial color="blue" />
        </mesh>
      </group>

      <group position={[0, 0, 0]}>
        <mesh ref={torusRef} position={[0, 3, 0]}> 
          <torusGeometry args={[1, 0.3, 16, 100]} />
          <meshMatcapMaterial color="green" />
        </mesh>
      </group>

      <group position={[0, 0, 0]}>
        <mesh position-y={-2} rotation-x={-Math.PI / 2}>
          <planeGeometry attach="geometry" args={[12, 12]} />
          <meshStandardMaterial attach="material" color="green" />
        </mesh>
      </group>

      <group position={[0, 0, 0]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <mesh ref={boxRef} position={[0, 4, 0]}> 
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="purple" />
        </mesh>
      </group>

      */}

      <Sign position={[-3,-2,0]}>
        <WelcomeText />
      </Sign>
    </>
    );
}
export default Experience;