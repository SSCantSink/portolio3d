/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: nimzu (https://sketchfab.com/nimzuk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907
Title: Fox's islands
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/3d/island.glb";

import * as THREE from "three";
import { GroupProps } from "@react-three/fiber";
import { a } from "@react-spring/three";
import { GLTF } from 'three-stdlib'
import {Stage} from "../pages/Home";

type GLTFResult = GLTF & {
    nodes: {
        polySurface944_tree_body_0: THREE.Mesh
        polySurface945_tree1_0: THREE.Mesh
        polySurface946_tree2_0: THREE.Mesh
        polySurface947_tree1_0: THREE.Mesh
        polySurface948_tree_body_0: THREE.Mesh
        polySurface949_tree_body_0: THREE.Mesh
        pCube11_rocks1_0: THREE.Mesh
    }
    materials: {
        PaletteMaterial001: THREE.MeshStandardMaterial
    }
}

interface IslandProps extends GroupProps {
    isRotating: boolean;
    setIsRotating: (isRotating: boolean) => void;
    setCurrentStage: (stage: number | null) => void;
}

export default function Island({isRotating, setIsRotating, setCurrentStage, ...props}: IslandProps ): JSX.Element {

    const islandRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null);

    const {gl, viewport} = useThree();

    const { nodes, materials } = useGLTF(islandScene) as GLTFResult

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e: PointerEvent | TouchEvent ) => {
        e.stopPropagation(); // only do when it touches this function and no other elements on the screen.
        e.preventDefault();
        setIsRotating(true);

        let clientX;
        if (e instanceof PointerEvent) {
            clientX = e.clientX;
        } else {
            clientX = e.touches[0].clientX;
        }

        lastX.current = clientX;

    }

    const handlePointerUp = (e: PointerEvent) => {
        e.stopPropagation(); // only do when it touches this function and no other elements on the screen.
        e.preventDefault();
        setIsRotating(false);
    }

    const handlePointerMove = (e: PointerEvent) => {
        e.stopPropagation(); // only do when it touches this function and no other elements on the screen.
        e.preventDefault();

        if (isRotating) {
            const clientX = e.clientX;

            const delta = (clientX - lastX.current) / viewport.width;

            islandRef.current!.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }

    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
            if (!isRotating) setIsRotating(true);
            islandRef.current!.rotation.y += 0.01 * Math.PI;
            rotationSpeed.current = 0.0125;
        } else if (e.key === "ArrowRight") {
            if (!isRotating) setIsRotating(true);
            islandRef.current!.rotation.y -= 0.01 * Math.PI;
            rotationSpeed.current = -0.0125;
        }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            setIsRotating(false);
        }
    }

    useEffect(() => {

        const canvas = gl.domElement;

        canvas.addEventListener("pointermove", handlePointerMove);
        canvas.addEventListener("pointerup", handlePointerUp);
        canvas.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            canvas.removeEventListener("pointermove", handlePointerMove);
            canvas.removeEventListener("pointerup", handlePointerUp);
            canvas.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        }


    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

    useFrame(() => {
        if (!isRotating) {
            rotationSpeed.current *= dampingFactor
            if (Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            }
            islandRef.current!.rotation.y += rotationSpeed.current;
        } else {
            const rotation = islandRef.current!.rotation.y;

            const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

            // Set the current stage based on the island's orientation
            switch (true) {
                case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                    setCurrentStage(Stage.Stage4);
                    break;
                case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                    setCurrentStage(Stage.Stage3);
                    break;
                case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                    setCurrentStage(Stage.Stage2);
                    break;
                case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                    setCurrentStage(Stage.Stage1);
                    break;
                default:
                    setCurrentStage(null);
            }

        }
    })

    return (
        <a.group ref={islandRef} {...props}>
            <mesh
                geometry={nodes.polySurface944_tree_body_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface945_tree1_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface946_tree2_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface947_tree1_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface948_tree_body_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface949_tree_body_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.pCube11_rocks1_0.geometry}
                material={materials.PaletteMaterial001}
            />
        </a.group>
    )
}

useGLTF.preload('/island.glb')
