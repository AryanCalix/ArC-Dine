'use client'

import { useRef, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Dynamically import Canvas to avoid SSR issues
const Canvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  { ssr: false }
)

function AnimatedFood() {
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.3
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.5
    }
  })

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#FF6B00"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

function FoodParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particlesCount = 100
  const positions = new Float32Array(particlesCount * 3)
  
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#FF6B00" transparent opacity={0.6} />
    </points>
  )
}

export default function Hero3D() {
  return (
    <div className="relative w-full h-[500px] bg-gradient-to-b from-black/60 to-black/40 overflow-hidden backdrop-blur-sm transition-all duration-300">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <div className="animate-fade-in mb-6">
          <h1 className="text-4xl md:text-5xl font-medium text-white/80 mb-2">
            Welcome to
          </h1>
          <div className="text-6xl md:text-7xl font-black text-white" style={{ letterSpacing: '-0.02em' }}>
            ArC Dine
          </div>
        </div>
        <p className="text-base md:text-lg text-white/70 drop-shadow-lg">
          Delicious Food, Delivered Fresh 🍽️
        </p>
        <p className="text-sm md:text-base text-white/70 mt-4 font-semibold tracking-widest backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full">
          Owned by <span className="text-white font-bold">AryanCalix</span>
        </p>
      </div>
      
      <div className="absolute inset-0 opacity-70">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#FF6B00" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF6B00" />
            <AnimatedFood />
            <FoodParticles />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}
