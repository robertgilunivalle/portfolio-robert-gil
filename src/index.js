import { Canvas } from "@react-three/fiber";
import "./style.css";
import { createRoot} from "react-dom/client";
import { Info } from "./Info";
import Experience from "./world/Staging/experiencie";
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
    biografia = {"Estudiante de séptimo semestre de ingeniería de sistemas en la Universidad del Valle"}
    />
    </> 
    
);
