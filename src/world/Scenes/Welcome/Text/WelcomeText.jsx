import { Center, Float, Html, Text, Text3D } from "@react-three/drei"
import { useEffect } from "react";
import { Color } from "three";

const WelcomeText = () => {
    const text = `Informacion de \n
    interés`

    return (
        // <Html position={[0, 3, 0]} center distanceFactor={12}>
        //     <h2 className="welcome-text">Welcome</h2>
        // </Html>
        // <Float speed={2}>
        //     <Text
        //         font="/assets/fonts/Bangers-Regular.ttf"
        //         fontSize={0.3}
        //         color={new Color(0xFF6E09)}
        //         position-y={3}
        //         maxWidth={2}
        //         textAlign="center"
        //     >
        //         
        //     </Text>
        // </Float>
        
        <Center
            position-y={3}
        >
            <Float
             speed={2} // Animation speed
             rotationIntensity={1.5} // XYZ rotation intensity
             floatIntensity={1.5} // Up/down float intensity
            >
            <Text3D
                font={"/assets/fonts/pixelify.json"}
                bevelEnabled
                bevelSize={0.01}
                bevelThickness={0.1}
                height={0.1}
                lineHeight={0.5}
                letterSpacing={0.05}
                size={0.25}
            >
                {text}
                <meshNormalMaterial />
            </Text3D>
            </Float>
           
       
        </Center>

    )
}

export default WelcomeText;