'use client'
import React, { useRef} from 'react'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import { useMotionValue } from 'framer-motion'
import { useSpring } from "framer-motion"
import { motion } from 'framer-motion-3d'

const CubeModel = () => {
    return (
        <div className='h-[40vh] sm:h-[90vh] w-[300px]'>
            <Canvas>
            <hemisphereLight intensity={0.15} groundColor="white" />
                <Cube />
                <OrbitControls enableZoom={false} enablePan={false} />
                <ambientLight intensity={0.8} />
                <directionalLight intensity={2} position={[1, 1, 1]} />
            </Canvas>
        </div>
    )
}

function Cube(props: any) {

    const mesh = useRef<any>(null) // Replace `THREE.Mesh` with the appropriate type for your mesh

    const options = {
        damping: 10
    }
    const mouse = {
        x: useSpring(useMotionValue(0), options),
        y: useSpring(useMotionValue(0), options)
    }


useFrame((state: any, delta: any) => {
  if (mesh.current) {
    mesh.current.rotation.x += delta * 0.25
    mesh.current.rotation.y += delta * 0.25
    mesh.current.rotation.z += delta * 0.25
  }
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


    const isMobile = window.innerWidth < 768 // Adjust the breakpoint as needed

    const boxSize =  [2, 2, 2]
  
    return (
        <>
            <motion.mesh ref={mesh} {...props} > {/* rotation-x={mouse.y} rotation-y={mouse.x}  */}
                <boxGeometry args={boxSize} /> {/* This basically scale it up to 2.5x2.5x2.5  */}
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