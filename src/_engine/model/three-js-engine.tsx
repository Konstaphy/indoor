import { Canvas } from "@react-three/fiber"
import { IMapEngine } from "src/_engine/model/engine.types.ts"
import { ThreeJsRenderer } from "src/_engine/ui/three-js-renderer/three-js-renderer.tsx"
import { GeoJson } from "src/shared/model/geo/geojson.types.ts"
import { css } from "emotion"
import { MapControls as MC } from "@react-three/drei"
import { PerspectiveCamera } from "three"

type ThreeJsMapProps = { map: GeoJson }
const canvasContainerStyles = css({
  width: "100%",
  height: "100vh",
})

export class ThreeJsEngine implements IMapEngine<ThreeJsMapProps> {
  renderMap = (props: ThreeJsMapProps) => {
    // camera conf
    const camera = new PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      10000,
    )
    camera.position.set(0, 90, 220)
    camera.lookAt(0, 0, 0)

    return (
      <div className={canvasContainerStyles}>
        <Canvas camera={camera}>
          <MC
            camera={camera}
            enableDamping
            zoomToCursor
            dampingFactor={0.05}
            screenSpacePanning={false}
            minDistance={10}
            maxDistance={50}
            maxPolarAngle={Math.PI / 2}
          />
          <ambientLight color={"lightyellow"} intensity={1} castShadow />
          <directionalLight
            intensity={0.8}
            color="purple"
            position={[10, 20, 10]}
            castShadow
          />
          <directionalLight
            intensity={1.3}
            color="blue"
            position={[10, 20, -10]}
          />
          <ThreeJsRenderer map={props.map} />
        </Canvas>
      </div>
    )
  }
}
