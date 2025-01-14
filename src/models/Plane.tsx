import React, {useEffect, useRef} from "react";

import planeScene from '../assets/3d/plane.glb'
import {useAnimations, useGLTF} from "@react-three/drei";
import {Euler, Vector3} from "@react-three/fiber";
import {Mesh} from "three";

interface PlaneProps {
    planeScale: Vector3;
    planePosition: Vector3;
    isRotating: boolean;
    rotation: Euler;
}

export default function Plane(props: PlaneProps): JSX.Element {

    const ref = useRef<Mesh>(null);

    const {scene, animations} = useGLTF(planeScene);

    const {actions} = useAnimations(animations, ref);

    const {isRotating, planeScale, planePosition, rotation} = props;

    useEffect(() => {
        if (isRotating) {
            actions['Take 001']?.play()
        } else {
            actions['Take 001']?.stop();
        }
    }, [actions, isRotating]);

    return (
        <mesh ref={ref} position={planePosition} scale={planeScale} rotation={rotation}>
            <primitive object={scene}/>
        </mesh>
    );
}