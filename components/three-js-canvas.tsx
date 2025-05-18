"use client"

import React from "react"
import { Canvas } from "@react-three/fiber"
import { Text3D, Center, Environment, Float, PerspectiveCamera } from "@react-three/drei"
import { useRef, useEffect, useState } from "react"
import { useThree, useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function Text3DScene() {
  const textRef = useRef<THREE.Mesh>(null)
  const { camera } = useThree()

  useEffect(() => {
    if (textRef.current) {
      camera.lookAt(textRef.current.position)
    }
  }, [camera])

  useFrame((state, delta) => {
    if (textRef.current) {
      textRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[0, 0.5]}>
        <Center>
          <Text3D
            ref={textRef}
            font="/fonts/Inter_Bold.json"
            size={1.5}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            Badhon
            <meshStandardMaterial
              color="#00FFAA"
              emissive="#00FFAA"
              emissiveIntensity={0.5}
              roughness={0.1}
              metalness={0.8}
            />
          </Text3D>
        </Center>
      </Float>
      <Environment preset="night" />
    </>
  )
}

export default function ThreeJSCanvas() {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-primary">Unable to load 3D content</div>
      </div>
    )
  }

  return (
    <ErrorBoundary onError={() => setHasError(true)}>
      <Canvas>
        <Text3DScene />
      </Canvas>
    </ErrorBoundary>
  )
}

// Simple error boundary component
class ErrorBoundary extends React.Component<{
  children: React.ReactNode
  onError: () => void
}> {
  componentDidCatch(error: Error) {
    console.error("Three.js error:", error)
    this.props.onError()
  }

  render() {
    return this.props.children
  }
}
