import {useGLTF} from "@react-three/drei";

import skyScene from '../assets/3d/sky.glb';
import React, {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {Mesh} from "three";

interface ISkyProps {
    readonly isRotating: boolean;
}

export default function Sky(props: ISkyProps): JSX.Element {

    const {isRotating} = props;

    const skyRef = useRef<Mesh>(null);

    const sky = useGLTF(skyScene);

    useFrame((_, delta) => {
        if (isRotating) {
            skyRef.current!.rotation.y += 0.15 * delta;
        }
    })

    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene}/>
        </mesh>
    );
};