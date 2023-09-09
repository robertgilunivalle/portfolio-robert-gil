import { Canvas } from "@react-three/fiber";
import { createRoot} from "react-dom/client";
import Experience from "./experiencie";
import { Info } from "./Info";
const root = createRoot(document.getElementById('root'));

root.render(
    <>

    <Canvas
    style={{background: 'white'}}
    camera={{ position: [2, 0, 5] }}
>
    <Experience/>
    </Canvas>
    <Info
    nombre = {"Robert Fernando Gil Trujillo"}
    biografia = {"Estudiante de septimo semestre de ingenria de sistemas en la Universidad del Valle"}
    />
    </> 
    
);
