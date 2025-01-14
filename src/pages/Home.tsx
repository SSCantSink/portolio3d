import React, {Suspense, useState} from "react";
import {Canvas, Euler, Vector3} from "@react-three/fiber";
import Loader from "../components/Loader.tsx";
import Island from "../models/island.tsx";
import Sky from "../models/Sky.tsx";
import Bird from "../models/Bird.tsx";
import Plane from "../models/Plane.tsx";
import {HomeInfo} from "../components/HomeInfo.tsx";

export enum Stage {
    Stage1 = 1,
    Stage2 = 2,
    Stage3 = 3,
    Stage4 = 4,
}

interface ObjectProps {
    screenScale: Vector3;
    screenPosition: Vector3;
    screenRotation: Euler;
}

const Home = () => {

    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState<Stage | null>(Stage.Stage1);

    const adjustIslandForScreenSize = () : ObjectProps => {
        let screenScale: Vector3 | undefined;
        let screenPosition: Vector3 = [0, -6.5, -43];
        let screenRotation : Euler = [0.1, 4.7, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }

        return {screenScale, screenPosition, screenRotation};
    }

    const adjustPlaneForScreenSize = () : ObjectProps => {
        let screenScale: Vector3;
        let screenPosition: Vector3;
        let screenRotation : Euler = [0, 20, 0];

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -4, -4];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return {screenScale, screenPosition, screenRotation};
    }

    const islandProps = adjustIslandForScreenSize();
    const planeProps = adjustPlaneForScreenSize();

    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
                camera={{near: 0.1, far: 1000}}
            >
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[1, 1, 1]} intensity={2}/>
                    <ambientLight intensity={0.5}/>
                    <hemisphereLight intensity={1}/>
                    <Sky isRotating={isRotating}/>
                    <Bird/>
                    <Plane
                        isRotating={isRotating}
                        planeScale={planeProps.screenScale}
                        planePosition={planeProps.screenPosition}
                        rotation={planeProps.screenRotation}
                    />
                    <Island
                        position={islandProps.screenPosition}
                        scale={islandProps.screenScale}
                        rotation={islandProps.screenRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
}

export default Home;