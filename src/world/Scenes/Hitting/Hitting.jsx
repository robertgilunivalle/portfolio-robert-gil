// Hitting.js
import { useEffect, useRef, useState } from "react";
import { RigidBody } from '@react-three/rapier';
import Crusader from "../Welcome/Models/crusader";

const Hitting = () => {
    const ballBodyRef = useRef();

    const onHandleSphere = () => {
        ballBodyRef.current.applyImpulse({
            x: 3,
            y: 0,
            z: 0
        }, true);

        ballBodyRef.current.addForce({
            x: 5,
            y: 1,
            z: 0
        }, true);
    }
    const onHandleCrusader = () => {
        ballBodyRef.current.wakeUp()
    }
    const [play, setPlay] = useState(false);
    const [hitSound] = useState(()=>new Audio("assets/sounds/tom.wav"))
  

    useEffect(()=>{
        if(play){
            hitSound.currentTime = 0;
            hitSound.volume = Math.random();
            hitSound.play();
        }
    }, [play])

    useEffect(()=>{
        ballBodyRef.current.sleep()
    }, [])

    return (
        <>

            <RigidBody
                type={"dynamic"}
                colliders={"cuboid"}
                position={[2, 3, -5]}
                
                gravityScale={-0.01} 
          
            >
            <Crusader onClick={onHandleCrusader} />
            </RigidBody>
            <RigidBody
                ref={ballBodyRef}
                colliders="ball"
                position={[0, 3, -5]}
                friction={0}
                restitution={0}
                onCollisionEnter={()=>setPlay(true)}
                onCollisionExit={()=>setPlay(false)}
            >
                            <mesh scale={0.5} onClick={onHandleSphere} >
                    <sphereGeometry />
                    <meshStandardMaterial color="red" />
                </mesh>
                </RigidBody>
        </>
    );
}

export default Hitting;
