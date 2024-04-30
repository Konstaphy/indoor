import { Canvas } from "@react-three/fiber"
import { IMapEngine } from "src/_engine/model/engine.types.ts"
import { ThreeJsRenderer } from "src/_engine/ui/three-js-renderer/three-js-renderer.tsx"
import { GeoJson } from "src/shared/model/geo/geojson.types.ts"
import { css } from "emotion"
import { MapControls as MC } from "@react-three/drei"
import { OrthographicCamera, PerspectiveCamera } from "three"

type ThreeJsMapProps = { map: GeoJson }
const canvasContainerStyles = css({
  width: "100%",
  height: "100vh",
})

export class ThreeJsEngine implements IMapEngine<ThreeJsMapProps> {
  private camera: OrthographicCamera | PerspectiveCamera

  constructor(camera: OrthographicCamera | PerspectiveCamera) {
    this.camera = camera
  }

  renderMap = (props: ThreeJsMapProps) => {
    return (
      <div className={canvasContainerStyles}>
        <Canvas camera={this.camera}>
          <MC
            camera={this.camera}
            enableDamping
            enableRotate={this.camera instanceof PerspectiveCamera}
            zoomToCursor
            dampingFactor={0.05}
            screenSpacePanning={false}
            minDistance={10}
            maxDistance={50}
            maxPolarAngle={Math.PI / 2}
          />
          <ambientLight color={"white"} intensity={5} castShadow />
          <directionalLight
            intensity={0.8}
            color="purple"
            position={[10, 20, 10]}
            castShadow
          />
          <directionalLight
            intensity={0.6}
            color="blue"
            position={[10, 20, -10]}
          />
          <ThreeJsRenderer map={props.map} />
        </Canvas>
      </div>
    )
  }
}
