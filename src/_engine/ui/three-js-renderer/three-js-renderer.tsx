import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import { css } from "emotion"

const canvasContainerStyles = css({
  width: "100%",
  height: "100vh",
})

export const ThreeJsRenderer = () => {
  const meshRef = useRef(null)
  return (
    <div className={canvasContainerStyles}>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <mesh ref={meshRef}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </Canvas>
    </div>
  )
}
