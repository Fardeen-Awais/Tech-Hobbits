'use client'
import React, { useRef} from 'react'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import { useMotionValue } from 'framer-motion'
import { useSpring } from "framer-motion"
import { motion } from 'framer-motion-3d'

const CubeModel = () => {
    return (
        <div className='h-[100vh] w-[600px]'>
            <Canvas>
            <hemisphereLight intensity={0.15} groundColor="white" />
                <Cube />
                <OrbitControls enableZoom={false} enablePan={false} />
                <ambientLight intensity={0.5} />
                <directionalLight intensity={2} position={[4, 4, 4]} />
            </Canvas>
        </div>
    )
}

function Cube(props: any) {

    const mesh = useRef()

    const options = {
        damping: 10
    }
    const mouse = {
        x: useSpring(useMotionValue(0), options),
        y: useSpring(useMotionValue(0), options)
    }


    //* Drag Gesture
    useFrame((state: any, delta: any) => {
        mesh.current.rotation.x += delta * 0.25
        mesh.current.rotation.y += delta * 0.25
        mesh.current.rotation.z += delta * 0.25
    })


    const [texture_1, texture_2, texture_3, texture_4, texture_5, texture_6] = useTexture([
        '/assets/0.avif',
        '/assets/09.jpg',
        '/assets/07.jpg',
        '/assets/texture-10.avif',
        '/assets/4.jpg',
        '/assets/5.jpg',
        '/assets/6.jpg',
    ])



    return (
        <>
            <motion.mesh ref={mesh} {...props} > {/* rotation-x={mouse.y} rotation-y={mouse.x}  */}
                <boxGeometry args={[2.5, 2.5, 2.3]} /> {/* This basically scale it up to 2.5x2.5x2.5  */}
                {/* <meshStandardMaterial map={texture_1} attach="material-01" /> */}
                {/* //  This basically add color only visible when light apply on cube  */}
                <meshStandardMaterial map={texture_4} />
                {/* <meshStandardMaterial map={texture_3}  /> */}
                {/* <meshStandardMaterial map={texture_4}  /> */}
                {/* <meshStandardMaterial map={texture_5}  /> */}
                {/* <meshStandardMaterial map={texture_6}  /> */}
            </motion.mesh>
        </>
    )
}

export default CubeModel