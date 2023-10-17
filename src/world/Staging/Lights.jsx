import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Lights = () => {
    const pointLightRef = useRef();
    const spotLightRef = useRef();

    useFrame((state) => {
        pointLightRef.current.position.x = Math.sin(state.clock.getElapsedTime()) * 2;
        pointLightRef.current.position.z = Math.cos(state.clock.getElapsedTime()) * 2;
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight
                ref={pointLightRef}
                position={[0, 4, 2]}
                intensity={1}
                color={"white"}
                distance={5}
            />
            <spotLight
                ref={spotLightRef}
                position={[0, 4, 2]}
                angle={Math.PI / 12}
                intensity={500}
                penumbra={1}
                color={"white"}
                distance={8}
            />
            <hemisphereLight intensity={5} color={"red"} />
        </>
    );
};

export default Lights;
